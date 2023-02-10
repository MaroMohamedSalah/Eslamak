const cacheName = "tasbeeh-v0";
asserts = [
	"/",
	"/css/all.min.css",
	"/css/normalize.css",
	"/css/style.css",
	"/css/style2.css",
	"/pages/tasbeeh.html",
	"/index.html",
	"/script.js",
	"/sw.js",
	"/audio",
	"/img/mosque-solid.svg",
	"/img/nwdn_file_temp_1605338466849 copy.jpg",
	"/img/WhatsApp Image 2022-03-21 at 7.18.56 PM copy.jpg",
	"/img/⌛.svg",
	"/img/✔️.svg",
	"/img/❤.svg",
	"/img/👳.svg",
	"/img/💧.svg",
	"/img/📿.svg",
];

// Install sw
const addResourcesToCache = async (resources) => {
	const cache = await caches.open(cacheName);
	await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
	event.waitUntil(addResourcesToCache(assets));
});

// Activate sw
self.addEventListener("activate", (activateEvent) => {
	// Delete all old caches
	caches.keys().then((keys) => {
		return Promise.all(
			keys.filter((key) => key != cacheName).map((key) => caches.delete(key))
		);
	});
});

// fetch sw
self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return (
				res ||
				fetch(fetchEvent.request).then((fetchRes) => {
					if (!(fetchEvent.request.url.indexOf("http") === 0)) return;
					return caches.open(cacheName).then((cache) => {
						cache.put(fetchEvent.request, fetchRes.clone());
						return fetchRes;
					});
				})
			);
		})
	);
});
