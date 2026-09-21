const CACHE_NAME="austria-londres-pwa-v1.0.1";
const SHELL=["./","./index.html","./trip-data.js","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL)))});
self.addEventListener("activate",e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener("message",e=>{if(e.data&&e.data.type==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);if(r.method!=="GET")return;if(u.origin!==location.origin)return;
 if(r.mode==="navigate"){e.respondWith(fetch(r).then(resp=>{const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put("./index.html",copy));return resp}).catch(()=>caches.match("./index.html")));return;}
 if(u.pathname.endsWith("trip-data.js")){e.respondWith(fetch(r,{cache:"no-store"}).then(resp=>{const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));return resp}).catch(()=>caches.match(r)));return;}
 e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(resp=>{const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));return resp})));
});
