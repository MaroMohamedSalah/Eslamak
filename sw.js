importScripts("https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js");
const cacheName = "tasbeeh-v46";
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
self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
	OneSignal.init({
		appId: "3e518465-85ed-45d0-ad16-f293f0d6d02c",
		safari_web_id: "web.onesignal.auto.2ce6e088-bd06-4a6b-8c58-d83c247eb259",
		notifyButton: {
			enable: true,
		},
	});
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

// Add an event listener for notification actions
// chatGPT
self.addEventListener("notificationclick", function (event) {
	if (event.action === "yes" || event.action === "") {
		// Open the app's site in a new window
		event.waitUntil(clients.openWindow("./index.html"));
	} else if (event.action === "no") {
		console.log("User clicked the 'ليس الان' button.");
	}
	event.notification.close();
});
