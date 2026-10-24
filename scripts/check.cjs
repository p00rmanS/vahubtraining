const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
const read = (name) => fs.readFileSync(path.join(site, name), "utf8");
const html = read("index.html");
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);

/* ---- Every shipped script is referenced, parses, and is free of risky patterns ---- */
const shipped = fs.readdirSync(site).filter((f) => f.endsWith(".js"));
assert.deepEqual(
  [...shipped].sort(),
  [...scripts].sort(),
  "site/*.js files and index.html <script> tags must match",
);
const SECRET =
  /(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|-----BEGIN [\w ]*PRIVATE KEY-----|sk-proj-[A-Za-z0-9_-]{20,})/;
for (const filename of scripts) {
  const source = read(filename);
  new vm.Script(source, { filename });
  assert(
    !/\b(?:eval|Function)\s*\(/.test(source),
    `Dynamic code in ${filename}`,
  );
  assert(!SECRET.test(source), `Credential pattern in ${filename}`);
  assert(
    !/document\.write|\.outerHTML\s*=|insertAdjacentHTML/.test(source),
    `Unsafe DOM API in ${filename}`,
  );
  assert(
    !/\bstyle\s*=\s*\?["']/.test(source),
    `Inline style attribute in ${filename}; use a class or data-vars`,
  );
  assert(
    !/setAttribute\(\s*["']style/.test(source),
    `Inline style via setAttribute in ${filename}`,
  );
}

/* ---- Course data ---- */
const context = vm.createContext({});
for (const filename of scripts)
  if (
    filename.startsWith("course") ||
    filename === "mentoring.js" ||
    filename.startsWith("taglish") ||
    filename === "exams.js" ||
    filename === "tips.js" ||
    filename.startsWith("deepdive")
  )
    vm.runInContext(read(filename), context);
const records = vm.runInContext("lessons", context);
assert.equal(records.length, 132);
assert.equal(new Set(records.map((r) => r.id)).size, records.length);
for (const r of records) {
  assert(
    r.teach && r.taglish && r.proTips.length === 2,
    `Missing content: ${r.id}`,
  );
  assert(
    r.options[r.answer] && r.ready.length && r.steps.length,
    `Invalid lesson: ${r.id}`,
  );
}
for (const [term] of Object.entries(vm.runInContext("glossary", context)))
  assert(
    vm.runInContext("glossaryTaglish", context)[term],
    `Glossary term missing Taglish: ${term}`,
  );
for (const s of vm.runInContext("scenarios", context))
  assert(
    vm.runInContext("scenarioTaglish", context)[s[0]],
    `Simulation missing Taglish: ${s[0]}`,
  );
assert.equal(
  vm.runInContext("templateTaglish.length", context),
  vm.runInContext("templates.length", context),
);
assert.equal(
  vm.runInContext("weekTaglish.length", context),
  vm.runInContext("weeks.length", context),
);
for (const exam of vm.runInContext("exams", context))
  assert(exam.taglish, `Exam missing Taglish: ${exam.id}`);
/* ---- Structural integrity of every lesson ---- */
const moduleList = vm.runInContext("modules", context);
moduleList.forEach((module, i) => {
  const inModule = records.filter((r) => r.mi === i);
  assert(inModule.length > 0, `Empty module ${i}`);
  inModule.forEach((r, j) =>
    assert.equal(r.li, j, `Lesson order in module ${i}`),
  );
});
for (const r of records) {
  assert.equal(r.options.length, 3, `Options: ${r.id}`);
  assert.equal(new Set(r.options).size, 3, `Duplicate options: ${r.id}`);
  assert(r.answer >= 0 && r.answer < 3, `Answer index: ${r.id}`);
  for (const key of [
    "teach",
    "example",
    "exercise",
    "mistake",
    "question",
    "explanation",
    "taglish",
  ])
    assert(
      typeof r[key] === "string" &&
        r[key].trim() &&
        !/undefined|\[object/.test(r[key]),
      `Bad ${key}: ${r.id}`,
    );
  assert(
    r.ready.every((item) => item.trim()),
    `Empty readiness item: ${r.id}`,
  );
}

const tipList = vm.runInContext("tips", context);
const tipCats = vm.runInContext("tipCategories", context);
assert(tipList.length >= 30, "Expected at least 30 real-life tips");
for (const tip of tipList) {
  assert(tipCats.includes(tip.cat), `Unknown tip category: ${tip.cat}`);
  assert(
    tip.title && tip.tip.length > 40 && tip.taglish.length > 40,
    `Incomplete tip: ${tip.title}`,
  );
}
for (const cat of tipCats)
  assert(
    tipList.some((t) => t.cat === cat),
    `No tips in ${cat}`,
  );
for (const r of records) {
  assert(
    Array.isArray(r.deepDive) && r.deepDive.length >= 2,
    `Walkthrough missing: ${r.id}`,
  );
  for (const [heading, text] of r.deepDive)
    assert(heading && text.length > 60, `Thin walkthrough entry: ${r.id}`);
}
for (const r of records)
  assert(
    typeof r.tl.deep === "string" && r.tl.deep.length > 40,
    `Missing Taglish walkthrough summary: ${r.id}`,
  );
const TAGLISH_KEYS = ["example", "exercise", "mistake", "tips", "why"];
for (const r of records) {
  assert(r.tl, `Missing Taglish companions: ${r.id}`);
  for (const key of TAGLISH_KEYS)
    assert(
      typeof r.tl[key] === "string" && r.tl[key].length > 20,
      `Missing Taglish ${key}: ${r.id}`,
    );
}
assert.equal(
  Object.keys(vm.runInContext("taglishExtra", context)).length,
  records.length,
  "taglishExtra must have exactly one entry per lesson",
);
for (const [name, url] of vm.runInContext("clientSources", context)) {
  assert(/^https:\/\//.test(url), `Source link must be https: ${name}`);
}

/* ---- HTML, assets, and Content-Security-Policy ---- */
for (const m of html.matchAll(/(?:src|href)="([^"#]+)"/g))
  if (!/^(?:https?:|data:)/.test(m[1]))
    assert(fs.existsSync(path.join(site, m[1])), `Missing asset: ${m[1]}`);
const csp =
  html.match(/Content-Security-Policy"\s+content="([^"]+)"/)?.[1] ?? "";
assert(
  csp.includes("default-src 'none'") && csp.includes("connect-src 'none'"),
);
assert(
  !csp.includes("unsafe-inline") && !csp.includes("unsafe-eval"),
  "CSP must not allow unsafe code",
);
assert(!/\sstyle\s*=/.test(html), "index.html must not use inline styles");
assert(
  !/<script(?![^>]*\ssrc=)/.test(html),
  "index.html must not contain inline scripts",
);
const css = read("style.css");
assert(
  css.includes("prefers-reduced-motion"),
  "CSS must honour reduced motion",
);
assert(
  css.includes("prefers-color-scheme: dark"),
  "CSS must support dark mode",
);
for (const tag of html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? [])
  assert(
    /rel="[^"]*noopener/.test(tag),
    `target=_blank without noopener: ${tag}`,
  );
assert(
  !/target="_blank"(?![^`]*noopener)/.test(read("app.js")),
  "app.js target=_blank needs noopener",
);
assert(!fs.existsSync(path.join(site, ".env")));

/* ---- A blocked or throwing localStorage must not stop the app ---- */
{
  const blocked = vm.createContext({
    localStorage: {
      getItem() {
        throw new Error("blocked");
      },
      setItem() {
        throw new Error("blocked");
      },
    },
    window: { addEventListener() {} },
    document: { dispatchEvent() {} },
    CustomEvent: class {},
  });
  blocked.window.localStorage = blocked.localStorage;
  vm.runInContext(
    ["lessons", "scenarios", "exams"]
      .map(
        (name) =>
          `var ${name} = ${JSON.stringify(vm.runInContext(name, context))};`,
      )
      .join(String.fromCharCode(10)) +
      read("util.js") +
      read("store.js"),
    blocked,
  );
  assert.equal(vm.runInContext("state.done.length", blocked), 0);
  assert.equal(vm.runInContext("save()", blocked), false);
}

/* ---- Storage validation: hostile saved data and imports must be neutralised ---- */
const storage = new Map();
const sandbox = {
  localStorage: {
    getItem: (k) => storage.get(k) ?? null,
    setItem: (k, v) => storage.set(k, String(v)),
  },
  window: { addEventListener() {} },
  document: { dispatchEvent() {} },
  CustomEvent: class {},
};
sandbox.window.localStorage = sandbox.localStorage;
const store = vm.createContext(sandbox);
vm.runInContext(
  ["lessons", "scenarios", "exams"]
    .map(
      (name) =>
        `var ${name} = ${JSON.stringify(vm.runInContext(name, context))};`,
    )
    .join("\n") +
    read("util.js") +
    read("store.js"),
  store,
);
const clean = (value) => JSON.parse(JSON.stringify(value));
const hostile = clean(
  vm.runInContext(
    `sanitizeState({
      done: ["0-0", "0-0", "nope", 7, "<img src=x onerror=alert(1)>"],
      notes: { "0-0": "ok", "__proto__": "x", "sim-01": "ok", "evil": "x", "0-1": 5, capstone: "a".repeat(200000) },
      checks: { "0-0": [0, 0, 99, -1, "1", 1.5], bogus: [0] },
      quizzes: { "0-0": 1, "0-1": 99, bogus: 0 },
      skills: [0, 2, 3, 1.2, "1"],
      pace: "999",
      lastLesson: "missing",
    })`,
    store,
  ),
);
assert.deepEqual(hostile.done, ["0-0"]);
assert.deepEqual(Object.keys(hostile.notes).sort(), [
  "0-0",
  "capstone",
  "sim-01",
]);
assert.equal(hostile.notes.capstone.length, 100000);
assert.deepEqual(hostile.checks, { "0-0": [0] });
assert.deepEqual(hostile.quizzes, { "0-0": 1 });
assert.deepEqual(hostile.skills, [0, 2]);
assert.equal(hostile.pace, "12");
assert.equal(hostile.lastLesson, null);
assert.equal(
  clean(vm.runInContext("sanitizeState(null).done", store)).length,
  0,
);
assert.throws(
  () => vm.runInContext('parseImport("{not json")', store),
  /valid JSON/,
);
assert.throws(
  () => vm.runInContext('parseImport("{\\"academy\\":\\"other\\"}")', store),
  /not a VA Academy/,
);
const newFields = clean(
  vm.runInContext(
    `sanitizeState({
      portfolio: ["0-0", "0-0", "bogus", 4],
      exams: {
        "trial-orders": { scores: [2, 1, 9, "x", 0, 2], date: "2026-10-15" },
        "trial-executive": { scores: "nope" },
        bogus: { scores: [1] },
      },
      activity: ["2026-10-15", "2026-10-15", "not-a-date", "2026-10-14", 5],
    })`,
    store,
  ),
);
assert.deepEqual(newFields.portfolio, ["0-0"]);
assert.deepEqual(Object.keys(newFields.exams), ["trial-orders"]);
assert.deepEqual(newFields.exams["trial-orders"].scores, [2, 1, null, null, 0]);
assert.equal(newFields.exams["trial-orders"].date, "2026-10-15");
assert.deepEqual(newFields.activity, ["2026-10-14", "2026-10-15"]);
assert.equal(
  vm.runInContext(
    'currentStreak(["2026-10-13", "2026-10-14", "2026-10-15"], new Date(2026, 9, 15))',
    store,
  ),
  3,
);
assert.equal(
  vm.runInContext(
    'currentStreak(["2026-10-10"], new Date(2026, 9, 15))',
    store,
  ),
  0,
);
const reviewState = clean(
  vm.runInContext(
    `sanitizeState({
      reviews: {
        "0-0": { box: 3, due: "2026-10-20" },
        "0-1": { box: 9, due: "2026-10-20" },
        "0-2": { box: 2, due: "tomorrow" },
        bogus: { box: 1, due: "2026-10-20" },
      },
    }).reviews`,
    store,
  ),
);
assert.deepEqual(reviewState, { "0-0": { box: 3, due: "2026-10-20" } });
assert.equal(vm.runInContext('addDays("2026-10-31", 2)', store), "2026-11-02");
assert.equal(vm.runInContext('addDays("2026-12-31", 1)', store), "2027-01-01");
for (const exam of vm.runInContext("exams", context)) {
  assert(
    exam.criteria.length && exam.tasks.length && exam.key,
    `Incomplete exam ${exam.id}`,
  );
  assert(
    exam.criteria.some((c) => c[2]),
    `Exam ${exam.id} needs a critical criterion`,
  );
}
const roundTrip = clean(
  vm.runInContext(
    'replaceState({done:["0-0"],pace:"24"}); parseImport(JSON.stringify(exportPayload()))',
    store,
  ),
);
assert.deepEqual(roundTrip.done, ["0-0"]);
assert.equal(roundTrip.pace, "24");

console.log(
  "Passed: 132 lessons, scripts, CSP (no unsafe-inline), storage validation and import, reduced-motion and dark-mode CSS, and secret patterns.",
);
