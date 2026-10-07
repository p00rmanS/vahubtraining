const app = document.querySelector("#app");
let state = {
  done: [],
  notes: {},
  checks: {},
  quizzes: {},
  skills: [],
  pace: "12",
};
try {
  const saved = JSON.parse(localStorage.getItem("va-academy-v1"));
  if (saved && typeof saved === "object") {
    state = { ...state, ...saved };
    for (const k of ["done", "skills"])
      if (!Array.isArray(state[k])) state[k] = [];
    for (const k of ["notes", "checks", "quizzes"])
      if (!state[k] || typeof state[k] !== "object" || Array.isArray(state[k]))
        state[k] = {};
  }
} catch {}
// Normalize persisted data before displaying it; storage is untrusted.
const knownIds = new Set(lessons.map((lesson) => lesson.id));
state.done = [...new Set(state.done.filter((id) => knownIds.has(id)))];
state.skills = [
  ...new Set(
    state.skills.filter(
      (value) => Number.isInteger(value) && value >= 0 && value < 3,
    ),
  ),
];
state.notes = Object.fromEntries(
  Object.entries(state.notes)
    .filter(
      ([key, value]) =>
        (knownIds.has(key) || /^sim-[\w-]+$/.test(key) || key === "capstone") &&
        typeof value === "string",
    )
    .map(([key, value]) => [key, value.slice(0, 100000)]),
);
state.checks = Object.fromEntries(
  Object.entries(state.checks)
    .filter(([key, value]) => knownIds.has(key) && Array.isArray(value))
    .map(([key, values]) => [
      key,
      [
        ...new Set(
          values.filter(
            (value) =>
              Number.isInteger(value) &&
              value >= 0 &&
              value < lessons.find((lesson) => lesson.id === key).ready.length,
          ),
        ),
      ],
    ]),
);
state.quizzes = Object.fromEntries(
  Object.entries(state.quizzes).filter(
    ([key, value]) =>
      knownIds.has(key) &&
      Number.isInteger(value) &&
      value >= 0 &&
      value < lessons.find((lesson) => lesson.id === key).options.length,
  ),
);
state.lastLesson = knownIds.has(state.lastLesson) ? state.lastLesson : null;
state.pace = state.pace === "24" ? "24" : "12";
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const toast = (t) => {
  const e = document.querySelector("#toast");
  e.textContent = t;
  e.style.display = "block";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => (e.style.display = "none"), 2800);
};
function save() {
  try {
    localStorage.setItem("va-academy-v1", JSON.stringify(state));
    return true;
  } catch {
    toast("Browser storage unavailable. Export your progress to keep a copy.");
    return false;
  }
}
const completed = () => lessons.filter((l) => state.done.includes(l.id)).length;
function home() {
  const next =
    lessons.find(
      (l) => l.id === state.lastLesson && !state.done.includes(l.id),
    ) ||
    lessons.find((l) => !state.done.includes(l.id)) ||
    lessons[0];
  const count = completed();
  app.innerHTML = `<div class="intro"><p class="eyebrow" style="margin:0 0 12px;color:#147d63">ZERO EXPERIENCE TO ADVANCED</p><h1>Your VA journey starts here.</h1><p class="muted">Learn a skill. Practice it. Build something you can show a client. Follow the path at your own pace, starting with the essentials. Every lesson includes a Taglish explanation and practical pro tips.</p></div><div class="welcome"><section class="continue"><p class="eyebrow">${state.lastLesson || count ? "CONTINUE YOUR JOURNEY" : "YOUR FIRST LESSON"}</p><h2>${esc(next.title)}</h2><p>${esc(next.goal)}</p><button data-lesson="${next.id}">${state.lastLesson || count ? "Continue learning" : "Start lesson 1"}</button></section><section class="progress-card"><h3>Your learning progress</h3><div class="progress-number">${count}<span class="muted" style="font-size:18px;font-weight:400"> / ${lessons.length} lessons</span></div><progress value="${count}" max="${lessons.length}" aria-label="Completed lessons"></progress><p class="muted" style="font-size:14px;margin-top:12px">Completion is self-assessed. Practice and check your work before marking a lesson complete.</p><button data-action="export">Export progress & notes</button></section></div><div class="section-head"><h2>The learning path</h2><div><p class="muted">${modules.length} modules · ${lessons.length} lessons</p><button data-section="lesson-directory">Find a lesson</button></div></div><div class="grid">${modules.map((m, i) => `<button class="module" data-lesson="${(lessons.find((l) => l.mi === i && !state.done.includes(l.id)) || lessons.find((l) => l.mi === i)).id}"><span class="module-number">${String(i + 1).padStart(2, "0")}</span><span><h3>${esc(m[0])}</h3><p>${esc(m[1])}</p><span class="pill">${esc(m[2])}</span><span class="meta">${m[3].length} lessons · ${lessons.filter((l) => l.mi === i && state.done.includes(l.id)).length} complete</span></span></button>`).join("")}</div><section class="card directory" id="lesson-directory" style="margin-top:25px"><h2>Find a lesson</h2><p class="muted">Search by topic or choose a module. Open any lesson directly.</p><div class="directory-controls"><div><label for="lesson-search">Search lessons</label><input id="lesson-search" type="search" placeholder="Try spreadsheets, email, or AI" autocomplete="off"></div><div><label for="module-filter">Module</label><select id="module-filter"><option value="all">All modules</option>${modules.map((m, i) => `<option value="${i}">${i + 1}. ${esc(m[0])}</option>`).join("")}</select></div></div><p id="lesson-count" class="meta" role="status"></p><div id="lesson-results"></div></section><section class="card skills" style="margin-top:25px"><h2>Skills milestones</h2><p class="muted">Check a milestone when you can demonstrate it without step-by-step help.</p>${["Beginner: organize files, write clear emails, schedule meetings, and check a tracker.", "Intermediate: deliver a chosen service, verify AI output, and explain three portfolio samples.", "Advanced: manage scope and capacity, write an SOP, and test an automation safely."].map((s, i) => `<label><input type="checkbox" data-skill="${i}" ${state.skills.includes(i) ? "checked" : ""}>${esc(s)}</label>`).join("")}</section>`;
}
function lesson(id) {
  const l = lessons.find((x) => x.id === id);
  if (!l) {
    location.hash = "#learn";
    return;
  }
  const mi = l.mi;
  state.lastLesson = id;
  save();
  app.innerHTML = `<button class="back" data-nav="learn">Back to learning path</button><div class="intro" style="padding-top:5px"><p class="eyebrow" style="margin:0 0 10px;color:#147d63">MODULE ${mi + 1} · ${esc(modules[mi][0])}</p><h1>${esc(l.title)}</h1><p class="muted">${esc(l.goal)}</p></div><div class="lesson-quickbar"><span>Lesson ${lessons.indexOf(l) + 1} of ${lessons.length}${state.done.includes(id) ? " · Completed" : ""}</span><label for="lesson-picker" class="sr-only">Jump to a lesson</label><select id="lesson-picker">${lessons.map((x) => `<option value="${x.id}" ${x.id === id ? "selected" : ""}>${x.mi + 1}.${x.li + 1} · ${esc(x.title)}</option>`).join("")}</select></div><div class="lesson-layout"><div class="lesson-nav">${lessons
    .filter((x) => x.mi === mi)
    .map(
      (x) =>
        `<button data-lesson="${x.id}" class="${x.id === id ? "selected" : ""}">${state.done.includes(x.id) ? "✓ " : ""}${x.li + 1}. ${esc(x.title)}</button>`,
    )
    .join(
      "",
    )}<p class="meta">Prerequisite: ${esc(l.prereq)}</p><p class="meta">Practice tools: ${esc(l.tools)}</p></div><article class="lesson-body"><nav class="lesson-sections" aria-label="Lesson sections"><button data-section="lesson-reading">Read</button><button data-section="lesson-practice">Practice</button><button data-section="lesson-quiz">Quiz</button><button data-section="lesson-readiness">Finish</button></nav><h2 id="lesson-reading">The lesson</h2><p>${esc(l.teach)}</p><section class="taglish-explanation" aria-labelledby="taglish-title"><h2 id="taglish-title">Taglish explanation</h2><p lang="fil">${esc(l.taglish)}</p></section><section class="pro-tips" aria-labelledby="tips-title"><h2 id="tips-title">Pro tips from your mentor</h2><ul>${l.proTips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></section>${l.mi === 14 ? `<details class="client-expectations"><summary>What clients currently expect · sources</summary><p>Reviewed October 5, 2026. These examples emphasize accuracy, clear communication, follow-through, independent work, and useful AI skills. Specific requirements vary by role; this is a small hiring snapshot, not a survey of every client.</p><ul>${clientSources.map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`).join("")}</ul></details>` : ""}<div class="callout"><h3>Worked example</h3><p>${esc(l.example)}</p></div>${l.deepDive ? `<section class="deep-dive"><h2>Detailed walkthrough</h2>${l.deepDive.map(([heading, text]) => `<h3>${esc(heading)}</h3><p>${esc(text)}</p>`).join("")}</section>` : ""}<h2>Try it step by step</h2><ol>${l.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol><div class="exercise" id="lesson-practice"><h3>Your practice task</h3><p>${esc(l.exercise)}</p>${l.practiceData ? `<h3>Practice source data</h3><pre>${esc(l.practiceData)}</pre>` : ""}<label for="notes"><strong>Your answer or practice notes</strong></label><p class="meta">Use fictional information. To receive personal feedback, copy your work into this chat.</p><textarea id="notes" placeholder="Write your answer, paste your draft, or record where you saved your practice work...">${esc(state.notes[id] || "")}</textarea><div class="toolbar"><button data-save="${id}">Save notes</button><span id="save-status" class="meta" role="status">${state.notes[id] ? "Saved on this browser" : "Notes save as you type"}</span></div>${l.modelAnswer ? `<details><summary>Review key · open after practicing</summary><p>${esc(l.modelAnswer)}</p><p class="meta">Compare your reasoning and checks, not only the wording. Multiple valid answers may fit the brief.</p></details>` : ""}<h3>Add to your portfolio</h3><p>${esc(l.portfolio)}</p></div><h2>Common mistake</h2><p>${esc(l.mistake)}</p><section class="quiz" id="lesson-quiz"><h2>Quick knowledge check</h2><p>${esc(l.question)}</p><fieldset style="border:0;padding:0;margin:0"><legend class="meta">Choose one answer</legend>${l.options.map((o, i) => `<label><input type="radio" name="quiz" value="${i}" ${state.quizzes[id] === i ? "checked" : ""}>${esc(o)}</label>`).join("")}</fieldset><button data-quiz="${id}">Check answer</button><div id="quiz-result" role="status">${state.quizzes[id] !== undefined ? `<div class="result"><strong>${state.quizzes[id] === l.answer ? "Correct." : "Try again."}</strong> ${esc(l.explanation)}</div>` : ""}</div></section><section class="skills" id="lesson-readiness"><h2>Ready to move on?</h2>${l.ready.map((s, i) => `<label><input type="checkbox" data-check="${id}:${i}" ${(state.checks[id] || []).includes(i) ? "checked" : ""}>${esc(s)}</label>`).join("")}<p class="meta">Complete your practice task and check these skills before marking the lesson complete.</p><div class="toolbar">${lessons[lessons.indexOf(l) - 1] ? `<button data-lesson="${lessons[lessons.indexOf(l) - 1].id}">Previous lesson</button>` : ""}<button class="primary" data-complete="${id}">${state.done.includes(id) ? "Mark as still practicing" : "Mark lesson complete"}</button>${lessons[lessons.indexOf(l) + 1] ? `<button data-lesson="${lessons[lessons.indexOf(l) + 1].id}">Next lesson</button>` : ""}</div><p class="meta">Completion is a personal learning record, not a professional certification.</p></section></article></div>`;
}
function roadmap() {
  app.innerHTML = `<div class="intro"><h1>A plan you can follow.</h1><p class="muted">Use 12 weeks as a flexible guide. Move forward when your practice meets the checks, rather than when a date passes.</p><div class="toolbar"><label for="pace">Study pace</label><select id="pace"><option value="12" ${state.pace === "12" ? "selected" : ""}>12 weeks · about 5–7 hours a week</option><option value="24" ${state.pace === "24" ? "selected" : ""}>24 weeks · one hour, three days a week</option></select></div><p class="meta">At one hour a day, you can use the 12-week plan, taking extra time when needed. The slower plan splits each stage over two weeks. These are study estimates. Modules 9–18 add deeper practice: allow one or more extra weeks per module and repeat difficult tasks until the checks pass.</p></div><div class="card" style="padding:0">${weeks.map((w, i) => `<div class="roadmap-row"><strong>${state.pace === "24" ? `Weeks ${i * 2 + 1}–${i * 2 + 2}` : `Week ${i + 1}`}</strong><div><h3>${esc(w[0])}</h3><p class="meta">${esc(w[1])}</p><p>${esc(w[2])}</p></div></div>`).join("")}</div><div class="callout"><h3>Your one-hour study session</h3><p>15 minutes: read one lesson. 30 minutes: practice the task. 10 minutes: check your work. 5 minutes: save notes and choose the next action.</p></div>`;
}
function library() {
  app.innerHTML = `<div class="intro"><h1>Your working toolkit.</h1><p class="muted">Adapt these templates to the client and the agreed policy. Replace every bracketed placeholder and check the facts before use.</p></div>${templates.map((t, i) => `<details><summary>${esc(t[0])}</summary><pre>${esc(t[1])}</pre><button data-copy="${i}">Copy template</button><span class="meta" id="copy-${i}" role="status"></span></details>`).join("")}`;
}
function practice() {
  app.innerHTML = `<div class="intro"><h1>Practice before the real thing.</h1><p class="muted">Eight fictional client simulations build toward a complete portfolio project and advanced client practice. Complete the task first, then open the review criteria.</p></div>${scenarios.map((s) => `<section class="card" style="margin-bottom:20px"><span class="pill">${esc(s[2])}</span><h2>${s[0]}. ${esc(s[1])}</h2><p>${esc(s[3])}</p><h3>Your deliverable</h3><p>${esc(s[4])}</p><details><summary>Review criteria</summary><p>${esc(s[5])}</p></details><label for="sim-${s[0]}">Your simulation notes</label><textarea id="sim-${s[0]}">${esc(state.notes["sim-" + s[0]] || "")}</textarea><button data-save="sim-${s[0]}" style="margin-top:10px">Save notes</button></section>`).join("")}<section class="continue"><p class="eyebrow">FINAL CAPSTONE</p><h2>Run a week of support for the fictional bakery.</h2><p>The bakery receives 20 orders and 10 support messages. Five orders need clarification, two messages request refunds, and a weekend menu needs owner approval. Invent the source data and clearly label it fictional.</p><ol><li>Write a service scope, onboarding questions, and access plan.</li><li>Create a 20-order tracker with verified totals and exceptions.</li><li>Triage 10 messages and draft three replies for review.</li><li>Prepare an agenda, minutes, and action tracker.</li><li>Create a three-post content plan with an approval step.</li><li>Use AI for one draft, then document your fact checks and edits.</li><li>Write an SOP and a safe automation test plan.</li><li>Deliver a weekly report, sample invoice, and handoff checklist.</li></ol><h3>Assessment rubric</h3><p>Score each area 0–2: accuracy, organization, communication, privacy and approval, completeness. 0 = missing or unsafe; 1 = usable with corrections; 2 = complete and verified. Aim for 8/10 or more, with no zero in accuracy or privacy. Revise weak areas before adding samples to your portfolio.</p><p>Next step: bring your deliverables and rubric score to this chat for coaching. Choose one service to keep practicing and tailor your first proposal to a verified opportunity.</p><label for="capstone">Your capstone notes and scores</label><textarea id="capstone">${esc(state.notes.capstone || "")}</textarea><button data-save="capstone" style="margin-top:12px">Save capstone notes</button></section>`;
}
function render() {
  const route = location.hash.slice(1) || "learn";
  document
    .querySelectorAll("nav a")
    .forEach((a) =>
      a.classList.toggle(
        "active",
        a.hash === "#" + (route.startsWith("lesson/") ? "learn" : route),
      ),
    );
  if (route.startsWith("lesson/")) lesson(route.slice(7));
  else if (route === "roadmap") roadmap();
  else if (route === "library") library();
  else if (route === "practice") practice();
  else if (route === "glossary")
    app.innerHTML = `<div class="intro"><h1>The language of VA work.</h1><p class="muted">Plain-English definitions to keep nearby as you learn.</p></div><section class="card"><dl>${Object.entries(
      glossary,
    )
      .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`)
      .join("")}</dl></section>`;
  else {
    home();
    filterLessons();
  }
}
document.addEventListener("click", async (e) => {
  if (e.target.closest("a.skip-link")) {
    e.preventDefault();
    const main = document.getElementById("main");
    main.focus();
    main.scrollIntoView();
    return;
  }
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.section) {
    document
      .getElementById(b.dataset.section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (b.dataset.lesson) location.hash = "lesson/" + b.dataset.lesson;
  if (b.dataset.nav) location.hash = b.dataset.nav;
  if (b.dataset.save) {
    const id = b.dataset.save;
    const el = document.getElementById(
      id.startsWith("sim-") || id === "capstone" ? id : "notes",
    );
    state.notes[id] = el.value;
    if (save()) {
      toast("Notes saved on this browser");
      const status = document.querySelector("#save-status");
      if (status) status.textContent = "Saved";
    }
  }
  if (b.dataset.quiz) {
    const l = lessons.find((x) => x.id === b.dataset.quiz),
      checked = document.querySelector('input[name="quiz"]:checked');
    if (!checked) {
      toast("Choose an answer first");
      return;
    }
    const v = Number(checked.value);
    state.quizzes[l.id] = v;
    save();
    document.querySelector("#quiz-result").innerHTML =
      `<div class="result"><strong>${v === l.answer ? "Correct." : "Try again."}</strong> ${esc(l.explanation)}</div>`;
  }
  if (b.dataset.complete) {
    const id = b.dataset.complete;
    if (state.done.includes(id))
      state.done = state.done.filter((x) => x !== id);
    else {
      const l = lessons.find((x) => x.id === id);
      if ((state.checks[id] || []).length !== l.ready.length) {
        toast("Check each readiness skill before completing");
        return;
      }
      state.done.push(id);
    }
    save();
    render();
    toast(
      state.done.includes(id)
        ? "Lesson marked complete"
        : "Lesson returned to practice",
    );
  }
  if (b.dataset.copy !== undefined) {
    const i = Number(b.dataset.copy);
    try {
      await navigator.clipboard.writeText(templates[i][1]);
      toast("Template copied");
    } catch {
      document.querySelector("#copy-" + i).textContent =
        " Select the template text above and copy it manually.";
    }
  }
  if (b.dataset.action === "export") {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            academy: "VA Academy",
            exportedAt: new Date().toISOString(),
            ...state,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "va-academy-progress.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.dataset.check) {
    const [id, raw] = t.dataset.check.split(":");
    const i = Number(raw);
    const vals = state.checks[id] || [];
    state.checks[id] = t.checked
      ? [...new Set([...vals, i])]
      : vals.filter((x) => x !== i);
    save();
  }
  if (t.dataset.skill !== undefined) {
    const i = Number(t.dataset.skill);
    state.skills = t.checked
      ? [...new Set([...state.skills, i])]
      : state.skills.filter((x) => x !== i);
    save();
  }
  if (t.id === "lesson-picker") {
    location.hash = "lesson/" + t.value;
  }
  if (t.id === "module-filter") filterLessons();
  if (t.id === "pace") {
    state.pace = t.value;
    save();
    roadmap();
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "lesson-search") filterLessons();
  if (e.target.tagName === "TEXTAREA") {
    const id = location.hash.startsWith("#lesson/")
      ? location.hash.slice(8)
      : e.target.id;
    state.notes[id] = e.target.value;
    const ok = save();
    const status = document.querySelector("#save-status");
    if (status)
      status.textContent = ok
        ? "Saved on this browser"
        : "Not saved — export a copy";
  }
});
function filterLessons() {
  const search = document.getElementById("lesson-search");
  const filter = document.getElementById("module-filter");
  if (!search || !filter) return;
  const q = search.value.trim().toLowerCase();
  const found = lessons.filter(
    (l) =>
      (filter.value === "all" || String(l.mi) === filter.value) &&
      [l.title, l.goal, modules[l.mi][0]].join(" ").toLowerCase().includes(q),
  );
  document.getElementById("lesson-count").textContent =
    found.length + " lessons found";
  document.getElementById("lesson-results").innerHTML = found.length
    ? found
        .map(
          (l) =>
            `<button class="lesson-result" data-lesson="${l.id}"><span><span class="meta">Module ${l.mi + 1} · Lesson ${l.li + 1}</span><strong>${esc(l.title)}</strong></span><span class="lesson-state">${state.done.includes(l.id) ? "✓ Complete" : "Open lesson"}</span></button>`,
        )
        .join("")
    : '<p class="empty-result">No lessons match. Try a broader word or choose All modules.</p>';
}
window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});
render();
if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(
      document.modelContext.registerTool({
        name: "get_learning_progress",
        description:
          "Read completed lesson IDs and the next recommended lesson.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        annotations: { readOnlyHint: true },
        execute: () => ({
          completed: state.done.filter((id) =>
            lessons.some((l) => l.id === id),
          ),
          total: lessons.length,
          next: lessons.find((l) => !state.done.includes(l.id))?.id ?? null,
        }),
      }),
    ).catch(() => {});
    Promise.resolve(
      document.modelContext.registerTool({
        name: "open_training_lesson",
        description:
          "Navigate to a lesson without completing it or changing notes.",
        inputSchema: {
          type: "object",
          properties: { lessonId: { type: "string" } },
          required: ["lessonId"],
          additionalProperties: false,
        },
        execute: (input) => {
          if (
            !input ||
            typeof input.lessonId !== "string" ||
            !lessons.some((l) => l.id === input.lessonId)
          )
            throw new Error("Unknown lesson ID");
          location.hash = "lesson/" + input.lessonId;
          render();
          return { lessonId: input.lessonId, opened: true };
        },
      }),
    ).catch(() => {});
  } catch {}
}
