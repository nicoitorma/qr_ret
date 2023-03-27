'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f6b16fece3f67527071eaba07f69a51b",
"index.html": "f8c65fe0500ceefd4d204c1d3744643a",
"/": "f8c65fe0500ceefd4d204c1d3744643a",
"main.dart.js": "691c2f3577604aab90c1d0a21ea612e6",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "4a9751cac9e479ce2ec969c80d1eab72",
"icons/Icon-192.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-maskable-192.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-maskable-512.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-512.png": "086cebc3474cdf9a74216e30d93dff9c",
"manifest.json": "428c007a6a51879640332e45ff6c4e4b",
".git/config": "23bb1c4c9c583421c687fbdacb0645a1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/77f41634892ce47b0027ac12cc4e6e4ee02073": "d70ac68a0f87b86594b24348cd9d0bb8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/05/04f8fc894af4eb4767852f0b7ba8f08d898658": "bd46c2920128ecf428ba088b18beca79",
".git/objects/a3/48b2bbfdcf655110e56e40e3ffa750abd2b453": "00bfbb7bbc33effb8a709b15624be8a6",
".git/objects/ac/d94130bd1f6e36c671409d26e1789eb7051d73": "b4568c653f83dce7c21bac48dced2927",
".git/objects/ac/7c207e0171ca0f6bf3de136cdc73f78a3547d9": "e39a543f31244b96fa95c9bb0feb4c8f",
".git/objects/ac/39f734debc1205b70da8fcb148c59cfc50383d": "844d7dfd6094e23b1a54e8621d55d337",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7037820826f56f03f1b55a65422fa3c543cf5e": "55c9a8bd9beaa8f8e6c18152b0204dcd",
".git/objects/eb/20d4e4973af35447c761c32089171876f5a496": "a19b87f7b50e82b36dc6b75cd11666a7",
".git/objects/c0/c8509e0fb83757cae5cc503d2adee526ad4491": "d88b9da857ef072ec4118c727c1a5dfc",
".git/objects/fd/6e5459e9c9738234a5ce5a845045ee9aeed380": "2e2107f810bc797336dcc56db8443f2a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/16/db2613e49234c019bd62557885d5db41e41b3e": "1dc07d9a60c89281e8b8d434714af2f6",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/fa9a240bd7e383744ad0ec1c53b1fc1a8491a4": "ee12efd9165de56ecc2c7e57df1d2838",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1f5397e7d3e142ace737b4c67fe00c4ea6cc42": "e447ebfa95af3a5bbc3dd0ba2a4afc51",
".git/objects/4d/c0edfbc9e72ab89af9cc116f70c15bfc7fc559": "9e5c0308265a2f7f9311d27dcb9d1fb0",
".git/objects/44/4e0debeef353ed3d67c8b3f4cab0fde8947ec3": "ea1d88b6838dfccf8832cb78a9019e6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/30/cd708c62d8e7664b37523f9b9da2b03882bb3a": "02b9c35058085ce88572bae7ce0aa18a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/90/912e9b0fb3812e90dd0ca35ad812af2c95eb52": "096085c59670dfa53cab07f707e28af4",
".git/objects/d3/2b44b9dbeccc555f4513dec6f2a53545ada408": "1b8ef38f8c92f437da7353d32983e3ca",
".git/objects/b8/729f64359a58f3e0628eccb14fcefb1c3c2a1b": "521264e7d6de7ff3e9836bf04ebe28df",
".git/objects/b6/db7500aca90e2ddb261c1ed7bbc6f6f34c02af": "b9326f95a463613a9739dfec249427b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/323290bf5cd677cb7042d7d627ca8122651e4b": "e3e4a40f7b54bf91a3cbebb4d544c718",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/16e55c43652c481daa904af00218c70e713df6": "1e0b1328acb044cd78ff123db7c9023c",
".git/objects/e7/ef6eadbe2b7446718fb634ef84705a1d470e0f": "d5670e16cc04e6262072a87e2910377f",
".git/objects/f8/9c98bd9c1abccd9626aa9e42977471f208eeb7": "2dbad071946baf62e3ddcf5e48c3614e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/caf600d122f7fb8c6d0ed8b3504af665c1858d": "4fae0ee780cabfb9de59046676564d52",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/24/ab5332482555ef290934ee30396dc5569f8479": "b5adbffeaa8e0882ba76f605cae9bb3b",
".git/objects/12/78bedb0b8ef249768399750e387c0bd75c415d": "efd2e05f448f04d76ea07fd26a621ecf",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/47/001c7c454cdf650c9a429f6f44fc2cff1ed35d": "7a578ad4850304838cca105909cb1183",
".git/objects/8b/ec40712a62620478aabaf4377c57dd7b053ecf": "66dab1c61f6356d0fb4ab992df7e7bc5",
".git/objects/22/d11208d067a9965cba72ef02db6ecfbf224a1a": "e92f8a4e2b142e85418a9da4644dfe8a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "227379a6f75cbc081320653e930a60a2",
".git/logs/refs/heads/master": "227379a6f75cbc081320653e930a60a2",
".git/logs/refs/remotes/origin/master": "edb555f1f27112b63b958d468ae43d2c",
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
".git/refs/heads/master": "cdc153ba1ace0beb67916f52fc2bf8d3",
".git/refs/remotes/origin/master": "d964689790f2c355720fd3af52e4c3dd",
".git/index": "aa1cdddd32494658d1cdc5afb9874a36",
".git/COMMIT_EDITMSG": "48a24b70a0b376535542b996af517398",
".git/FETCH_HEAD": "64f6ad6c944f5c094736f4500ad5608f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "7fb053b8f17006dfb2107e6f338aa421",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
