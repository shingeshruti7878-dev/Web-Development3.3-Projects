const CACHE_NAME = "shop-cache-v2";

const urls = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js"
];

// Install
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urls))
  );
});

// Fetch
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});