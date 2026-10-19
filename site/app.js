"use strict";
// VA Academy views and events. Data comes from course*.js, persistence from
// store.js. All dynamic text goes through esc() before it reaches innerHTML.

const app = document.querySelector("#app");
const APP_NAME = "VA Academy";
const $ = (selector, root = document) => root.querySelector(selector);

/* ---------- Small helpers ---------- */

const ICONS = {
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

const lessonIndex = (id) => lessons.findIndex((l) => l.id === id);
const isDone = (id) => state.done.includes(id);
const completedCount = () => state.done.length;
const ratio = (part, whole) => (whole ? part / whole : 0);

function nextLesson() {
  return (
    lessons.find((l) => l.id === state.lastLesson && !isDone(l.id)) ||
    lessons.find((l) => !isDone(l.id)) ||
    lessons[0]
  );
}

let toastTimer = 0;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

function markActive() {
  const today = dayKey();
  if (!state.activity.includes(today))
    state.activity = [...state.activity, today].slice(-MAX_ACTIVITY_DAYS);
}

function persist() {
  markActive();
  if (!save())
    toast("Browser storage unavailable. Export your progress to keep a copy.");
}

const scrollBehavior = () => (prefersReducedMotion() ? "auto" : "smooth");

/* ---------- Reusable components ---------- */

/** Taglish companion note shown beside an English section. */
const tl = (text) =>
  text
    ? `<p class="tl" lang="fil"><span class="tl-tag">Taglish</span>${esc(text)}</p>`
    : "";

function bar(value) {
  return `<span class="meter" aria-hidden="true"><span class="meter-fill animate-in" data-vars="p:${value.toFixed(4)}"></span></span>`;
}

const PAGE_TAGLISH = {
  "A plan you can follow.":
    "Gamitin ang 12 linggo bilang gabay, hindi bilang pamatay na deadline. Lumipat sa susunod kapag pasado na ang practice mo sa checks, hindi lang dahil lumipas ang petsa.",
  "Your working toolkit.":
    "Ito ang mga template na puwede mong i-adapt. Palitan ang lahat ng nasa bracket at i-check ang facts bago gamitin sa totoong client.",
  "Practice before the real thing.":
    "Mag-practice muna sa gawa-gawang client bago sa totoo. Gawin muna ang task bago buksan ang review criteria.",
  "The language of VA work.":
    "Simpleng paliwanag ng mga salitang madalas mong maririnig sa VA work. Balikan ito kapag may hindi ka maintindihan.",
  "Your portfolio tracker.":
    "Bawat lesson ay may gawang puwedeng ipakita sa client. I-tick kapag tapos, na-check, at walang private na impormasyon.",
  "Mock paid trials.":
    "Madalas may maikling bayad na trial ang client. Mag-practice sa loob ng isang oras, isulat ang sagot, at maging tapat sa pag-score. Pasado ang 80% pataas at walang zero sa critical na criteria.",
};

const pageIntro = (title, text, extra = "") =>
  `<header class="page-intro reveal"><h1>${esc(title)}</h1><p class="lede">${esc(text)}</p>${tl(PAGE_TAGLISH[title])}${extra}</header>`;

/* ---------- Home ---------- */

function tocRow(module, index) {
  const inModule = lessons.filter((l) => l.mi === index);
  const done = inModule.filter((l) => isDone(l.id)).length;
  const target = inModule.find((l) => !isDone(l.id)) || inModule[0];
  return `<li><a class="toc-row reveal" href="#lesson/${target.id}" data-vars="i:${index % 6}"><span class="toc-no">${String(index + 1).padStart(2, "0")}</span><span class="toc-title">${esc(module[0])}</span><span class="toc-desc">${esc(module[1])}</span><span class="toc-side"><span class="pill">${esc(module[2])}</span><span class="pips" aria-hidden="true">${inModule.map((l) => `<i class="${isDone(l.id) ? "on" : ""}"></i>`).join("")}</span><span class="meta">${done} / ${inModule.length} done</span></span></a></li>`;
}

function stampCard() {
  return `<aside class="stamp-card reveal" data-vars="i:2" aria-label="Course stamp card">
    <div class="stamp-head"><span>Stamp card</span><strong>${completedCount()} / ${lessons.length}</strong></div>
    <div class="cells" aria-hidden="true">${lessons.map((l, i) => `<a class="cell pop ${isDone(l.id) ? "done" : ""}" href="#lesson/${l.id}" tabindex="-1" title="${esc(l.title)}" data-vars="i:${i}"></a>`).join("")}</div>
    <p class="stamp-foot meta">One square per lesson. Finish a lesson to stamp it.</p>
  </aside>`;
}

const SKILL_TEXT = [
  "Beginner: organize files, write clear emails, schedule meetings, and check a tracker.",
  "Intermediate: deliver a chosen service, verify AI output, and explain three portfolio samples.",
  "Advanced: manage scope and capacity, write an SOP, and test an automation safely.",
];

/* ---------- Daily review session (spaced repetition) ---------- */

const REVIEW_DAYS = [1, 2, 4, 8, 16];
const SESSION_SIZE = 5;
let session = null;

/** Finished lessons whose review is due, never-reviewed ones first, then oldest. */
function dueLessons() {
  const today = dayKey();
  return lessons
    .filter((l) => isDone(l.id) && (state.reviews[l.id]?.due ?? today) <= today)
    .sort((a, b) =>
      (state.reviews[a.id]?.due ?? "").localeCompare(
        state.reviews[b.id]?.due ?? "",
      ),
    );
}

function nextReviewDate() {
  const today = dayKey();
  const upcoming = lessons
    .filter((l) => isDone(l.id) && state.reviews[l.id]?.due > today)
    .map((l) => state.reviews[l.id].due)
    .sort();
  return upcoming[0] ?? null;
}

function recordReview(id, correct) {
  const previous = state.reviews[id]?.box ?? 1;
  const box = correct ? Math.min(previous + 1, 5) : 1;
  state.reviews[id] = {
    box,
    due: addDays(dayKey(), correct ? REVIEW_DAYS[box - 1] : 1),
  };
}

function startSession() {
  session = {
    ids: dueLessons()
      .slice(0, SESSION_SIZE)
      .map((l) => l.id),
    index: 0,
    correct: 0,
    answered: false,
    choice: null,
    finished: false,
  };
  if (!session.ids.length) session.finished = true;
}

function emptySessionCard() {
  return `<section class="session-card reveal">
      <p class="kicker">Daily session</p>
      <h2>Your daily session is waiting</h2>
      <p>Finish your first lesson and your sessions will appear here.</p>
      ${tl("Tapusin ang una mong lesson at lalabas dito ang mga daily session mo.")}
      <div class="toolbar"><button class="cta" data-action="browse">Browse courses${ICONS.arrow}</button></div>
    </section>`;
}

function sessionCard() {
  if (!completedCount()) return emptySessionCard();
  const due = dueLessons().length;
  const next = nextReviewDate();
  const ready = Math.min(due, SESSION_SIZE);
  return `<section class="session-card reveal">
      <p class="kicker">Daily session</p>
      <h2>${due ? `${ready} review question${ready === 1 ? "" : "s"} ready` : "You are all caught up"}</h2>
      <p>${due ? "A few minutes of review now keeps what you learned from fading." : next ? `Your next review is ready on ${esc(next)}.` : "Finish more lessons to add review questions."}</p>
      ${tl(due ? "Ilang minutong review ngayon para hindi mawala ang natutunan mo." : "Tapos na ang review mo ngayon. Bumalik bukas o tapusin ang susunod na lesson.")}
      <div class="toolbar">${due ? `<button class="cta" data-action="start-session">Start today's session${ICONS.arrow}</button>` : `<button data-action="browse">Browse courses</button>`}</div>
    </section>`;
}

function sessionPage() {
  if (!session) startSession();
  if (!completedCount()) {
    app.innerHTML = `${pageIntro("Daily review.", "A short session of questions from lessons you have finished.")}${emptySessionCard()}`;
    return;
  }
  if (session.finished && !session.ids.length) {
    app.innerHTML = `${pageIntro("Daily review.", "A short session of questions from lessons you have finished.")}${sessionCard()}`;
    return;
  }
  const total = session.ids.length;
  if (session.finished) {
    app.innerHTML = `${pageIntro("Session complete.", `You answered ${session.correct} of ${total} correctly.`)}
      <section class="session-card reveal">
        <p class="kicker">Result</p>
        <h2>${session.correct === total ? "Perfect session." : "Nice work. Keep going."}</h2>
        <p>Questions you missed come back tomorrow. Ones you got right come back later, after a longer gap.</p>
        ${tl("Babalik bukas ang mga namali mo. Ang mga tama ay babalik nang mas matagal, para tumagal sa isip mo.")}
        <div class="toolbar"><button class="cta" data-action="browse">Back to courses${ICONS.arrow}</button></div>
      </section>`;
    return;
  }
  const l = lessonById.get(session.ids[session.index]);
  const picked = session.choice;
  app.innerHTML = `${pageIntro("Daily review.", "Answer from memory first, then check. There is no penalty for a wrong answer.")}
    <section class="card session-q reveal">
      <p class="kicker">Question ${session.index + 1} of ${total} · from "${esc(l.title)}"</p>
      ${bar(session.index / total)}
      <h2>${esc(l.question)}</h2>
      <fieldset>${l.options
        .map(
          (_, i) =>
            `<label class="option ${session.answered && picked === i ? (i === l.answer ? "is-correct" : "is-wrong") : ""}"><input type="radio" name="session-answer" value="${i}" ${picked === i ? "checked" : ""} ${session.answered ? "disabled" : ""}><span>${esc(l.options[i])}</span></label>`,
        )
        .join("")}</fieldset>
      <div id="session-result" role="status">${session.answered ? quizVerdict(l, picked) : ""}</div>
      <div class="toolbar">${session.answered ? `<button class="primary" data-action="session-next">${session.index + 1 === total ? "See result" : "Next question"}${ICONS.arrow}</button>` : `<button data-action="session-check">Check answer</button>`}<a href="#lesson/${l.id}">Open the lesson</a></div>
    </section>`;
}

function sessionCheck() {
  const picked = $('input[name="session-answer"]:checked');
  if (!session || session.answered || !picked) {
    toast("Choose an answer first");
    return;
  }
  const l = lessonById.get(session.ids[session.index]);
  const choice = Number(picked.value);
  const correct = choice === l.answer;
  session.choice = choice;
  session.answered = true;
  if (correct) session.correct++;
  recordReview(l.id, correct);
  persist();
  rerender('[data-action="session-next"]');
}

function sessionNext() {
  if (!session?.answered) return;
  session.index++;
  session.answered = false;
  session.choice = null;
  if (session.index >= session.ids.length) session.finished = true;
  rerender("h1");
}

function bestExamPercent() {
  const percents = exams
    .map((exam) => examSummary(exam))
    .filter((summary) => summary.scored === summary.total)
    .map((summary) => summary.percent);
  return percents.length ? Math.max(...percents) : null;
}

function achievements() {
  const count = completedCount();
  const streak = currentStreak(state.activity);
  const finishedModules = modules.filter((_, i) =>
    lessons.filter((l) => l.mi === i).every((l) => isDone(l.id)),
  ).length;
  return [
    ["First lesson", "Complete one lesson", count >= 1],
    ["Ten down", "Complete 10 lessons", count >= 10],
    [
      "Quarter way",
      "Complete a quarter of the course",
      count >= lessons.length / 4,
    ],
    [
      "Module master",
      "Finish every lesson in one module",
      finishedModules >= 1,
    ],
    ["Three-day streak", "Study on 3 days in a row", streak >= 3],
    ["Week streak", "Study on 7 days in a row", streak >= 7],
    [
      "Portfolio builder",
      "Mark 5 portfolio pieces done",
      state.portfolio.length >= 5,
    ],
    [
      "Trial ready",
      "Score 80% or more on a mock trial",
      (bestExamPercent() ?? 0) >= 80,
    ],
    ["Course complete", "Complete every lesson", count === lessons.length],
  ];
}

function statsAndBadges() {
  const streak = currentStreak(state.activity);
  const best = bestExamPercent();
  const badges = achievements();
  const earned = badges.filter((b) => b[2]).length;
  const cell = (value, label, count = true) =>
    `<div><strong ${count ? `data-count="${value}"` : ""}>${value}</strong><span>${esc(label)}</span></div>`;
  return `<section class="ledger reveal" aria-label="Your stats">
      ${cell(streak, "day study streak")}
      ${cell(state.portfolio.length, `of ${lessons.length} portfolio pieces`)}
      ${cell(best === null ? "–" : best + "%", "best mock trial", false)}
      ${cell(earned, `of ${badges.length} stickers earned`)}
    </section>
    <ul class="stickers reveal" aria-label="Achievements">${badges
      .map(
        ([name, how, got]) =>
          `<li class="sticker ${got ? "earned" : ""}" title="${esc(how)}"><i>${got ? ICONS.check : ""}</i>${esc(name)}<span class="sr-only"> — ${esc(how)}${got ? ", earned" : ", not yet earned"}</span></li>`,
      )
      .join("")}</ul>`;
}

function home() {
  const next = nextLesson();
  const count = completedCount();
  const started = Boolean(state.lastLesson || count);
  app.innerHTML = `
    <header class="page-intro hero">
      <div>
        <p class="kicker reveal">Zero experience to advanced</p>
        <h1 class="reveal">Your <span class="hl">VA</span> journey starts here.</h1>
        <p class="lede reveal">Learn a skill. Practice it. Build something you can show a client. Every lesson comes with a Taglish explanation and practical pro tips from a mentor.</p>
        <div class="reveal">${tl("Matuto ng skill, mag-practice, at gumawa ng proof na maipapakita sa client. Bawat lesson ay may Taglish explanation at pro tips mula sa mentor.")}</div>
      </div>
      ${stampCard()}
    </header>
    <section class="next-up reveal">
      <p class="kicker">${started ? "Pick up where you left off" : "Your first lesson"}</p>
      <h2>${esc(next.title)}</h2>
      <p>${esc(next.goal)}</p>
      <div class="toolbar"><button class="cta" data-action="open-lesson" data-id="${next.id}">${started ? "Continue learning" : "Start lesson 1"}${ICONS.arrow}</button></div>
    </section>
    ${sessionCard()}
    ${statsAndBadges()}
    <div class="section-head reveal" id="contents">
      <h2>Contents</h2>
      <div><p class="muted">${modules.length} chapters · ${lessons.length} lessons</p><button data-action="scroll-to" data-id="lesson-directory">Find a lesson</button></div>
    </div>
    <ol class="toc">${modules.map(tocRow).join("")}</ol>
    <section class="card directory reveal" id="lesson-directory">
      <h2>Find a lesson</h2>
      <p class="muted">Search by topic or choose a chapter. Open any lesson directly.</p>
      <div class="directory-controls">
        <div><label for="lesson-search">Search lessons</label><input id="lesson-search" type="search" placeholder="Try spreadsheets, email, or AI" autocomplete="off"></div>
        <div><label for="module-filter">Chapter</label><select id="module-filter"><option value="all">All chapters</option>${modules.map((m, i) => `<option value="${i}">${i + 1}. ${esc(m[0])}</option>`).join("")}</select></div>
      </div>
      <p id="lesson-count" class="meta" role="status"></p>
      <div id="lesson-results"></div>
    </section>
    <section class="card skills reveal">
      <h2>Skills milestones</h2>
      <p class="muted">Check a milestone when you can demonstrate it without step-by-step help.</p>
      ${tl("I-check lang ang milestone kapag kaya mo nang gawin ito nang walang step-by-step na gabay.")}
      ${SKILL_TEXT.map((text, i) => `<label class="check"><input type="checkbox" data-skill="${i}" ${state.skills.includes(i) ? "checked" : ""}><span>${esc(text)}</span></label>`).join("")}
    </section>
    <section class="card reveal" style-free>
      <h2>Your data</h2>
      <p class="muted">Completion is self-assessed. Practice and check your work before marking a lesson complete. Everything stays in this browser, so export a backup now and then.</p>
      ${tl("Ikaw ang nagpapasya kung tapos na ang lesson. Sa browser mo lang naka-save ang lahat, kaya mag-export ng backup paminsan-minsan.")}
      <div class="toolbar">
        <button data-action="export">Export progress</button>
        <button data-action="import">Import</button>
        <button class="quiet" data-action="reset">Reset</button>
      </div>
      <input type="file" id="import-file" accept="application/json,.json" hidden>
    </section>`.replace(" style-free", "");
  filterLessons();
}

function filterLessons() {
  const search = $("#lesson-search");
  const filter = $("#module-filter");
  if (!search || !filter) return;
  const query = search.value.trim().toLowerCase();
  const found = lessons.filter(
    (l) =>
      (filter.value === "all" || String(l.mi) === filter.value) &&
      [l.title, l.goal, modules[l.mi][0]]
        .join(" ")
        .toLowerCase()
        .includes(query),
  );
  $("#lesson-count").textContent =
    found.length === 1 ? "1 lesson found" : `${found.length} lessons found`;
  $("#lesson-results").innerHTML = found.length
    ? found
        .map(
          (l) =>
            `<a class="lesson-result" href="#lesson/${l.id}"><span><span class="meta">Module ${l.mi + 1} · Lesson ${l.li + 1}</span><strong>${esc(l.title)}</strong></span><span class="lesson-state ${isDone(l.id) ? "is-done" : ""}">${isDone(l.id) ? "✓ Complete" : "Open lesson"}</span></a>`,
        )
        .join("")
    : '<p class="empty-result">No lessons match. Try a broader word or choose All modules.</p>';
}

/* ---------- Lesson ---------- */

const quizVerdict = (l, chosen) =>
  chosen === undefined
    ? ""
    : `<div class="result ${chosen === l.answer ? "is-correct" : "is-wrong"}"><strong>${chosen === l.answer ? "Correct." : "Try again."}</strong> ${esc(l.explanation)}${tl(l.tl?.why)}</div>`;

function quizOption(l, i, chosen) {
  const cls = chosen === i ? (i === l.answer ? "is-correct" : "is-wrong") : "";
  return `<label class="option ${cls}"><input type="radio" name="quiz" value="${i}" ${chosen === i ? "checked" : ""}><span>${esc(l.options[i])}</span></label>`;
}

function clientExpectations(l) {
  if (l.mi !== clientMi) return "";
  return `<details class="client-expectations"><summary>What clients currently expect · sources</summary><p>Reviewed October 5, 2026. These examples emphasize accuracy, clear communication, follow-through, independent work, and useful AI skills. Specific requirements vary by role; this is a small hiring snapshot, not a survey of every client.</p><ul>${clientSources.map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`).join("")}</ul></details>`;
}

function lessonPractice(l) {
  const id = l.id;
  return `<div class="exercise" id="lesson-practice">
    <h3>Your practice task</h3><p>${esc(l.exercise)}</p>${tl(l.tl?.exercise)}
    ${l.practiceData ? `<h3>Practice source data</h3><pre>${esc(l.practiceData)}</pre>` : ""}
    <label for="notes"><strong>Your answer or practice notes</strong></label>
    <p class="meta">Use fictional information. To receive personal feedback, copy your work into this chat.</p>
    <textarea id="notes" data-note="${id}" maxlength="${MAX_NOTE_LENGTH}" placeholder="Write your answer, paste your draft, or record where you saved your practice work...">${esc(state.notes[id] || "")}</textarea>
    <div class="toolbar"><button data-action="save-note" data-id="${id}">Save notes</button><span class="meta" data-save-status role="status">${state.notes[id] ? "Saved on this browser" : "Notes save as you type"}</span></div>
    ${l.modelAnswer ? `<details><summary>Review key · open after practicing</summary><p>${esc(l.modelAnswer)}</p><p class="meta">Compare your reasoning and checks, not only the wording. Multiple valid answers may fit the brief.</p></details>` : ""}
    <h3>Add to your portfolio</h3><p>${esc(l.portfolio)}</p>
  </div>`;
}

function lessonReadiness(l, position) {
  const id = l.id;
  const prev = lessons[position - 1];
  const next = lessons[position + 1];
  const checked = state.checks[id] || [];
  return `<section class="skills readiness" id="lesson-readiness"><h2><span class="sec-no">06</span>Ready to move on?</h2>
    ${l.ready.map((s, i) => `<label class="check"><input type="checkbox" data-check="${id}:${i}" ${checked.includes(i) ? "checked" : ""}><span>${esc(s)}</span></label>`).join("")}
    <p class="meta">Complete your practice task and check these skills before marking the lesson complete.</p>
    <div class="toolbar">
      ${prev ? `<button data-action="open-lesson" data-id="${prev.id}">Previous lesson</button>` : ""}
      <button class="primary" data-action="toggle-complete" data-id="${id}">${isDone(id) ? "Mark as still practicing" : "Mark lesson complete"}</button>
      ${next ? `<button data-action="open-lesson" data-id="${next.id}">Next lesson</button>` : ""}
    </div>
    <p class="meta">Completion is a personal learning record, not a professional certification.</p></section>`;
}

function lesson(id) {
  const l = lessonById.get(id);
  if (!l) {
    location.replace("#learn");
    return;
  }
  const position = lessonIndex(id);
  state.lastLesson = id;
  persist();
  const siblings = lessons.filter((x) => x.mi === l.mi);
  const chosen = state.quizzes[id];
  app.innerHTML = `
    <button class="back" data-action="go" data-id="learn">${ICONS.arrow}Back to contents</button>
    <header class="page-intro lesson-intro reveal">
      <p class="kicker">Chapter ${l.mi + 1} · ${esc(modules[l.mi][0])}</p>
      <h1>${esc(l.title)}</h1>
      <p class="lede">${esc(l.goal)}</p>
    </header>
    <div class="lesson-quickbar">
      <span>Lesson ${position + 1} of ${lessons.length}${isDone(id) ? '<span class="done-tag">Completed</span>' : ""}</span>
      <label for="lesson-picker" class="sr-only">Jump to a lesson</label>
      <select id="lesson-picker">${lessons.map((x) => `<option value="${x.id}" ${x.id === id ? "selected" : ""}>${x.mi + 1}.${x.li + 1} · ${esc(x.title)}</option>`).join("")}</select>
    </div>
    <div class="lesson-layout">
      <div class="lesson-nav">
        ${siblings.map((x) => `<button data-action="open-lesson" data-id="${x.id}" class="${x.id === id ? "selected" : ""}" ${x.id === id ? 'aria-current="true"' : ""}>${isDone(x.id) ? '<span class="tick">✓</span>' : ""}${x.li + 1}. ${esc(x.title)}</button>`).join("")}
        <p class="meta">Prerequisite: ${esc(l.prereq)}</p>
        <p class="meta">Practice tools: ${esc(l.tools)}</p>
      </div>
      <article class="lesson-body">
        <nav class="lesson-sections" aria-label="Lesson sections">
          <button data-action="scroll-to" data-id="lesson-reading">Read</button>
          <button data-action="scroll-to" data-id="lesson-practice">Practice</button>
          <button data-action="scroll-to" data-id="lesson-quiz">Quiz</button>
          <button data-action="scroll-to" data-id="lesson-readiness">Finish</button>
        </nav>
        <h2 id="lesson-reading"><span class="sec-no">01</span>The lesson</h2>
        <p>${esc(l.teach)}</p>
        <section class="taglish-explanation" aria-labelledby="taglish-title"><h2 id="taglish-title"><span class="tl-tag">Taglish</span>Explanation</h2><p lang="fil">${esc(l.taglish)}</p></section>
        <section class="pro-tips" aria-labelledby="tips-title"><h2 id="tips-title">Pro tips from your mentor</h2><ul>${l.proTips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>${tl(l.tl?.tips)}</section>
        ${clientExpectations(l)}
        <div class="callout"><h3>Worked example</h3><p>${esc(l.example)}</p>${tl(l.tl?.example)}</div>
        ${l.deepDive ? `<section class="deep-dive"><h2><span class="sec-no">02</span>Detailed walkthrough</h2>${l.deepDive.map(([heading, text]) => `<h3>${esc(heading)}</h3><p>${esc(text)}</p>`).join("")}</section>` : ""}
        <h2><span class="sec-no">03</span>Try it step by step</h2>
        <ol class="steps">${l.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        ${lessonPractice(l)}
        <h2><span class="sec-no">04</span>Common mistake</h2><p>${esc(l.mistake)}</p>${tl(l.tl?.mistake)}
        <section class="quiz" id="lesson-quiz"><h2><span class="sec-no">05</span>Quick knowledge check</h2><p>${esc(l.question)}</p>
          <fieldset><legend class="meta">Choose one answer</legend>${l.options.map((_, i) => quizOption(l, i, chosen)).join("")}</fieldset>
          <button data-action="check-quiz" data-id="${id}">Check answer</button>
          <div id="quiz-result" role="status">${quizVerdict(l, chosen)}</div>
        </section>
        ${lessonReadiness(l, position)}
      </article>
    </div>`;
}

/* ---------- Other pages ---------- */

function roadmap() {
  const slow = state.pace === "24";
  app.innerHTML = `${pageIntro(
    "A plan you can follow.",
    "Use 12 weeks as a flexible guide. Move forward when your practice meets the checks, rather than when a date passes.",
    `<div class="toolbar"><label for="pace">Study pace</label><select id="pace"><option value="12" ${slow ? "" : "selected"}>12 weeks · about 5–7 hours a week</option><option value="24" ${slow ? "selected" : ""}>24 weeks · one hour, three days a week</option></select></div><p class="meta">At one hour a day, you can use the 12-week plan, taking extra time when needed. The slower plan splits each stage over two weeks. These are study estimates. Modules 9–27 add deeper practice: allow one or more extra weeks per module and repeat difficult tasks until the checks pass.</p>`,
  )}
  <ol class="timeline">${weeks
    .map(
      (w, i) =>
        `<li class="timeline-item reveal" data-vars="i:${i % 6}"><span class="timeline-when">${slow ? `Weeks ${i * 2 + 1}–${i * 2 + 2}` : `Week ${i + 1}`}</span><div class="timeline-card"><h3>${esc(w[0])}</h3><p class="meta">${esc(w[1])}</p><p>${esc(w[2])}</p>${tl(weekTaglish[i])}</div></li>`,
    )
    .join("")}</ol>
  <div class="callout reveal"><h3>Your one-hour study session</h3><p>15 minutes: read one lesson. 30 minutes: practice the task. 10 minutes: check your work. 5 minutes: save notes and choose the next action.</p>${tl("Isang oras kada araw: 15 minuto basahin ang lesson, 30 minuto gawin ang task, 10 minuto i-check ang gawa, at 5 minuto i-save ang notes at pumili ng susunod na hakbang.")}</div>`;
}

function library() {
  app.innerHTML = `${pageIntro(
    "Your working toolkit.",
    "Adapt these templates to the client and the agreed policy. Replace every bracketed placeholder and check the facts before use.",
  )}${templates
    .map(
      (t, i) =>
        `<details class="reveal"><summary>${esc(t[0])}</summary>${tl(templateTaglish[i])}<pre>${esc(t[1])}</pre><div class="toolbar"><button data-action="copy-template" data-id="${i}">Copy template</button><span class="meta" id="copy-${i}" role="status"></span></div></details>`,
    )
    .join("")}`;
}

function practice() {
  app.innerHTML = `${pageIntro(
    "Practice before the real thing.",
    "Eight fictional client simulations build toward a complete portfolio project and advanced client practice. Complete the task first, then open the review criteria.",
  )}${scenarios
    .map((s) => {
      const key = "sim-" + s[0];
      return `<section class="card sim reveal"><span class="pill">${esc(s[2])}</span><h2>${esc(s[0])}. ${esc(s[1])}</h2><p>${esc(s[3])}</p>${tl(scenarioTaglish[s[0]])}<h3>Your deliverable</h3><p>${esc(s[4])}</p><details><summary>Review criteria</summary><p>${esc(s[5])}</p></details><label for="${key}">Your simulation notes</label><textarea id="${key}" data-note="${key}" maxlength="${MAX_NOTE_LENGTH}">${esc(state.notes[key] || "")}</textarea><div class="toolbar"><button data-action="save-note" data-id="${key}">Save notes</button><span class="meta" data-save-status role="status"></span></div></section>`;
    })
    .join("")}
  <section class="continue capstone reveal"><p class="eyebrow">Final capstone</p><h2>Run a week of support for the fictional bakery.</h2><p>The bakery receives 20 orders and 10 support messages. Five orders need clarification, two messages request refunds, and a weekend menu needs owner approval. Invent the source data and clearly label it fictional.</p>${tl("Gumawa ng sariling gawa-gawang data at isulat na fictional ito. Gawin ang walong hakbang sa ibaba, i-score ang sarili mula 0 hanggang 2, at ibalik ang mahihinang bahagi bago idagdag sa portfolio.")}<ol><li>Write a service scope, onboarding questions, and access plan.</li><li>Create a 20-order tracker with verified totals and exceptions.</li><li>Triage 10 messages and draft three replies for review.</li><li>Prepare an agenda, minutes, and action tracker.</li><li>Create a three-post content plan with an approval step.</li><li>Use AI for one draft, then document your fact checks and edits.</li><li>Write an SOP and a safe automation test plan.</li><li>Deliver a weekly report, sample invoice, and handoff checklist.</li></ol><h3>Assessment rubric</h3><p>Score each area 0–2: accuracy, organization, communication, privacy and approval, completeness. 0 = missing or unsafe; 1 = usable with corrections; 2 = complete and verified. Aim for 8/10 or more, with no zero in accuracy or privacy. Revise weak areas before adding samples to your portfolio.</p><p>Next step: bring your deliverables and rubric score to this chat for coaching. Choose one service to keep practicing and tailor your first proposal to a verified opportunity.</p><label for="capstone">Your capstone notes and scores</label><textarea id="capstone" data-note="capstone" maxlength="${MAX_NOTE_LENGTH}">${esc(state.notes.capstone || "")}</textarea><div class="toolbar"><button class="cta" data-action="save-note" data-id="capstone">Save capstone notes</button><span class="meta" data-save-status role="status"></span></div></section>`;
}

function portfolioPage() {
  const done = state.portfolio.length;
  app.innerHTML = `${pageIntro(
    "Your portfolio tracker.",
    "Every lesson ends with something you can show a client. Tick each piece when it is finished, checked, and free of private information.",
    `<div class="progress-row"><p class="progress-count"><strong data-count="${done}">${done}</strong><span class="muted"> / ${lessons.length} pieces</span></p></div>${bar(ratio(done, lessons.length))}`,
  )}${modules
    .map((module, mi) => {
      const items = lessons.filter((l) => l.mi === mi);
      const finished = items.filter((l) =>
        state.portfolio.includes(l.id),
      ).length;
      return `<details class="portfolio-group reveal" ${mi === 0 ? "open" : ""}><summary>${mi + 1}. ${esc(module[0])}<span class="meta">${finished} / ${items.length}</span></summary>${items
        .map(
          (l) =>
            `<label class="check portfolio-item"><input type="checkbox" data-portfolio="${l.id}" ${state.portfolio.includes(l.id) ? "checked" : ""}><span><strong>${esc(l.title)}</strong><br>${esc(l.portfolio)} <a href="#lesson/${l.id}">Open lesson</a></span></label>`,
        )
        .join("")}</details>`;
    })
    .join("")}`;
}

function examSummary(exam) {
  const result = state.exams[exam.id];
  const scores = result?.scores ?? exam.criteria.map(() => null);
  const scored = scores.filter((s) => s !== null).length;
  const points = scores.reduce((sum, s) => sum + (s ?? 0), 0);
  const max = exam.criteria.length * 2;
  const percent = Math.round((points / max) * 100);
  const criticalZero = exam.criteria.some((c, i) => c[2] && scores[i] === 0);
  return {
    scores,
    scored,
    total: exam.criteria.length,
    points,
    max,
    percent,
    criticalZero,
    passed: scored === exam.criteria.length && percent >= 80 && !criticalZero,
  };
}

function examVerdict(exam) {
  const s = examSummary(exam);
  if (s.scored < s.total)
    return `<p class="meta">Score every criterion to see your result (${s.scored} of ${s.total} scored).</p>`;
  const cls = s.passed ? "is-correct" : "is-wrong";
  const note = s.passed
    ? "Ready for a real trial. Keep your answer as a portfolio sample after removing anything private."
    : s.criticalZero
      ? "A critical criterion scored 0. Fix accuracy or privacy first, then retake the trial."
      : "Below 80%. Review the key, revise weak areas, and try again.";
  return `<div class="result ${cls}"><strong>${s.points} / ${s.max} (${s.percent}%).</strong> ${esc(note)}</div>`;
}

function examPage() {
  app.innerHTML = `${pageIntro(
    "Mock paid trials.",
    "Real clients often start with a short paid trial. Practice under a one-hour limit, write your answer, then score yourself honestly against the criteria. Pass with 80% or more and no zero on a critical criterion.",
  )}${exams
    .map((exam) => {
      const key = "exam-" + exam.id;
      const summary = examSummary(exam);
      return `<section class="card sim reveal" id="${esc(exam.id)}"><span class="pill">${exam.minutes} minutes</span><h2>${esc(exam.title)}</h2><p>${esc(exam.brief)}</p>${tl(exam.taglish)}
        <div class="timer-row"><span class="timer" data-timer="${esc(exam.id)}" role="timer" aria-live="off">${exam.minutes}:00</span><button data-action="start-timer" data-id="${esc(exam.id)}">Start timer</button><button class="quiet" data-action="stop-timer" data-id="${esc(exam.id)}">Stop</button></div>
        <h3>Materials</h3><pre>${esc(exam.data)}</pre>
        <h3>Your tasks</h3><ol class="steps">${exam.tasks.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
        <label for="${key}">Your answer</label><textarea id="${key}" data-note="${key}" maxlength="${MAX_NOTE_LENGTH}">${esc(state.notes[key] || "")}</textarea>
        <div class="toolbar"><button data-action="save-note" data-id="${key}">Save answer</button><span class="meta" data-save-status role="status"></span></div>
        <details><summary>Score yourself and open the review key</summary>
          <p class="meta">Score 0 = missing or unsafe, 1 = usable with corrections, 2 = complete and verified. Be honest; only you see this.</p>
          ${exam.criteria
            .map(
              ([name, desc, critical], i) =>
                `<div class="criterion"><label for="score-${esc(exam.id)}-${i}"><strong>${esc(name)}${critical ? " (critical)" : ""}</strong><br><span class="meta">${esc(desc)}</span></label><select id="score-${esc(exam.id)}-${i}" data-exam-score="${esc(exam.id)}:${i}"><option value="">Not scored</option>${[0, 1, 2].map((v) => `<option value="${v}" ${summary.scores[i] === v ? "selected" : ""}>${v}</option>`).join("")}</select></div>`,
            )
            .join("")}
          <div id="verdict-${esc(exam.id)}" role="status">${examVerdict(exam)}</div>
          <h3>Review key</h3><p>${esc(exam.key)}</p>
        </details></section>`;
    })
    .join("")}`;
}

function glossaryPage() {
  app.innerHTML = `${pageIntro(
    "The language of VA work.",
    "Plain-English definitions to keep nearby as you learn.",
    '<div class="glossary-search"><label for="glossary-search" class="sr-only">Search the glossary</label><input id="glossary-search" type="search" placeholder="Search terms" autocomplete="off"></div>',
  )}<section class="card reveal"><dl id="glossary-list">${Object.entries(
    glossary,
  )
    .map(
      ([term, meaning]) =>
        `<div class="gloss" data-search="${esc((term + " " + meaning + " " + glossaryTaglish[term]).toLowerCase())}"><dt>${esc(term)}</dt><dd>${esc(meaning)}<span class="gloss-tl" lang="fil">${esc(glossaryTaglish[term])}</span></dd></div>`,
    )
    .join(
      "",
    )}</dl><p class="empty-result" id="glossary-empty" hidden>No terms match your search.</p></section>`;
}

function filterGlossary() {
  const query = $("#glossary-search").value.trim().toLowerCase();
  let shown = 0;
  for (const row of app.querySelectorAll(".gloss")) {
    const match = row.dataset.search.includes(query);
    row.hidden = !match;
    if (match) shown++;
  }
  $("#glossary-empty").hidden = shown > 0;
}

/* ---------- Router ---------- */

const ROUTES = {
  learn: { view: home, title: "Learning path" },
  roadmap: { view: roadmap, title: "12-week roadmap" },
  session: { view: sessionPage, title: "Daily review" },
  portfolio: { view: portfolioPage, title: "Portfolio tracker" },
  exam: { view: examPage, title: "Mock trials" },
  library: { view: library, title: "Template library" },
  practice: { view: practice, title: "Client simulations" },
  glossary: { view: glossaryPage, title: "VA glossary" },
};

function currentRoute() {
  return location.hash.slice(1) || "learn";
}

function updateChrome(route) {
  const section = route.startsWith("lesson/") ? "learn" : route;
  for (const link of document.querySelectorAll(".masthead nav a")) {
    const active = link.hash === "#" + section;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
  const lessonRecord = route.startsWith("lesson/")
    ? lessonById.get(route.slice(7))
    : null;
  const title =
    lessonRecord?.title || ROUTES[route]?.title || ROUTES.learn.title;
  document.title = `${title} · ${APP_NAME}`;
  $("#side-count").textContent = `${completedCount()} / ${lessons.length}`;
  Motion.showReadingBar(Boolean(lessonRecord));
}

/** Draw the current route. `animate: false` is used for in-place updates. */
function render({ animate = true } = {}) {
  stopExamTimer();
  const route = currentRoute();
  if (route !== "session" && session?.finished) session = null;
  if (route.startsWith("lesson/")) lesson(route.slice(7));
  else (ROUTES[route] || ROUTES.learn).view();
  const heading = $("h1", app);
  if (heading) heading.tabIndex = -1;
  if (!animate) {
    for (const el of app.querySelectorAll(".reveal")) el.classList.add("in");
    for (const el of app.querySelectorAll(".animate-in"))
      el.classList.add("is-filled");
  }
  Motion.hydrate(app);
  updateChrome(route);
  document.dispatchEvent(new CustomEvent("va:rendered"));
}

/** Re-render in place, keeping scroll position and (optionally) focus. */
function rerender(focusSelector) {
  const y = window.scrollY;
  render({ animate: false });
  window.scrollTo(0, y);
  if (focusSelector) $(focusSelector)?.focus({ preventScroll: true });
}

function changeRoute() {
  flushNotes();
  Motion.transition(() => {
    render();
    window.scrollTo(0, 0);
    $("h1", app)?.focus({ preventScroll: true });
  });
}

/* ---------- Notes ---------- */

const setSaveStatus = (text) => {
  for (const el of app.querySelectorAll("[data-save-status]"))
    el.textContent = text;
};

const commitNotes = debounce(() => {
  markActive();
  setSaveStatus(save() ? "Saved on this browser" : "Not saved — export a copy");
}, 350);

function flushNotes() {
  commitNotes.flush();
  save();
}

/* ---------- Exam timer ---------- */

let examTimer = null;

function stopExamTimer() {
  if (examTimer) clearInterval(examTimer.handle);
  examTimer = null;
}

function startExamTimer(id) {
  const exam = examById.get(id);
  const display = app.querySelector(`[data-timer="${id}"]`);
  if (!exam || !display) return;
  stopExamTimer();
  const end = Date.now() + exam.minutes * 60000;
  const tick = () => {
    const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    display.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
    display.classList.toggle("low", left <= 300);
    if (left === 0) {
      stopExamTimer();
      toast("Time is up. Finish your sentence and save your answer.");
    }
  };
  examTimer = { id, handle: setInterval(tick, 1000) };
  tick();
}

/* ---------- Actions ---------- */

function exportProgress() {
  const blob = new Blob([JSON.stringify(exportPayload(), null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "va-academy-progress.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function importProgress(file) {
  try {
    if (file.size > MAX_IMPORT_BYTES)
      throw new Error("That file is too large to be a progress export.");
    const next = parseImport(await file.text());
    if (
      !confirm("Replace the progress and notes in this browser with this file?")
    )
      return;
    replaceState(next);
    persist();
    rerender();
    toast("Progress imported");
  } catch (error) {
    toast(error.message);
  }
}

async function copyTemplate(index) {
  const status = $("#copy-" + index);
  try {
    await navigator.clipboard.writeText(templates[index][1]);
    toast("Template copied");
    if (status) status.textContent = "Copied";
  } catch {
    if (status)
      status.textContent =
        "Select the template text above and copy it manually.";
  }
}

function checkQuiz(id) {
  const l = lessonById.get(id);
  const picked = $('input[name="quiz"]:checked');
  if (!l || !picked) {
    toast("Choose an answer first");
    return;
  }
  const choice = Number(picked.value);
  state.quizzes[id] = choice;
  persist();
  app.querySelectorAll(".option").forEach((label, i) => {
    label.classList.remove("is-correct", "is-wrong");
    if (i === choice)
      label.classList.add(i === l.answer ? "is-correct" : "is-wrong");
  });
  $("#quiz-result").innerHTML = quizVerdict(l, choice);
}

function toggleComplete(id) {
  const l = lessonById.get(id);
  if (!l) return;
  if (isDone(id)) {
    state.done = state.done.filter((x) => x !== id);
  } else {
    if ((state.checks[id] || []).length !== l.ready.length) {
      toast("Check each readiness skill before completing");
      return;
    }
    state.done.push(id);
  }
  persist();
  rerender('[data-action="toggle-complete"]');
  if (isDone(id)) {
    Motion.celebrate($('[data-action="toggle-complete"]'));
    toast(
      completedCount() === lessons.length
        ? "Every lesson complete. Outstanding work!"
        : "Lesson marked complete",
    );
  } else toast("Lesson returned to practice");
}

const ACTIONS = {
  "open-lesson": (el) => (location.hash = "lesson/" + el.dataset.id),
  go: (el) => (location.hash = el.dataset.id),
  "scroll-to": (el) =>
    document
      .getElementById(el.dataset.id)
      ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" }),
  "save-note": (el) => {
    const key = el.dataset.id;
    const box = app.querySelector(`[data-note="${key}"]`);
    if (!box) return;
    state.notes[key] = box.value;
    if (save()) {
      toast("Notes saved on this browser");
      setSaveStatus("Saved on this browser");
    } else toast("Browser storage unavailable. Export your progress.");
  },
  "start-session": () => {
    session = null;
    location.hash = "session";
  },
  "session-check": sessionCheck,
  "session-next": sessionNext,
  browse: () => {
    if (currentRoute() === "learn")
      document
        .getElementById("contents")
        ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    else location.hash = "learn";
  },
  "start-timer": (el) => startExamTimer(el.dataset.id),
  "stop-timer": (el) => {
    stopExamTimer();
    const exam = examById.get(el.dataset.id);
    const display = app.querySelector(`[data-timer="${el.dataset.id}"]`);
    if (exam && display) {
      display.textContent = `${exam.minutes}:00`;
      display.classList.remove("low");
    }
  },
  "check-quiz": (el) => checkQuiz(el.dataset.id),
  "toggle-complete": (el) => toggleComplete(el.dataset.id),
  "copy-template": (el) => copyTemplate(Number(el.dataset.id)),
  export: exportProgress,
  import: () => $("#import-file")?.click(),
  reset: () => {
    if (
      !confirm(
        "Erase all progress and notes saved in this browser? Export first if you want a backup.",
      )
    )
      return;
    resetState();
    rerender();
    toast("Progress reset");
  },
  "toggle-theme": () => {
    const root = document.documentElement;
    const dark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme &&
        matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = dark ? "light" : "dark";
    try {
      localStorage.setItem("va-academy-theme", root.dataset.theme);
    } catch {
      /* Theme still applies for this visit. */
    }
  },
};

document.addEventListener("click", (event) => {
  if (event.target.closest("a.skip-link")) {
    event.preventDefault();
    $("#main").focus();
    $("#main").scrollIntoView();
    return;
  }
  const el = event.target.closest("[data-action]");
  if (el && !el.disabled) ACTIONS[el.dataset.action]?.(el, event);
});

document.addEventListener("change", (event) => {
  const t = event.target;
  if (t.dataset.check) {
    const [id, raw] = t.dataset.check.split(":");
    const i = Number(raw);
    const values = state.checks[id] || [];
    state.checks[id] = t.checked
      ? [...new Set([...values, i])]
      : values.filter((x) => x !== i);
    persist();
  } else if (t.dataset.portfolio) {
    const id = t.dataset.portfolio;
    state.portfolio = t.checked
      ? [...new Set([...state.portfolio, id])]
      : state.portfolio.filter((x) => x !== id);
    persist();
    const items = [
      ...t.closest("details").querySelectorAll("[data-portfolio]"),
    ];
    t.closest("details").querySelector("summary .meta").textContent =
      `${items.filter((i) => i.checked).length} / ${items.length}`;
  } else if (t.dataset.examScore) {
    const [id, raw] = t.dataset.examScore.split(":");
    const exam = examById.get(id);
    if (!exam) return;
    const scores = [...examSummary(exam).scores];
    scores[Number(raw)] = t.value === "" ? null : Number(t.value);
    state.exams[id] = { scores, date: dayKey() };
    persist();
    $("#verdict-" + id).innerHTML = examVerdict(exam);
  } else if (t.dataset.skill !== undefined) {
    const i = Number(t.dataset.skill);
    state.skills = t.checked
      ? [...new Set([...state.skills, i])]
      : state.skills.filter((x) => x !== i);
    persist();
  } else if (t.id === "lesson-picker") location.hash = "lesson/" + t.value;
  else if (t.id === "module-filter") filterLessons();
  else if (t.id === "pace") {
    state.pace = t.value === "24" ? "24" : "12";
    persist();
    rerender("#pace");
  } else if (t.id === "import-file" && t.files[0]) {
    importProgress(t.files[0]);
    t.value = "";
  }
});

document.addEventListener("input", (event) => {
  const t = event.target;
  if (t.id === "lesson-search") filterLessons();
  else if (t.id === "glossary-search") filterGlossary();
  else if (t.dataset.note) {
    state.notes[t.dataset.note] = t.value.slice(0, MAX_NOTE_LENGTH);
    setSaveStatus("Saving…");
    commitNotes();
  }
});

// Another tab changed progress: refresh unless the user is mid-edit.
document.addEventListener("va:state-external", () => {
  if (document.activeElement?.matches("textarea, input[type=search]")) return;
  rerender();
});

window.addEventListener("hashchange", changeRoute);
window.addEventListener("pagehide", flushNotes);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushNotes();
});

/* ---------- Optional WebMCP tools (read-only / navigation) ---------- */

function registerAgentTools() {
  const registry = document.modelContext;
  if (!registry?.registerTool) return;
  const register = (tool) => {
    try {
      Promise.resolve(registry.registerTool(tool)).catch(() => {});
    } catch {
      /* Agent tooling is optional. */
    }
  };
  register({
    name: "get_learning_progress",
    description: "Read completed lesson IDs and the next recommended lesson.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: () => ({
      completed: [...state.done],
      total: lessons.length,
      next: lessons.find((l) => !isDone(l.id))?.id ?? null,
    }),
  });
  register({
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
        typeof input?.lessonId !== "string" ||
        !lessonById.has(input.lessonId)
      )
        throw new Error("Unknown lesson ID");
      location.hash = "lesson/" + input.lessonId;
      return { lessonId: input.lessonId, opened: true };
    },
  });
}

render();
registerAgentTools();
