const CACHE_NAME = "lexico-pwa-v3";

const ARQUIVOS = [
  "./",
  "./index.html",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.webmanifest",
  "./ranking-config.js"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(nomes => Promise.all(
      nomes
        .filter(nome => nome !== CACHE_NAME)
        .map(nome => caches.delete(nome))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", evento => {
  if (evento.request.method !== "GET") return;
  evento.respondWith(
    caches.match(evento.request).then(resposta =>
      resposta || fetch(evento.request).then(rede => {
        const copia = rede.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(evento.request, copia));
        return rede;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
