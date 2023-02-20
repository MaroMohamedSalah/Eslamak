const cacheName = "tasbeeh-v25";
assist = [
	"./",
	"./index.html",
	"./audio",
	"./css/all.min.css",
	"./css/normalize.css",
	"./css/style.css",
	"./img/nwdn_file_temp_1605338466849 copy.jpg",
	"./img/📿.svg",
	"./script.js",
	"./webfonts",
	"./manifest.json",
	"./sw.js",
];

// add assist in the caches
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => cache.addAll(assist))
			.catch((err) => console.log(err))
	);
});

// Activate sw
self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cacheName !== cache && cache.startsWith("tasbeeh")) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// Responding with only cached resources
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
