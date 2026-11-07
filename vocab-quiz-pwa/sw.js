// 離線快取：第一次連網開啟時會把全部檔案存到手機裡，之後沒有網路也能使用。
// 更新題庫或程式後，把下面的版本號加 1（例如 v2），手機下次連網開啟就會重新下載。
const CACHE = "vocab-quiz-v8";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/apple-touch-icon.png",
 "data/_template.js",
 "data/gsat-vocab.js",
 "data/index.js",
 "data/junior.js",
 "data/junior1200.js",
 "data/law-vocab.js",
 "data/mcq-cap.js",
 "data/mcq-gsat.js",
 "data/mcq-junior.js",
 "data/mcq-national-exam.js",
 "data/mcq-senior.js",
 "data/mcq-toeic.js",
 "data/national-exam-vocab.js",
 "data/phrases-dixson.js",
 "data/senior.js",
 "data/similar.js",
 "data/toeic-review.js",
 "data/toeic.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// 先用手機裡的快取（所以離線也能開），同時在背景更新；忽略網址後面的 ?v=時間戳記
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const key = new Request(url.origin + url.pathname);
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key);
    const net = fetch(req).then(r => { if (r && r.ok) c.put(key, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    if (r) return r;
    if (req.mode === "navigate") { const home = await c.match(new Request(url.origin + url.pathname.replace(/[^/]*$/, "index.html"))); if (home) return home; }
    return new Response("", { status: 504 });
  }));
});
