// Runs in <head> before first paint so the saved theme never flashes.
(() => {
  const root = document.documentElement;
  root.classList.add("js");
  try {
    const saved = localStorage.getItem("va-academy-theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch {
    /* Storage can be blocked; fall back to the system theme. */
  }
})();
