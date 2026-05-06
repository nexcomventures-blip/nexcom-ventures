const CACHE_VERSION = 'nexcom-cache-v2-' + Date.now();

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll([
      './',
      './index.html',
      './js/products.js',
      './css/style.css',
      './logo.svg'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(cacheNames.map((cacheName) => 
        cacheName !== CACHE_VERSION ? caches.delete(cacheName) : null
      ))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const clonedResponse = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(e.request, clonedResponse));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});