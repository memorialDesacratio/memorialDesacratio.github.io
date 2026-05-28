// FINAL — DO NOT MODIFY
// This service worker is intentionally empty to prevent update dialogs.
// It activates immediately, claims the page, and never intercepts requests.
// Never change this file, or the browser will show the
// "Подтвердите действие" confirmation dialog again.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  await self.clients.claim();
})()));
