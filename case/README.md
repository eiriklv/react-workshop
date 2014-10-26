# Først

Gå til https://apps.twitter.com

Trykk "Create new app". Random navn + beskrivelse og "http://example.org" som url.

Gå til "Keys and Access Tokens". Lag "twitter.json" på rot på dette formatet:

```
{
    "consumer_key": "your key",
    "consumer_secret": "your secret",
    "access_token": "your access token",
    "access_token_secret": "your access token secret"
}
```

# Utvikling

Start med

```
npm install
npm install -g gulp

gulp watch
```

Så i en annen terminal:

```
node app.js
```

Gå til http://localhost:9999/

