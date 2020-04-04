interface FeedItem {
  title: string;
}

let Parser = require('rss-parser');

let parser = new Parser({
  headers: {
    'User-Agent': 'simple-worker',
    'content-type': 'text/html; charset=UTF-8',
  },
});

async function getFeedFromLink(feedLink: string) {
  console.log(`${feedLink} <== link in fn`);
  let feed: any;
  try {
    feed = await parser.parseURL(
      'http://feeds.bbci.co.uk/news/technology/rss.xml',
    );
    console.log(`${JSON.stringify(feed, null, 2)} <== feed`);
  } catch (err) {
    console.log(`${err} <== err`);
    return [];
  }

  return [];
}
export async function handleRequest(request: Request): Promise<Response> {
  let requestArray: string[] = request.url.split('=');
  if (requestArray.length !== 2) {
    return new Response(JSON.stringify({ status: 'ERROR' }), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
    });
  }

  let link: string = requestArray[1];

  let feedItems = await getFeedFromLink(link);
  return new Response(JSON.stringify({ status: 'OK', data: feedItems }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  });
}
