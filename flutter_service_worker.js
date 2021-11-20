'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e75130274abb3aff91cfe2287bb3b444",
"index.html": "5e50f4eb9c2ad09c70f2e2422f9cc889",
"/": "5e50f4eb9c2ad09c70f2e2422f9cc889",
"CNAME": "0212e35ab894d0e87a3ddb85821080a8",
"main.dart.js": "575836520fefff5b23201d4678350bab",
"README.md": "e115755d1c80a83447f834a5f8696d0d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2fbcae47bc47ceb648f57463ec7ada3c",
".git/config": "c59e8a725f9ddf9b939f6578525d7898",
".git/objects/0d/d038ed686c06866966f74f289516b20e399677": "a34f2632b09ef9b3392758ec52b329ee",
".git/objects/0c/e87fa41fd56a7c2ccdce1db37a60d985bbe7d2": "c7971860e58c9ab46a4a736c438008a8",
".git/objects/50/ab64409e867679dedd4a5e1575feb8b12b8d72": "46667d670cba061dfe8615e6505fe4b4",
".git/objects/68/c0d48557299f753bc9d1c66ecc1e9d1a2a375e": "d46d23bcd62311895e85b5f806a62b05",
".git/objects/03/852da03ad883a0365503ddcc6ec9f8bd6ba741": "1d0a4d44961697062700e54b71ac95f5",
".git/objects/32/be16f1f3592e91d37f24a9e8adbb53ce7c5854": "334bd8376d5bfd7e00ccfe48ae9c9174",
".git/objects/32/61f5837e43f1390f103efea402823e3743b981": "ab09308d8f0956bbfb5aa3504cae6909",
".git/objects/69/180209d7ae63568780c652b72be7aa05f541e3": "0b8795b489c69b3a9498aae358d2bbab",
".git/objects/67/9f3a62ea1434632fb7ffd034fb5c8138e2d802": "597b9c3c69fce291ff1be8017c550b52",
".git/objects/60/a883a646ca9458999fcda1b8fa9d95d14d27f4": "d9597f71688f9209750ebbd9f264ba1d",
".git/objects/5f/ff5a7cdd8cac7f823b11567bf9b99a66f00624": "505901afebeb5f98ff3ecd9c9c10d816",
".git/objects/9c/bd7ff041ee91c9f2c62c552b1f2eb009e13f84": "fc8e4337ec0a1c7ed87cb1c1d3d88972",
".git/objects/a3/569138ae933bf83b4f59d3ebc861b8ab412940": "9d64a907bfd5d8898f92b48df006b2dc",
".git/objects/a3/0b1bd8faf4e3b44eb4b542c1935c9e7cd6404d": "e1ec5d2c6589f6f8549c3f07e0e7a579",
".git/objects/d0/9fc52bb5b565c8c3b3641ac82106f6019739f2": "11012b5d201d4199ba209811c21182d9",
".git/objects/d8/d0c6f92c46525c7fb8df0d078e39471ea24023": "98d98bf752212c9fb4844738ba44cac5",
".git/objects/d8/f1201a75795d70043d928f50c46b076ad83064": "96e7d6b12879fbc6c8b8c64a74df306a",
".git/objects/f4/787c660d24f4a88552251bf9da7d7890e67747": "b126402f2c6cb1e75649c128095af0c9",
".git/objects/f3/4f3cf75384f3be2f23daaa9df14b6dd46f3f56": "c018ef53786b4df8f975ef645718e5b9",
".git/objects/eb/885485ddca6a38e023d8632cad9854ff2fb6ab": "6a990b9102a0e7d3463d5c55ceaf22d5",
".git/objects/c7/260c68bb1e0d84a65fdbf3dc55180c11afb18d": "485c6c601357bf18a595164c3ac7ebed",
".git/objects/c0/00ece78cd096767c6283ae6ccd1cc906e19244": "d2d19c513845fa967f8f91f0e1068e4c",
".git/objects/c0/860179d2ad2a6f8dd15ed831fdfcb376381611": "aeba8bf5407e7187eb375638dd1e79b3",
".git/objects/ee/114ee4f7725068c07feede64300c395208f77a": "53f7942380c416e998b13989d6f858f8",
".git/objects/c9/445fb63321e71ff5bfd9294ab3e2c562faa0e2": "3d2ce8d5f8b9041cffa8ff19cd7f2e6c",
".git/objects/e3/bffe2dfbf58bad5930e9ae967ee8b90f295e52": "88db795cf9ea544d2b1309957eafe67d",
".git/objects/fb/559f2c79679d5eb4e55fd9b6de9f80c363b619": "e64fc0cc1615d68aba5ae14127e38405",
".git/objects/4e/0648904898c774855a0fb7174766c13e5c8740": "61495e00af28059459cecd98a20cba98",
".git/objects/18/2aee8ecd0ed836f6407de97840ad0c9ae47cb4": "331bf305c71f5ea59e5bb6bf030ced9e",
".git/objects/4b/4e9c9968edeb0a82cffbf8c0675985a0260f7f": "c109753f9a77e82915e93d6b784cac6c",
".git/objects/pack/pack-5545e9b29822a347154f0e7a47e0701044460ebd.pack": "221ef9f53e5c5a4b12f417550ef50fee",
".git/objects/pack/pack-5545e9b29822a347154f0e7a47e0701044460ebd.idx": "d76b5361009ec7adeba6bde517b72734",
".git/objects/42/41b1c5a18c9ce3008d8f5edbaf3659975c1cf6": "9861abb387f1af6f6888dbe859f5311d",
".git/objects/42/76dce20a22b02227899c76881cd656749fcae1": "3afaa17612a9fe3afe157e174877bb4e",
".git/objects/1a/1516814f11f2d707fd95f3f2ad040a570e0c29": "7ce4b443641954b396fe77dc4c579a12",
".git/objects/7e/0a9ff7c39227b12f3fd22b36b0944dee1f3695": "f094c91a1160c40d66b59cc0047a0bec",
".git/objects/10/afabbdfb1aadcb0b8fcd92019c08ff84502d21": "67e747d3f1448d542424df68d577b7e6",
".git/objects/4c/25340469fdbe3b0d51ee4b3bb5670106c92b52": "ff93c3124d171b4cf8498f19a81bed6c",
".git/objects/21/a3de1ee993f66f513e59fb179c078d57c72381": "926abc0c350f29c14d34a428a0867dfe",
".git/objects/81/22de45876324cf62de7f1bf6b909b1a3b9239f": "8fcbb3dea1fa9c02c981816a8656508d",
".git/objects/72/41ccdc192694e050cecab02a65ef4e9444edf1": "0a47247aef8d2678711ab657284eaf2c",
".git/objects/43/b50b0dbda0e2c4d804e4ee1d2b02db46d541eb": "14f4139decb17041795b0065bbe5737f",
".git/objects/00/0ee15c0e991987f6df6106abaa1b31fe9ad493": "92b75731ed3490708f2220fc3c010c28",
".git/objects/09/a752624f58a411a719c55e5201375e0baa0c32": "fc364be04daa224ca3ebb408ed330062",
".git/objects/09/5e2e925aa7178c21b900c97d660c0f0168c06b": "76208d7026bb08630a6bc3f2168d4623",
".git/objects/91/b8fb9dfd2de093351c5a85de33940b8426c5ce": "d0ca74fc7f1e5afe566f3507ea0881dd",
".git/objects/62/f4df97fcb3092c4579838c7a1710889e2a4a95": "8d1851450f9814ee87473396ab2e1e3b",
".git/objects/98/1af8aeb5952b8fac32d842eb8af457bd8bc312": "b7d811c16818df5555c6f29d3b0e0e6e",
".git/objects/5b/95973c67358088515b9b5d5199bb2ab4f9adbf": "61e7a27ae5628f0ab3d10d8d9e40a8a8",
".git/objects/5b/a0542047969216cad4b72d3d000a10e0fee3a9": "30a961f75b0a9169c06760d8f565cbb0",
".git/objects/5b/0f7c637d5f72a5bad712a583c9be86675766c2": "d162fa392ac26e2fdb2ad9bcffb2d866",
".git/objects/6d/eeafafb2e446a0858790b28c7008a4d392a7d5": "0fd96cd0ee650b9afa5b47460b3a535b",
".git/objects/6d/4a296b4fac4836100f7307627e336ac2d93136": "7c824949f081f9e8dce3c2fcdf428e9a",
".git/objects/01/6ae8ec0755c081c3d667053ee85ca41bdd82dd": "f8a718a9fde0f334bf37a5af49d64515",
".git/objects/6c/f13997c1bdfb02f7efef82b25271015f723765": "1603ec292214be74ced6c30625672f4f",
".git/objects/6c/54a08ec40bc7047c2be7de0e9249ef24ce4c91": "67a38180eafcbaa8c66d9782a5fee2b5",
".git/objects/0a/1937bb1f450148486fbec671649c551905eefc": "4557645ffdf00b09ff10cc25f6ade61b",
".git/objects/a7/f04b0f3b14f39de6bfa9ec607af102bb3e4377": "52ade054b71831d6cef1b6ea602c31fd",
".git/objects/dd/39203eae786fccb5fb8563c0798109a3fb48fd": "14b2da41c4e15001026d1a29d680fb06",
".git/objects/b6/f3e703cfeeba76475074db2c8a80439f48f49a": "e78bcbc43eca10cd61d67dd2c1c02dba",
".git/objects/d5/613ea038de7c5e59feb623c7dd30213a400f64": "f1146e7d4d674287f01da19fa535aae7",
".git/objects/d2/eb8d3549d6d419c345950efc62e9e28d17a20f": "e5919a8fa48c4f9556a3b360308dfbba",
".git/objects/d2/a5e6086ab0b11eb5eab90aac464cd5af2cbdbc": "97ab1353f1137ea925bfa8a25a94004a",
".git/objects/aa/956be579d896975afa47d358a72d0b4a7301f7": "b9c044f2ba4dd570301efd7899695659",
".git/objects/ef/1a46d828c7eb9f3a6d9d355a0071778cbcfef7": "49999f4fc7d05407a794cbd554eaf30c",
".git/objects/c3/1af5a0cab5242ba5e7454604a0a39330ea8e15": "078d36a61998ce62e268edac63bf6c78",
".git/objects/c4/6b017b0235474d3e4ea21fdf6c32c7483c8ff2": "5d74ea481c2e67654fe168ebe2cfd794",
".git/objects/ea/1c4899be78bde87f0c88e69d8d8da73391856c": "607ca8a32640eac69b324a8e6c69d563",
".git/objects/ea/46b3e174299718ec5fbb9031195fff008a5cfe": "a8de1b196319804aaa934f614e45f2e1",
".git/objects/cc/edbae5a7d688a69c18a2bc3b406edb24680b63": "2f8a39c8aaaa982586ec30f69d929206",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/46/45de19c76d1af880ebd58a46964c0b045b957d": "65c905cd9966ff3295bb1c9c04004d9a",
".git/objects/2c/e6266581265d7142306e7f00d4670b15be88d7": "e38da8a69f51daeaa9dd78dcaf0c3df8",
".git/objects/84/bf6a593c895db6c1b76f9b20a7d97326687b5a": "81cc48008ba1366780657e30a9e4523a",
".git/objects/84/6e8e3110fe6090156eb47463daee91b4a6b780": "107de0a127c02c5936767560d881dd63",
".git/objects/4f/87aa7ec82d38251c263081b2f6d187e3b1c5d9": "782e0aa9e5accc4cb22f96591a3dd4e4",
".git/objects/8d/ac8a47ee8e75aa72c985b46486b6a15b914590": "8d2f0cda8096b9711d9ac9f16b286d12",
".git/objects/8d/4783bf6a978f9e6be1beafb556a0bf81851255": "38e8c96df1696290d283b1ba45512812",
".git/objects/8c/d08b338532f6cb99c432c18696249be3de9816": "07a753b1a138aca39c1642b2360f7685",
".git/objects/40/bfa8d4d3f8969853d277929dba140c0d5725db": "e1e135a2f57331ba3ed880ae0b0f8694",
".git/objects/40/f2094f71306b3d50954a13b9e73b4bec47e6b3": "9d2715e13d5fad2e1d5487bd9be6c0da",
".git/objects/2b/81aae13eac4331e21510e50aa8f1e27aac5207": "91505d0df25d1403c39e31ad94b101b2",
".git/objects/47/3975ca5b61ab4b4dc8c308ba3004115e08d631": "7ad3dc5d5df19fa68a45933267af8ab2",
".git/objects/14/72153919d7dcc91cd462d4f484111b05acaf4a": "81d3ea7167ec23ed3a65d16103b64eb1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65a25c03123464f8f81fe548a16a09da",
".git/logs/refs/heads/main": "65a25c03123464f8f81fe548a16a09da",
".git/logs/refs/remotes/origin/HEAD": "516d3d6b91c2f2630f72833a56bd2f5d",
".git/logs/refs/remotes/origin/main": "53f6400e450d5bf67cfb36191f0187f2",
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
".git/refs/heads/main": "a8ea031829aa9a325af673563ccff524",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a8ea031829aa9a325af673563ccff524",
".git/index": "aa259cd80e91d2914f4952ae9ed883d8",
".git/packed-refs": "dd38a2404bcabd8291d96a3213210c22",
".git/COMMIT_EDITMSG": "1a63013dcfd5720bce3fb74e4a2bfd98",
".git/FETCH_HEAD": "8b72a17b184c78a3073833aa225d2148",
"assets/AssetManifest.json": "b5e2ca8d35d142349f8e65bae055b036",
"assets/NOTICES": "254d450480967ac4bb4ab9ad801d3440",
"assets/FontManifest.json": "3ca64090b9da4a7c0a3988ea3cda93fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
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
