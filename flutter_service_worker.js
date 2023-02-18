'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6b0627d773173fab2fe51528d2957fed",
"assets/assets/images/add.webp": "08d46308737d363be84ce4a396526c7b",
"assets/assets/images/aditya.jpg": "160aea4618faac95951a17c6309879da",
"assets/assets/images/Clubbg.png": "480743a74cc002282fa4a9d16dbea4b6",
"assets/assets/images/code.webp": "e2ae079fe0fb6ea948f9486b02ecc866",
"assets/assets/images/coding.webp": "11371e58c1b829a56ecbb5cb5fed66a7",
"assets/assets/images/kunal.jpeg": "c50112561f26c944f3f4fba6ce3ed8fc",
"assets/assets/images/laksh.jpeg": "dfcd0198ac4152e6afa60197c989834e",
"assets/assets/images/manish.jpeg": "99f1662fdd08714a48d245164552465d",
"assets/assets/images/palak.jpeg": "80af0e76a4f3e3941cd592e2727b4f5a",
"assets/assets/images/signin.png": "377ffe6fc3db95c05b9eecd5df748edd",
"assets/assets/images/signup.webp": "844a0f68bc882ad2ab83d8f92c670e3e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "829aba6b98257fd39d5aae9c623e73e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"Club/.git/AUTO_MERGE": "99d7b30be716a62e4385549df44a75cc",
"Club/.git/config": "b034093c90fa07c0b20c238b09fb7bc7",
"Club/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Club/.git/FETCH_HEAD": "868879f59cd0d00946316d101bbc19ae",
"Club/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Club/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Club/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Club/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"Club/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Club/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Club/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Club/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Club/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Club/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Club/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Club/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Club/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Club/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Club/.git/index": "6a3d4059ad7ef288056a2d053b0d41e0",
"Club/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Club/.git/logs/HEAD": "607a19be85dc07f83e4a09c9d02d4c6c",
"Club/.git/logs/refs/heads/main": "607a19be85dc07f83e4a09c9d02d4c6c",
"Club/.git/logs/refs/remotes/origin/HEAD": "019b8bda693445cd0795b3841c38aa0c",
"Club/.git/logs/refs/remotes/origin/main": "5c08c4673d8aafec48752a06369f6877",
"Club/.git/objects/3a/b241405f6ab46b496c1f0e59f5b6652f080e7d": "6d3ce5360fc309e1953e5e294a70e9b0",
"Club/.git/objects/5c/5a4a538679994f581a91467c3c3672512db572": "ddba1d52c12df91d5ae7cdb48fc3f648",
"Club/.git/objects/5f/0a486cce9475ad8c6ae5e2dc561742ced0d961": "e5b99bcd07f0668281018a7a01cc6e61",
"Club/.git/objects/d7/4c5d0bd8747731d11b4719928a5976477bbd2e": "0a0d3bbe0583d4b472c2c188b6d7cab4",
"Club/.git/objects/pack/pack-3c894b6b0c6d30c47d2337742b8d735e8e0a27fb.idx": "5a62c03bcfbb97830b4ba7d179286519",
"Club/.git/objects/pack/pack-3c894b6b0c6d30c47d2337742b8d735e8e0a27fb.pack": "8132ce140fecc542415d00f63525e6c6",
"Club/.git/packed-refs": "3fd50083d490de310cea4e95fe7d9924",
"Club/.git/refs/heads/main": "3db64eb92d8272d8ae3ce80f83db81a2",
"Club/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Club/.git/refs/remotes/origin/main": "79858cb93931a64842d0651e388e798e",
"Club/assets/AssetManifest.json": "6b0627d773173fab2fe51528d2957fed",
"Club/assets/assets/images/add.webp": "08d46308737d363be84ce4a396526c7b",
"Club/assets/assets/images/aditya.jpg": "160aea4618faac95951a17c6309879da",
"Club/assets/assets/images/Clubbg.png": "480743a74cc002282fa4a9d16dbea4b6",
"Club/assets/assets/images/code.webp": "e2ae079fe0fb6ea948f9486b02ecc866",
"Club/assets/assets/images/coding.webp": "11371e58c1b829a56ecbb5cb5fed66a7",
"Club/assets/assets/images/kunal.jpeg": "c50112561f26c944f3f4fba6ce3ed8fc",
"Club/assets/assets/images/laksh.jpeg": "dfcd0198ac4152e6afa60197c989834e",
"Club/assets/assets/images/manish.jpeg": "99f1662fdd08714a48d245164552465d",
"Club/assets/assets/images/palak.jpeg": "80af0e76a4f3e3941cd592e2727b4f5a",
"Club/assets/assets/images/signin.png": "377ffe6fc3db95c05b9eecd5df748edd",
"Club/assets/assets/images/signup.webp": "844a0f68bc882ad2ab83d8f92c670e3e",
"Club/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"Club/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"Club/assets/NOTICES": "803f0317135284041c0ab7be6dc4e6cc",
"Club/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"Club/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"Club/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"Club/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"Club/assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"Club/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"Club/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"Club/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"Club/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"Club/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Club/flutter.js": "db931120412af26cc1511fa058afaf0a",
"Club/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Club/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Club/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Club/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Club/index.html": "ecc6972a932976a721a7cdd09367702a",
"/": "a55ac6974cc55a7ce01a4eb57036251a",
"Club/main.dart.js": "c1265981f681f6d46db88d2dc72e1a6a",
"Club/manifest.json": "31000a8352714429713149664334c2cc",
"Club/version.json": "ce60454c925ea6bb2489e9a7adc00d17",
"CLUBxHOUSE/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"CLUBxHOUSE/.git/config": "cfeb40628bda09dc90f7d99c66c6c499",
"CLUBxHOUSE/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"CLUBxHOUSE/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"CLUBxHOUSE/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"CLUBxHOUSE/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"CLUBxHOUSE/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"CLUBxHOUSE/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"CLUBxHOUSE/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"CLUBxHOUSE/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"CLUBxHOUSE/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"CLUBxHOUSE/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"CLUBxHOUSE/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"CLUBxHOUSE/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"CLUBxHOUSE/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"CLUBxHOUSE/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"CLUBxHOUSE/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"CLUBxHOUSE/.git/index": "2a6a3b9e61225f4a97eca8ad16111ccf",
"CLUBxHOUSE/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"CLUBxHOUSE/.git/logs/HEAD": "500b9bdfdbf52e0793520dcc41379bf9",
"CLUBxHOUSE/.git/logs/refs/heads/main": "500b9bdfdbf52e0793520dcc41379bf9",
"CLUBxHOUSE/.git/objects/65/35cb489e5c79b202574fdf7b1c621a98272718": "37054cb4208e706d21380ad2872c7deb",
"CLUBxHOUSE/.git/objects/86/fcd8b02685d18800d75a52f1aac3bf0f2e3581": "6666c5a91a3401a34e1666ea6a025755",
"CLUBxHOUSE/.git/objects/d5/63575ea28719f571f0d7c464a11260eb8069af": "6cd45f8cee2823449561e9f8bc3e41e3",
"CLUBxHOUSE/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"CLUBxHOUSE/.git/refs/heads/main": "b41e6839d80cb4c690431650ad01f5a6",
"CLUBxHOUSE/README.md": "81fc60d7a4a23cff5353db99329b7f89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a55ac6974cc55a7ce01a4eb57036251a",
"main.dart.js": "22ec4f788d97153097fba480131ccce9",
"manifest.json": "31000a8352714429713149664334c2cc",
"version.json": "ce60454c925ea6bb2489e9a7adc00d17"
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
