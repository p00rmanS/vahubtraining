const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const root = path.join(__dirname, "..");
const site = path.join(root, "site");
const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(
  (match) => match[1],
);
const context = vm.createContext({});
for (const filename of scripts) {
  const source = fs.readFileSync(path.join(site, filename), "utf8");
  new vm.Script(source, { filename });
  assert(
    !/\b(?:eval|Function)\s*\(/.test(source),
    `Dynamic code execution in ${filename}`,
  );
  assert(
    !/(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|-----BEGIN [\w ]*PRIVATE KEY-----|sk-proj-[A-Za-z0-9_-]{20,})/.test(
      source,
    ),
    `Credential pattern in ${filename}`,
  );
  if (filename.startsWith("course") || filename === "mentoring.js")
    vm.runInContext(source, context);
}
const records = vm.runInContext("lessons", context);
assert.equal(records.length, 57);
assert.equal(new Set(records.map((record) => record.id)).size, records.length);
for (const record of records) {
  assert(
    record.teach && record.taglish && record.proTips.length === 2,
    `Missing content: ${record.id}`,
  );
  assert(
    record.options[record.answer] && record.ready.length && record.steps.length,
    `Invalid lesson: ${record.id}`,
  );
}
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const asset = match[1];
  if (!/^(?:https?:|data:)/.test(asset))
    assert(fs.existsSync(path.join(site, asset)), `Missing asset: ${asset}`);
}
assert(
  html.includes("Content-Security-Policy") &&
    html.includes("connect-src 'none'"),
);
assert(
  fs
    .readFileSync(path.join(site, "app.js"), "utf8")
    .includes("Normalize persisted data"),
);
assert(!fs.existsSync(path.join(site, ".env")));
assert(!fs.existsSync(path.join(site, ".openai")));
console.log(
  "Passed: 57 lessons, bilingual content, syntax, assets, CSP, storage validation, and common secret patterns.",
);
