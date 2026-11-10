"use strict";
// Growth features: trial score history, readiness check, weak-spot tracking,
// printable portfolio showcase, and memory aids. Loaded before app.js; it
// relies on the shared globals defined there (state, tl, bar, pageIntro...).

/* ---------- Weak spots: missed quiz answers feed the daily review ---------- */

/** Remember a missed question so it returns tomorrow; clear it as it is mastered. */
function noteQuizResult(id, correct, { fromReview = false } = {}) {
  const missed = state.misses[id] ?? 0;
  if (!correct) {
    state.misses[id] = Math.min(missed + 1, MAX_MISSES);
    state.reviews[id] = { box: 1, due: dayKey() };
  } else if (missed && fromReview) {
    if (missed <= 1) delete state.misses[id];
    else state.misses[id] = missed - 1;
  }
}

const weakLessons = () =>
  lessons
    .filter((l) => state.misses[l.id])
    .sort((a, b) => state.misses[b.id] - state.misses[a.id]);

/* ---------- Mock trial score history ---------- */

/** Store one history point per trial per day, replacing earlier same-day scores. */
function recordExamHistory(exam) {
  const summary = examSummary(exam);
  if (summary.scored !== summary.total) return;
  const today = dayKey();
  state.history = state.history
    .filter((h) => !(h.id === exam.id && h.date === today))
    .concat({
      id: exam.id,
      date: today,
      percent: summary.percent,
      passed: summary.passed,
    })
    .slice(-MAX_HISTORY);
}

function examHistoryHtml(exam) {
  const points = state.history.filter((h) => h.id === exam.id).slice(-8);
  if (!points.length)
    return `<p class="meta">No scored attempts yet. Score every criterion to start your history.</p>`;
  return `<ol class="history" aria-label="Score history for ${esc(exam.title)}">${points
    .map(
      (h) =>
        `<li><span class="history-date">${esc(h.date)}</span><span class="meter" aria-hidden="true"><span class="meter-fill animate-in ${h.passed ? "" : "warn"}" data-vars="p:${(h.percent / 100).toFixed(2)}"></span></span><strong>${h.percent}%</strong><span class="meta">${h.passed ? "passed" : "not yet"}</span></li>`,
    )
    .join("")}</ol>`;
}

/* ---------- Readiness check ---------- */

const FOUNDATION_MODULES = 9;

function readinessChecks() {
  const foundation = lessons.filter((l) => l.mi < FOUNDATION_MODULES);
  const foundationDone = foundation.filter((l) => isDone(l.id)).length;
  const half = Math.ceil(lessons.length / 2);
  const passedTrials = exams.filter((e) => examSummary(e).passed).length;
  const streak = currentStreak(state.activity);
  const weak = weakLessons().length;
  return [
    {
      name: "Foundation chapters finished",
      taglish: "Tapos ang unang siyam na chapter, ang pundasyon ng lahat.",
      value: foundationDone,
      target: foundation.length,
      hint: "Finish the first nine chapters so your basics are solid.",
      link: "#learn",
    },
    {
      name: "Half of the course complete",
      taglish: "Kalahati na ng buong kurso ang natapos mo.",
      value: completedCount(),
      target: half,
      hint: "Keep going; depth is what separates you from beginners.",
      link: "#learn",
    },
    {
      name: "Mock trials passed (3 needed)",
      taglish: "Pasado sa tatlong mock trial na may 80% pataas.",
      value: passedTrials,
      target: 3,
      hint: "Pass three timed trials with 80% and no zero on a critical criterion.",
      link: "#exam",
    },
    {
      name: "Portfolio pieces (8 needed)",
      taglish: "Walong gawang puwedeng ipakita sa client.",
      value: state.portfolio.length,
      target: 8,
      hint: "Tick finished, private-information-free pieces in the tracker.",
      link: "#portfolio",
    },
    {
      name: "Study streak (3 days)",
      taglish: "Tatlong araw na sunod-sunod na pag-aaral.",
      value: Math.min(streak, 3),
      target: 3,
      hint: "A few minutes of Daily review each day builds the habit.",
      link: "#session",
    },
    {
      name: "Weak spots cleared",
      taglish: "Wala nang namimiss na tanong na hindi pa naaayos.",
      value: weak === 0 ? 1 : 0,
      target: 1,
      hint: `${weak} question${weak === 1 ? "" : "s"} still to review in Daily review.`,
      link: "#session",
    },
  ].map((c) => ({ ...c, met: c.value >= c.target }));
}

