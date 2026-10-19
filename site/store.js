"use strict";
// Persistence layer. Everything read from localStorage or an imported file is
// untrusted, so every field is validated against the course data on the way in.

const STORAGE_KEY = "va-academy-v1";
const MAX_NOTE_LENGTH = 100000;
const MAX_IMPORT_BYTES = 2 * 1024 * 1024;
const SKILL_MILESTONES = 3;

const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const NOTE_KEYS = new Set([
  ...lessonById.keys(),
  ...scenarios.map((scenario) => "sim-" + scenario[0]),
  "capstone",
  ...exams.map((exam) => "exam-" + exam.id),
]);
const examById = new Map(exams.map((exam) => [exam.id, exam]));
const MAX_ACTIVITY_DAYS = 400;

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const uniqueIndexes = (values, limit) =>
  Array.isArray(values)
    ? [
        ...new Set(
          values.filter((v) => Number.isInteger(v) && v >= 0 && v < limit),
        ),
      ]
    : [];

/** Build a complete, trusted state object from any input. */
function sanitizeState(raw) {
  const source = isPlainObject(raw) ? raw : {};
  const notes = {};
  const checks = {};
  const quizzes = {};
  if (isPlainObject(source.notes))
    for (const [key, value] of Object.entries(source.notes))
      if (NOTE_KEYS.has(key) && typeof value === "string")
        notes[key] = value.slice(0, MAX_NOTE_LENGTH);
  if (isPlainObject(source.checks))
    for (const [key, value] of Object.entries(source.checks))
      if (lessonById.has(key))
        checks[key] = uniqueIndexes(value, lessonById.get(key).ready.length);
  if (isPlainObject(source.quizzes))
    for (const [key, value] of Object.entries(source.quizzes))
      if (
        lessonById.has(key) &&
        Number.isInteger(value) &&
        value >= 0 &&
        value < lessonById.get(key).options.length
      )
        quizzes[key] = value;
  const examResults = {};
  if (isPlainObject(source.exams))
    for (const [key, value] of Object.entries(source.exams)) {
      const exam = examById.get(key);
      if (!exam || !isPlainObject(value) || !Array.isArray(value.scores))
        continue;
      examResults[key] = {
        scores: exam.criteria.map((_, i) => {
          const score = value.scores[i];
          return Number.isInteger(score) && score >= 0 && score <= 2
            ? score
            : null;
        }),
        date:
          typeof value.date === "string" && DAY_KEY.test(value.date)
            ? value.date
            : null,
      };
    }
  const reviews = {};
  if (isPlainObject(source.reviews))
    for (const [key, value] of Object.entries(source.reviews))
      if (
        lessonById.has(key) &&
        isPlainObject(value) &&
        Number.isInteger(value.box) &&
        value.box >= 1 &&
        value.box <= 5 &&
        typeof value.due === "string" &&
        DAY_KEY.test(value.due)
      )
        reviews[key] = { box: value.box, due: value.due };
  const activity = Array.isArray(source.activity)
    ? [
        ...new Set(
          source.activity.filter(
            (d) => typeof d === "string" && DAY_KEY.test(d),
          ),
        ),
      ]
        .sort()
        .slice(-MAX_ACTIVITY_DAYS)
    : [];
  return {
    done: Array.isArray(source.done)
      ? [...new Set(source.done.filter((id) => lessonById.has(id)))]
      : [],
    notes,
    checks,
    quizzes,
    skills: uniqueIndexes(source.skills, SKILL_MILESTONES),
    portfolio: Array.isArray(source.portfolio)
      ? [...new Set(source.portfolio.filter((id) => lessonById.has(id)))]
      : [],
    exams: examResults,
    reviews,
    activity,
    pace: source.pace === "24" ? "24" : "12",
    lastLesson: lessonById.has(source.lastLesson) ? source.lastLesson : null,
  };
}

function readStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

let state = sanitizeState(readStored());
let storageFailed = false;

function replaceState(next) {
  state = sanitizeState(next);
}

/** Write state now. Returns false (and remembers it) when storage is blocked. */
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    storageFailed = false;
  } catch {
    storageFailed = true;
  }
  return !storageFailed;
}

function exportPayload() {
  return {
    academy: "VA Academy",
    version: 1,
    exportedAt: new Date().toISOString(),
    ...state,
  };
}

/** Parse an exported progress file. Throws a user-readable Error. */
function parseImport(text) {
  if (typeof text !== "string" || text.length > MAX_IMPORT_BYTES)
    throw new Error("That file is too large to be a progress export.");
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("That file is not valid JSON.");
  }
  if (!isPlainObject(data) || data.academy !== "VA Academy")
    throw new Error("That file is not a VA Academy progress export.");
  return sanitizeState(data);
}

function resetState() {
  replaceState({});
  return save();
}

// Keep several open tabs consistent instead of silently overwriting each other.
window.addEventListener("storage", (event) => {
  if (event.key !== STORAGE_KEY || event.storageArea !== localStorage) return;
  try {
    replaceState(JSON.parse(event.newValue));
  } catch {
    replaceState({});
  }
  document.dispatchEvent(new CustomEvent("va:state-external"));
});
