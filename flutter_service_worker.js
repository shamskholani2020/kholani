'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e75130274abb3aff91cfe2287bb3b444",
"index.html": "701896bd493917c1eb9b0437c51edcf8",
"/": "701896bd493917c1eb9b0437c51edcf8",
"CNAME": "0212e35ab894d0e87a3ddb85821080a8",
"main.dart.js": "4ca20b1481584273e6b8cbccee99d587",
"README.md": "e115755d1c80a83447f834a5f8696d0d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2fbcae47bc47ceb648f57463ec7ada3c",
".git/config": "c59e8a725f9ddf9b939f6578525d7898",
".git/objects/0d/d038ed686c06866966f74f289516b20e399677": "a34f2632b09ef9b3392758ec52b329ee",
".git/objects/50/ab64409e867679dedd4a5e1575feb8b12b8d72": "46667d670cba061dfe8615e6505fe4b4",
".git/objects/68/c0d48557299f753bc9d1c66ecc1e9d1a2a375e": "d46d23bcd62311895e85b5f806a62b05",
".git/objects/03/852da03ad883a0365503ddcc6ec9f8bd6ba741": "1d0a4d44961697062700e54b71ac95f5",
".git/objects/5f/ff5a7cdd8cac7f823b11567bf9b99a66f00624": "505901afebeb5f98ff3ecd9c9c10d816",
".git/objects/9c/bd7ff041ee91c9f2c62c552b1f2eb009e13f84": "fc8e4337ec0a1c7ed87cb1c1d3d88972",
".git/objects/d0/9fc52bb5b565c8c3b3641ac82106f6019739f2": "11012b5d201d4199ba209811c21182d9",
".git/objects/pack/pack-5545e9b29822a347154f0e7a47e0701044460ebd.pack": "221ef9f53e5c5a4b12f417550ef50fee",
".git/objects/pack/pack-5545e9b29822a347154f0e7a47e0701044460ebd.idx": "d76b5361009ec7adeba6bde517b72734",
".git/objects/42/76dce20a22b02227899c76881cd656749fcae1": "3afaa17612a9fe3afe157e174877bb4e",
".git/objects/7e/0a9ff7c39227b12f3fd22b36b0944dee1f3695": "f094c91a1160c40d66b59cc0047a0bec",
".git/objects/72/41ccdc192694e050cecab02a65ef4e9444edf1": "0a47247aef8d2678711ab657284eaf2c",
".git/objects/5b/0f7c637d5f72a5bad712a583c9be86675766c2": "d162fa392ac26e2fdb2ad9bcffb2d866",
".git/objects/01/6ae8ec0755c081c3d667053ee85ca41bdd82dd": "f8a718a9fde0f334bf37a5af49d64515",
".git/objects/d2/eb8d3549d6d419c345950efc62e9e28d17a20f": "e5919a8fa48c4f9556a3b360308dfbba",
".git/objects/d2/a5e6086ab0b11eb5eab90aac464cd5af2cbdbc": "97ab1353f1137ea925bfa8a25a94004a",
".git/objects/4f/87aa7ec82d38251c263081b2f6d187e3b1c5d9": "782e0aa9e5accc4cb22f96591a3dd4e4",
".git/objects/8c/d08b338532f6cb99c432c18696249be3de9816": "07a753b1a138aca39c1642b2360f7685",
".git/objects/2b/81aae13eac4331e21510e50aa8f1e27aac5207": "91505d0df25d1403c39e31ad94b101b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d449dec7a3efba4bbcd71e8541f3661",
".git/logs/refs/heads/main": "1d449dec7a3efba4bbcd71e8541f3661",
".git/logs/refs/remotes/origin/HEAD": "516d3d6b91c2f2630f72833a56bd2f5d",
".git/logs/refs/remotes/origin/main": "16af16139387671c021de8d04110ceb9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dd48a5705de07278cd95553da9a278f4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dd48a5705de07278cd95553da9a278f4",
".git/index": "f8c4eff27566c28ccdacc82f30d13919",
".git/packed-refs": "dd38a2404bcabd8291d96a3213210c22",
".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/FETCH_HEAD": "04e19c637c54c222145d0c90f0c5a46e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "5e611b0908de1289b708ad7268fc8a30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
