export async function handleRequest(request: Request): Promise<Response> {
  console.log(`${JSON.stringify(request, null, 2)} <== request`)

  console.log(`${request.url} <== request.url`)
  let link = request.url.split('=')

  console.log(`${link[1]} <== link22`)

  return new Response(JSON.stringify({ OK: 'OK' }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  })
}
