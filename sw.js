self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vulgus-spa').then((cache) => cache.addAll([
      // '/testRepository/',
      // '/testRepository/index.html',
      // '/testRepository/index.js',
      // '/testRepository/vulgusSPA.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
