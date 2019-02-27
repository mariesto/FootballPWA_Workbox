importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/competition.html', revision: '1' },
    { url: '/team.html', revision: '1' },
    { url: '/fav-team.html', revision: '1' },
    { url: '/pages/home.html', revision: '1' },
    { url: '/pages/about.html', revision: '1' },
    { url: '/pages/contact.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/nav.js', revision: '1' },
    { url: '/js/api.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
]);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

self.addEventListener('push', function (event) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: '/icon.png',
        vibrate: [100, 50, 100],
        data: {
            dataOfArrival : Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});