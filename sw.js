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
  const url = new URL(evento.request.url);
  // Não deixe a API do ranking ser armazenada pelo cache do PWA.
  // A configuração do ranking usa network-first para refletir mudanças sem
  // exigir uma nova versão do aplicativo instalado.
  if (url.origin === self.location.origin && url.pathname.endsWith("/ranking-config.js")) {
    evento.respondWith(
      fetch(evento.request, { cache: "no-store" }).then(rede => {
        const copia = rede.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(evento.request, copia));
        return rede;
      }).catch(() => caches.match(evento.request))
    );
    return;
  }
  // Requisições externas, como o Supabase, seguem diretamente para a rede.
  if (url.origin !== self.location.origin) return;
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
