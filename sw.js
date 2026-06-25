const CACHE_NAME = 'waiphra9-cache-v1';
const urlsToCache = [
  '/WaiPhra9/',
  '/WaiPhra9/index.html',
  '/WaiPhra9/index.css',
  '/WaiPhra9/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
