importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin('todoQueue', {
  maxRetentionTime: 24 * 60,
})

workbox.routing.registerRoute(
  /\.(?:js|css|html|webm|webp)$/,
  workbox.strategies.networkFirst(),
)

workbox.routing.registerRoute(
  'https://efuktshirts.com/products.json',
  workbox.strategies.networkFirst(),
  'GET',
)
