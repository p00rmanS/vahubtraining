const fs = require("node:fs");
const path = require("node:path");
const site = path.join(__dirname, "..", "site");
const htmlPath = path.join(site, "index.html");
let html = fs.readFileSync(htmlPath, "utf8");
html = html.replace(
  "<title>",
  "<meta name=\"referrer\" content=\"no-referrer\"><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'\"><title>",
);
fs.writeFileSync(htmlPath, html);
const appPath = path.join(site, "app.js");
let app = fs.readFileSync(appPath, "utf8");
const marker = "const esc=";
if (!app.includes(marker))
  throw new Error("State validation insertion point missing");
const validation = `// Normalize persisted data before displaying it; storage is untrusted.
const knownIds = new Set(lessons.map(lesson => lesson.id));
state.done = [...new Set(state.done.filter(id => knownIds.has(id)))];
state.skills = [...new Set(state.skills.filter(value => Number.isInteger(value) && value >= 0 && value < 3))];
state.notes = Object.fromEntries(Object.entries(state.notes).filter(([key, value]) => (knownIds.has(key) || /^sim-[\\w-]+$/.test(key) || key === 'capstone') && typeof value === 'string').map(([key, value]) => [key, value.slice(0, 100000)]));
state.checks = Object.fromEntries(Object.entries(state.checks).filter(([key, value]) => knownIds.has(key) && Array.isArray(value)).map(([key, values]) => [key, [...new Set(values.filter(value => Number.isInteger(value) && value >= 0 && value < lessons.find(lesson => lesson.id === key).ready.length))]]));
state.quizzes = Object.fromEntries(Object.entries(state.quizzes).filter(([key, value]) => knownIds.has(key) && Number.isInteger(value) && value >= 0 && value < lessons.find(lesson => lesson.id === key).options.length));
state.lastLesson = knownIds.has(state.lastLesson) ? state.lastLesson : null;
state.pace = state.pace === '24' ? '24' : '12';
`;
app = app.replace(marker, validation + marker);
fs.writeFileSync(appPath, app);
fs.writeFileSync(path.join(site, ".nojekyll"), "");
