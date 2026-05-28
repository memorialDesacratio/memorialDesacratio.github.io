// CyberDesacratio — Service Worker
const CACHE = 'cyberdesacratio-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/data.js',
    '/manifest.json',
    '/404.html',
    '/favicon.ico',
    '/assets/icons/favicon.svg',
    '/assets/icons/favicon-16x16.png',
    '/assets/icons/favicon-32x32.png',
    '/assets/icons/apple-touch-icon.png',
    '/assets/icons/android-chrome-192x192.png',
    '/assets/icons/android-chrome-512x512.png',
];

// При установке — кешируем статику
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

// При активации — чистим старые кеши
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
            );
        })
    );
    self.clients.claim();
});

// Стратегия: Network First с fallback на кеш
self.addEventListener('fetch', (event) => {
    // Для шрифтов и фонов — Cache First (они редко меняются)
    if (
        event.request.url.includes('fonts.googleapis.com') ||
        event.request.url.includes('fonts.gstatic.com') ||
        event.request.url.includes('assets/images/')
    ) {
        event.respondWith(
            caches.match(event.request).then((cached) => {
                return cached || fetch(event.request).then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE).then((cache) => cache.put(event.request, clone));
                    return response;
                });
            })
        );
        return;
    }

    // Для всего остального — Network First
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((cached) => {
                    // Если упала сеть и это навигация — отдаём корень (SPA-like)
                    if (!cached && event.request.mode === 'navigate') {
                        return caches.match('/');
                    }
                    return cached;
                });
            })
    );
});