function readinessVerdict(checks) {
  const met = checks.filter((c) => c.met).length;
  if (met === checks.length)
    return [
      "Ready to apply.",
      "Sapat na ang pundasyon mo. Gamitin ang showcase at mag-apply sa totoong client.",
      "Your foundation, trials, portfolio, and habits are in place. Build your showcase and start applying.",
    ];
  if (met >= checks.length - 2)
    return [
      "Almost ready.",
      "Malapit ka na. Ayusin ang natitirang mga hakbang sa ibaba.",
      "You are close. Close the gaps below, then apply with confidence.",
    ];
  return [
    "Keep building.",
    "Magpatuloy sa pag-aaral. Isa-isahin ang mga hakbang sa ibaba.",
    "Work through the steps below one at a time; each one makes you more hireable.",
  ];
}

function readyPage() {
  const checks = readinessChecks();
  const [headline, taglish, english] = readinessVerdict(checks);
  const next = checks.find((c) => !c.met);
  const weak = weakLessons().slice(0, 6);
  app.innerHTML = `${pageIntro("Are you ready for clients?", "A plain check of the habits and proof clients care about. It is your own learning record, not a certification.")}
    <section class="session-card reveal"><p class="kicker">Your status</p><h2>${esc(headline)}</h2><p>${esc(english)}</p>${tl(taglish)}
      ${next ? `<div class="toolbar"><a class="button cta" href="${esc(next.link)}">Next step: ${esc(next.name)}${ICONS.arrow}</a></div>` : `<div class="toolbar"><a class="button cta" href="#showcase">Build your showcase${ICONS.arrow}</a></div>`}</section>
    <ul class="ready-list">${checks
      .map(
        (c) =>
          `<li class="card ready-row reveal ${c.met ? "met" : ""}"><div class="ready-head"><strong>${esc(c.name)}</strong><span class="pill">${c.met ? "Done" : `${c.value} / ${c.target}`}</span></div>${bar(Math.min(1, ratio(c.value, c.target)))}<p class="meta">${esc(c.met ? "Requirement met." : c.hint)}</p>${tl(c.taglish)}</li>`,
      )
      .join("")}</ul>
    <section class="reveal"><h2>Weak spots</h2>${
      weak.length
        ? `<p class="meta">Questions you missed. They return in Daily review until you answer them correctly.</p>${tl("Mga tanong na namali mo. Babalik ang mga ito sa Daily review hanggang masagot mo nang tama.")}<ul class="weak-list">${weak.map((l) => `<li><a href="#lesson/${l.id}">${esc(l.title)}</a><span class="meta"> · missed ${state.misses[l.id]}×</span></li>`).join("")}</ul>`
        : `<p class="meta">No weak spots right now. Missed quiz answers will appear here.</p>${tl("Walang weak spot ngayon. Lalabas dito ang mga namaling sagot sa quiz.")}`
    }</section>`;
}

/* ---------- Printable portfolio showcase ---------- */

let showcaseNotes = false;

