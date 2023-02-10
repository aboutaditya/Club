'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0d3c88fa0c0b58081785a12486cfeda9",
".git/config": "26db839b6a529cd64746e2c33aee9f34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7aae04d29cc2a74d5ecd32be3b2d1fbe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fff4b3c90c5528dc9ae58edf4326494e",
".git/logs/refs/heads/master": "fff4b3c90c5528dc9ae58edf4326494e",
".git/logs/refs/remotes/origin/master": "3b4d3764c233412d9ad8df6c5ae72c21",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/19/cd782fa6fbcb538372f07d455410c3fad71d16": "8bdb9c1acde66ae34fde9f1d576398ec",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/f11afb2bc88131a5a2b0e3f23d1a48dda0c172": "ea4972cd2c027bea1bb8a3213393c56d",
".git/objects/21/ba7e4e25d789dd92711522478a599bbc915976": "2c291dc50331a9091c63c8500fe0dff2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/2f36f64fa67551913caf82518cd9c8e6dfa4ef": "809227ee085a6b925cdec4884cd965cc",
".git/objects/34/361a593d7a680701dbe467df0c5154bf13a0d7": "d20c34a6bd17e106453da404bd4a12eb",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/7cc26776698a283324aa7f7471e3ff1d28797c": "326d0141c0dd80d3af54b65c7e4120d2",
".git/objects/47/1036bec3d32174727dcf1f8c4d284b04950bfa": "d602b98ffdae55d00219f544272c6438",
".git/objects/4d/3da05bfaa3753e45622141f4da60fa58286be7": "701ad6516621c839da440d55dbe0f73c",
".git/objects/4e/e85dc2842127b65bfb28d383060709688aeae3": "c24e7830182f61f48959af106bfe2ad0",
".git/objects/52/889954e31b9544d0340d269ad9768f553ff42c": "ecaf804a35063a38a676dd22b01939b4",
".git/objects/52/92ef4d6d22b57c665bc933d14fc2d67734d10e": "e017eb8ce95a2f26754f723f5d1ad3c4",
".git/objects/5b/7400a1485baca5d2f40bff97fa172d9ad36130": "6903fa00dd6e62c3ce3d4d5a0bccc676",
".git/objects/5c/a181e0181e075f2a26e991c8f6ce3d3e7e21e2": "b84a60477cc40fb2556efd312f79a0f4",
".git/objects/6b/a3096d4c0bf3e0efad3e4c168befe75e72b810": "7100f414bbf758021a81480277bac4a4",
".git/objects/76/757f2da92416de72bd7f78f8b179256168e51e": "e8eafd34ca152b08dfd1193d71ec910f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2f5bc9b0e1cb90e6c6dfd3a8eee8d58247e612": "363a7c670a95725749926536ef05ffdc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/cc13a6966cda9d13062981be3d4067a3327dd3": "47f5c863350a78a443d1ed522b048bc8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/ab/a2c11a7d7895c14b818df348f9be961413f16d": "ae55e8a1b7a4149755cb5535cf99e596",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c3/16202a1ce0fca88aa279a5c8d39256eb3dd01b": "0d38c876952b2d8d35285d0ffbc11fb1",
".git/objects/c6/947c70e7240463cb9ae5eaf398d8af2d3aae77": "3920119a0c0a41310c777b289c14b273",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/48b3ed9e45990b9cb067b136e1937cd0a0bd3c": "c1eb870033dd7d375ad291a5c727144e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cf3ffa3fe6968e3b11fe436b09765cb30331d2": "4c55f1f8d3032be1e71e6a9691228e42",
".git/objects/da/704f393c3baaa6982f7144c9adf3fdade0acd0": "b96360b138a5e50670f454e1e786aa0f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/f65a1149ce59d01c087c543b9ce3d81cbabc0b": "741c23026fc6d4d5edd2010224c900a6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f9/00bfe16565a406f215eba8440f6ce0a31494e9": "4d8812e0506e309168b41e37d0ade99f",
".git/refs/heads/master": "169c7389d7a7f04484f5e1737084646f",
".git/refs/remotes/origin/master": "169c7389d7a7f04484f5e1737084646f",
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
"index.html": "af8160d7b063e12beafc6e0cd137aa00",
"/": "af8160d7b063e12beafc6e0cd137aa00",
"main.dart.js": "ff18885191376d140ed73fbcd1f7b8bf",
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
