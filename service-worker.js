importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.css",
    "revision": "1be606eb584bda2d05471866eef31c0a"
  },
  {
    "url": "app.js",
    "revision": "7614cff73166df7e21346d604513721d"
  },
  {
    "url": "assets/u4bi.png",
    "revision": "87066bfe66a756b143149dc1a28cacbc"
  },
  {
    "url": "index.html",
    "revision": "76b8e9cd33f6cd3e495f5508948cc0e5"
  },
  {
    "url": "polyfills.js",
    "revision": "5f2f7853cf94e3fc994bfc53074bc7ae"
  },
  {
    "url": "vendor.js",
    "revision": "89cbea5a5f7e43a0b58b8e1c0fcb89f8"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
