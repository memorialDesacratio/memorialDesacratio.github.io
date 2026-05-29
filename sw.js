// === СТАБИЛЬНЫЙ SW: очищает кэш и пропускает в сеть ===
// Версия: 2026-05-29-003 (менять только при необходимости)
// Этот SW заменяет все старые SW и чистит их кэш.

var CACHE_VERSION = 'v3-clear';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    Promise.all([
      // Очищаем ВСЕ старые кэши
      caches.keys().then(function(names) {
        return Promise.all(names.map(function(name) {
          return caches.delete(name);
        }));
      }),
      // Немедленно захватываем контроль
      self.clients.claim()
    ])
  );
});

// Ничего не кэшируем — всегда в сеть
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
