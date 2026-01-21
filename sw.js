const CACHE_NAME = 'masjagatra-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',        // ganti kalau nama CSS berbeda
  '/img/logo-back-192.png',
  '/img/logo-back-512.png',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => res)
      .catch(() => caches.match(e.request))
  );
});
