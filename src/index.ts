import { handleRequest } from './handler'

addEventListener('fetch', event => {
  console.log('Got')

  event.respondWith(handleRequest(event.request))
})
