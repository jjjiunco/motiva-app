// Versioned cache name. Increase this value to force the browser to refresh cached assets.
const CACHE = 'motiva-v3';

// Assets to cache for offline use. These paths are relative to the site root.
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js?v=3',
  '/manifest.json',
  '/bg1.jpeg', '/bg2.jpeg', '/bg3.jpeg', '/bg4.jpeg', '/bg5.jpeg',
  '/bg6.jpeg', '/bg7.jpeg', '/bg8.jpeg', '/bg9.jpeg', '/bg10.jpeg'
];

self.addEventListener('install', event => {
  // Pre-cache all of the assets listed above
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  // Respond from cache first, then network as fallback
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