function showcasePage() {
  const pieces = lessons.filter((l) => state.portfolio.includes(l.id));
  const trials = exams.filter((e) => examSummary(e).passed);
  app.innerHTML = `${pageIntro("Portfolio showcase.", "A clean page of your finished pieces to print or save as a PDF for client proposals. Review every line before sharing.")}
    <div class="toolbar no-print"><label class="check"><input type="checkbox" id="showcase-notes" ${showcaseNotes ? "checked" : ""}><span>Include my practice notes (check them for private information first)</span></label><button class="primary" data-action="print-showcase">Print or save as PDF</button><a class="button" href="#portfolio">Back to portfolio tracker</a></div>
    <div class="callout no-print"><strong>Privacy check.</strong> Use fictional or approved information only. Remove client names, contact details, prices that are not yours to share, and any private data before you send this.${tl("Fictional o aprubadong impormasyon lang. Alisin ang pangalan ng client, contact details, at anumang pribadong data bago ipadala.")}</div>
    <section class="showcase" aria-label="Showcase">
      <header class="showcase-head"><h2>Virtual assistant portfolio</h2><p class="meta">Prepared ${esc(dayKey())} · ${pieces.length} piece${pieces.length === 1 ? "" : "s"} · ${trials.length} mock trial${trials.length === 1 ? "" : "s"} passed</p></header>
      ${trials.length ? `<h3>Timed trials passed (self-scored)</h3><ul>${trials.map((e) => `<li>${esc(e.title)} · ${examSummary(e).percent}%</li>`).join("")}</ul>` : ""}
      ${
        pieces.length
          ? modules
              .map((module, mi) => {
                const items = pieces.filter((l) => l.mi === mi);
                if (!items.length) return "";
                return `<h3>${esc(module[0])}</h3>${items
                  .map(
                    (l) =>
                      `<article class="showcase-piece"><h4>${esc(l.title)}</h4><p>${esc(l.portfolio)}</p>${showcaseNotes && state.notes[l.id] ? `<pre>${esc(state.notes[l.id].slice(0, 1500))}</pre>` : ""}</article>`,
                  )
                  .join("")}`;
              })
              .join("")
          : `<p class="meta">No portfolio pieces ticked yet. Finish a lesson's deliverable and tick it in the portfolio tracker.</p>`
      }
    </section>`;
}

/* ---------- Memory aids ---------- */

const MEMORY_TECHNIQUES = [
  [
    "Recall before you reread",
    "Close the lesson and write everything you remember. Then check what you missed. Struggling to remember is what builds memory.",
    "Isara ang lesson at isulat ang lahat ng naaalala mo. Saka i-check ang kulang. Ang pagsisikap na maalala ang nagpapatibay ng memorya.",
  ],
  [
    "Space it out",
    "Review after 1, 2, 4, 8, and 16 days. The Daily review does this for you; a missed question comes back tomorrow.",
    "Mag-review pagkalipas ng 1, 2, 4, 8, at 16 na araw. Ginagawa ito ng Daily review para sa iyo; ang namaling tanong ay babalik bukas.",
  ],
  [
    "Teach it back",
    "Explain the lesson in three sentences to a friend or record a voice note. Use Taglish if it is easier. If you get stuck, you found the gap.",
    "Ipaliwanag ang lesson sa tatlong pangungusap sa kaibigan o mag-voice note. Puwedeng Taglish. Kapag natigil ka, doon ang puwang sa kaalaman mo.",
  ],
  [
    "Hook it to a few key words",
    "Every lesson ends with readiness points. Remember their first words as a hook, then fill in the details around them.",
    "May mga readiness point ang dulo ng bawat lesson. Tandaan ang mga unang salita nito bilang hook, saka punan ang detalye sa paligid nito.",
  ],
  [
    "Use it within 24 hours",
    "Apply one idea to a real task today: a message, a spreadsheet, a checklist. Use beats rereading every time.",
    "Gamitin ang isang ideya sa totoong gawain ngayong araw: mensahe, spreadsheet, o checklist. Mas mabisa ang paggamit kaysa pag-uulit ng basa.",
  ],
  [
    "Mix the topics",
    "Alternate chapters in a week instead of studying one topic for hours. Mixing feels harder and sticks longer.",
    "Salitan ang mga chapter sa loob ng isang linggo sa halip na isang paksa lang nang ilang oras. Mas mahirap sa pakiramdam pero mas tumatagal.",
  ],
  [
    "Short sessions and sleep",
    "Study 25 minutes, rest 5. Review the key points before bed; sleep helps lock them in, then recall them again in the morning.",
    "Mag-aral ng 25 minuto, magpahinga ng 5. I-review ang mahahalagang punto bago matulog; tinutulungan ng tulog ang pag-ipon ng memorya, saka alalahanin muli sa umaga.",
  ],
];

const LOCK_IN_PLAN = [
  [
    "Week 1",
    "Read, then recall from a blank page. Do the Daily review every day.",
    "Basahin, saka alalahanin mula sa blangkong pahina. Daily review araw-araw.",
  ],
  [
    "Week 2",
    "Teach one lesson a day out loud. Apply one idea to a real task.",
    "Magturo ng isang lesson kada araw nang malakas. Gamitin ang isang ideya sa totoong gawain.",
  ],
  [
    "Week 3",
    "Mix two chapters per session. Retake a mock trial without notes.",
    "Dalawang chapter kada session. Ulitin ang mock trial nang walang notes.",
  ],
  [
    "Week 4",
    "Clear every weak spot. Print your showcase and explain each piece aloud.",
    "Ayusin ang bawat weak spot. I-print ang showcase at ipaliwanag nang malakas ang bawat piraso.",
  ],
];

function memoryPage() {
  app.innerHTML = `${pageIntro("Make it stick.", "You learn faster when you practice remembering, not just reading. These seven habits are backed by research on memory, and each is built into this academy.")}
    <section class="technique-grid">${MEMORY_TECHNIQUES.map(
      ([title, text, taglish], i) =>
        `<article class="card technique reveal" data-vars="i:${i % 6}"><span class="pill">${i + 1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p>${tl(taglish)}</article>`,
    ).join("")}</section>
    <h2 class="reveal">Your 28-day lock-in plan</h2>
    <ol class="steps plan">${LOCK_IN_PLAN.map(([week, text, taglish]) => `<li class="reveal"><strong>${esc(week)}.</strong> ${esc(text)}${tl(taglish)}</li>`).join("")}</ol>
    <div class="toolbar"><a class="button cta" href="#session">Start a Daily review${ICONS.arrow}</a><a class="button" href="#learn">Back to lessons</a></div>`;
}

/** The first word of each readiness point, joined into a four-part hook. */
function memoryHook(l) {
  return l.ready
    .map((item) => item.split(/\s+/)[0].replace(/[^\p{L}\p{N}'-]/gu, ""))
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" · ");
}

function lessonMemory(l) {
  return `<section class="memory-lock" aria-labelledby="memory-title"><h2 id="memory-title">Lock it in memory</h2>
    <p class="hook-line"><span class="kicker">Your memory hook</span><strong class="hook">${esc(memoryHook(l))}</strong></p>
    ${tl("Ito ang hook mo. Kapag natandaan mo ang mga salitang ito, babalik sa isip mo ang buong lesson.")}
    <details><summary>Recall card · cover the page, then recall the points</summary>
      <p>Say or write the points from memory, with one example for each. Then open this card and compare.</p>
      <ol>${l.ready.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>
      <p class="meta">${esc(l.example)}</p>
    </details>
    <p><strong>Teach it back.</strong> Explain this lesson in three sentences to a friend, aloud or as a voice note. Taglish is fine.</p>
    ${tl("Ituro mo ito pabalik: ipaliwanag ang lesson na ito sa tatlong pangungusap sa kaibigan, nang malakas o sa voice note. Puwedeng Taglish.")}
    <p class="meta">After you complete the lesson, it returns in your Daily review after 1, 2, 4, 8, and 16 days. <a href="#memory">More ways to remember</a></p></section>`;
}
