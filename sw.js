// Minimal service worker: lets browsers offer "Install app / Add to Home Screen". It caches nothing,
// so the entry page always looks up the portal's current address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* network only */ });
