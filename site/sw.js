"use strict";
// Offline cache: serve the app from cache and refresh it in the background.
// Only same-origin GET requests are handled; nothing else is stored.

const CACHE = "va-academy-offline-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const page = await fetch("./index.html", { cache: "reload" });
      const html = await page.clone().text();
      const files = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map(
        (m) => m[1],
      );
      await cache.addAll(["./", ...new Set(["index.html", ...files])]);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (key !== CACHE) await caches.delete(key);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (
    request.method !== "GET" ||
    new URL(request.url).origin !== location.origin
  )
    return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request);
      const refresh = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || refresh;
    })(),
  );
});
