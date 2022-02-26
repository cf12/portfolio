# Spotify worker quickstart

Scopes:
- user-top-read
- user-read-currently-playing

1. Authorize application
```sh
https://accounts.spotify.com/en/authorize?client_id=<client_id>&response_type=code&redirect_uri=<redirect_uri>&scope=user-top-read,user-read-currently-playing
```

2. Exchange code for tokens
```sh
curl -X POST "https://accounts.spotify.com/api/token" \ 
  -d "grant_type=authorization_code&code=<code>&redirect_uri=<redirect_uri>" \
  -H "Authorization: Basic b64(<client_id>:<client_secret>)" \
  -H "Content-Type: application/x-www-form-urlencoded"
```