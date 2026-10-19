"use strict";
// Motion helpers. Every effect is skipped when the visitor prefers reduced
// motion, and nothing here is required for the content to be readable.

const Motion = (() => {
  /** Cross-fade between views with the View Transitions API when available. */
  function transition(update) {
    if (
      prefersReducedMotion() ||
      !document.startViewTransition ||
      document.visibilityState !== "visible"
    ) {
      update();
      return;
    }
    // The transition API can stall (throttled frames, embedded webviews), so
    // guarantee the view still renders even if its callback is delayed.
    let ran = false;
    const run = () => {
      if (ran) return;
      ran = true;
      update();
    };
    const fallback = setTimeout(run, 300);
    try {
      document.startViewTransition(() => {
        clearTimeout(fallback);
        run();
      });
    } catch {
      clearTimeout(fallback);
      run();
    }
  }

  /**
   * Strict CSP forbids inline style attributes, so templates carry values as
   * `data-vars="p:0.4;i:3"` and they are applied here as CSS custom properties.
   */
  function applyVars(root) {
    for (const el of root.querySelectorAll("[data-vars]")) {
      for (const pair of el.dataset.vars.split(";")) {
        const [name, value] = pair.split(":");
        if (name && /^-?\d*\.?\d+$/.test(value))
          el.style.setProperty("--" + name, value);
      }
    }
  }

  /** Count a number up from zero; the final value is already in the markup. */
  function countUp(root) {
    if (prefersReducedMotion()) return;
    for (const el of root.querySelectorAll("[data-count]")) {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target) || target <= 0) continue;
      const start = performance.now();
      const duration = 700;
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(target * (1 - (1 - t) ** 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      el.textContent = "0";
      requestAnimationFrame(tick);
    }
  }

  let revealObserver = null;
  /** Fade/slide `.reveal` blocks in as they enter the viewport. */
  function reveal(root) {
    const items = root.querySelectorAll(".reveal:not(.in)");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      for (const el of items) el.classList.add("in");
      return;
    }
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    for (const el of items) revealObserver.observe(el);
  }

  /** Re-run every dynamic effect for freshly rendered markup. */
  function hydrate(root) {
    applyVars(root);
    reveal(root);
    // Ring and bar fills start empty and animate to their value next frame.
    requestAnimationFrame(() => {
      for (const el of root.querySelectorAll(".animate-in"))
        el.classList.add("is-filled");
    });
    countUp(root);
  }

  /** Rubber-stamp "Done" over the button when a lesson is completed. */
  function celebrate(origin) {
    if (prefersReducedMotion() || !origin) return;
    const layer = document.getElementById("fx");
    if (!layer) return;
    const rect = origin.getBoundingClientRect();
    const stamp = document.createElement("span");
    stamp.className = "stamp";
    stamp.textContent = "Done!";
    stamp.style.setProperty("--x0", rect.left + rect.width / 2 + "px");
    stamp.style.setProperty("--y0", rect.top + rect.height / 2 + "px");
    stamp.addEventListener("animationend", () => stamp.remove(), {
      once: true,
    });
    layer.appendChild(stamp);
  }

  /** Thin bar showing how far through a lesson the reader is. */
  const readingBar = document.getElementById("read-progress");
  let barQueued = false;
  function updateReadingBar() {
    barQueued = false;
    if (!readingBar || readingBar.hidden) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    const ratio = max > 0 ? Math.min(scrollY / max, 1) : 0;
    readingBar.style.setProperty("--p", ratio.toFixed(4));
  }
  function showReadingBar(visible) {
    if (!readingBar) return;
    readingBar.hidden = !visible;
    updateReadingBar();
  }
  addEventListener(
    "scroll",
    () => {
      if (barQueued) return;
      barQueued = true;
      requestAnimationFrame(updateReadingBar);
    },
    { passive: true },
  );

  return { transition, hydrate, celebrate, showReadingBar };
})();
