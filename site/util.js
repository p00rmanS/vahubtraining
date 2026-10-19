"use strict";
// Small shared helpers. Loaded before every script that renders HTML.

const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape any value for safe insertion into an HTML template string. */
const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Delay a function until calls stop for `wait` ms; `.flush()` runs it now. */
function debounce(fn, wait) {
  let timer = null;
  let pending = null;
  const run = () => {
    timer = null;
    const args = pending;
    pending = null;
    if (args) fn(...args);
  };
  const debounced = (...args) => {
    pending = args;
    clearTimeout(timer);
    timer = setTimeout(run, wait);
  };
  debounced.flush = () => {
    clearTimeout(timer);
    run();
  };
  return debounced;
}

const DAY_KEY = /^\d{4}-\d{2}-\d{2}$/;

/** Local calendar day as YYYY-MM-DD. */
function dayKey(date = new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Consecutive study days ending today (or yesterday, so the streak survives until tonight). */
function currentStreak(days, today = new Date()) {
  const seen = new Set(days);
  const cursor = new Date(today);
  if (!seen.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (seen.has(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/** Add whole days to a YYYY-MM-DD key and return a new key. */
function addDays(key, days) {
  const [y, m, d] = key.split("-").map(Number);
  return dayKey(new Date(y, m - 1, d + days));
}
