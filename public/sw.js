const CACHE_NAME = 'travel-wisdom-v1';
const STATIC_ASSETS = [
  '/',
  '/travel-wisdom-logo.png',
  '/customer-service.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image' || event.request.destination === 'video') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) return response;
          
          return fetch(event.request).then((response) => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseClone));
            }
            return response;
          });
        })
    );
  }
});