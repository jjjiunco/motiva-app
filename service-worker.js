
const CACHE_NAME = 'motiva-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  ...(["assets/bg4.jpeg", "assets/bg1.jpeg", "assets/bg7.jpeg", "assets/bg3.jpeg", "assets/bg8.jpeg", "assets/bg6.jpeg", "assets/bg9.jpeg", "assets/bg2.jpeg", "assets/bg10.jpeg", "assets/bg5.jpeg"]).map(p => '/' + p)
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
