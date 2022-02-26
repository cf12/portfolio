addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`
    })
      .then(res => res.json())
      .then(async data => {
        const res = (await (await fetch('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            'Authorization': `Bearer ${data.access_token}`
          }
        })).text())

        return new Response(res, {
          headers: { 'content-type': 'text/plain' },
        })
      })
}
