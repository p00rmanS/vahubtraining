"use strict";
// Registers the offline cache on secure origins only, so local development
// never serves stale files.

if ("serviceWorker" in navigator && location.protocol === "https:")
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* Offline support is optional. */
    });
  });
