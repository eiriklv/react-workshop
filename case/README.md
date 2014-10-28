# Case: Twitterized

Vi skal lage tidenes Twitter-dashboard!




## Oppsett


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

### Utvikling

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

## Oppgaver

### Oppgave 1: En Tweet-komponent

Lage en komponent som tar inn en tweet og visualiserer denne. En eksempeltweet finner du i `example_tweet.json` på rot.

* Sett opp WS
* Motta tweet
* Vis siste tweet vha Tweet-komponent

```
var ws = new WebSocket('ws://localhost:9999');
ws.onmessage = function(ms) {
	var newTweet = JSON.parse(ms.data);
}
```

Komponenten bør ha følgende htmlstruktur:

```html
<div class="tweet">
    <div class="tweet-header">
        <img class="tweet-image" src="some/url/image.jpg" />
        <div class="tweet-image-offset tweet-name">Knut Olav</div>
        <div class="tweet-image-offset tweet-screen-name">@VerdensKongen</div>
        <a class="tweet-save-button">Save</a>
    </div>

    <div class="tweet-text">Halla på`rræ</div>
    <div class="tweet-stats">
        <span class="tweet-user-followers">
            <strong>12,058</strong>
            <span class="tweet-stats-desc">followers</span>
        </span>
    </div>
    <span class="tweet-flag flag-icon flag-icon-no"></span>
    <span class="tweet-country tweet-stats-desc">Norge</span>
    <div class="tweet-city tweet-stats-desc">Langesund, Telemark</div>
</div>
```

Legg merke til flagget som har klassen `flag-icon-no`, der de to siste bokstavene er landskoden (feks no for Norge).

### Oppgave 2: TweetList

Utvid til en liste som viser alle mottatte Tweets.

På sikt vil vi få mange tweets. 

Endre derfor til kun å vise de tre siste.

UL må ha klasse `.tweetlist`. Flytt så dette ut i egen komponent `TweetList`.

### Oppgave 3: TweetMap

Legg til et kart. Trenger klassen `tweet-map`. Du finner endel komponenter på f.eks react-components.com. Der ligger også react-googlemaps (hint, hint). Se API: https://github.com/pieterv/react-googlemaps.

Følgende innstillinger danner et godt utgangspunkt:

```
initialZoom: 3
scaleControl: false
streetViewControl: false
panControl: false
zoomControl: false
mapTypeControl: false
initialCenter: 30.675226, -35.051272
```

Hver tweet inneholder sin geoposisjon. Bruk dette til å plassere markører på kartet. 

Nå kan vi skru opp dampen på antall tweets per sekund. Endre hastigheten i `app.js` til `SPEED.MEDIUM`. 
For å ikke kræsje browseren er det lurt å begrense antall tweets som vises. Begrense antall tweets som blir vist til enhver tid til kun de hundre siste.


### Oppgave 4: InfluentialTweets

Nå som vi får vesentlig flere tweets, blir det vanskelig å lese tweetene i `TweetList`. Endre denne til å kun vise de tre tweets fra brukere med flest følgere blant de hundre som vises. 

### Oppgave 5: CurrentTweet

Ved å klikke på en markør skal valgte tweet vises. Bruk css-klassen `.current-tweet`. Det kan være hensiktsmessig å lage en egen komponent som bruker `Tweet`.

Den valgte tweeten skal ha en egen farge på markøren. Markørobjektet har en property `icon` som tar inn en bildeurl. Noen andre markører finnes her:

```
http://maps.google.com/mapfiles/ms/icons/red-dot.png
http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
http://maps.google.com/mapfiles/ms/icons/blue-dot.png
http://maps.google.com/mapfiles/ms/icons/green-dot.png
```

### Oppgave 6: shouldComponentUpdate

Med mange innkommende tweets kan det være lurt å hjelpe `React` med å forstå når den trenger å gjøre oppdateringer i DOM-en.

Skriv en `console.log` i render-metoden på CurrentTweet-komponenten og se hvor ofte denne kalles.

Bruk `shouldComponentUpdate` til å kun rendre når valgt tweet endrer seg.

### Oppgave 7: App Header

Appen vår må ha en fet tittel, og vise hvor mange sekunder den har kjørt og antall tweets den har prosessert. Lag en headerkomponent som brukes css-klassen `.app-header`. Kjøretid og antall tweets bør ha følgende htmlstruktur:

```html
<div>
	<span class="tweet-stats-desc">seconds running</span>
	<strong>12</strong>
</div>
```

### Oppgave 8: Landstatistikk

Vi har lyst til å rangere landene etter flest publiserte tweets. Lag en komponent `CountryList` som gjør dette. Denne statistikken skal inneholde alle tweets, ikke kun de siste hundre.

```html
<ul class="country-list"
	<li>
	   <span class="tweet-flag flag-icon flag-icon-no"></span>
	   <span class="country-tweet-count">25</span>
	</li>
</ul>
```

### Oppgave 9: Refaktorering

Vi har no flaggvisning to forskjellige steder. Skill dette ut i en egen komponent `Flag`.


### Oppgave 10: Routing


### Oppgave 11: DIY

Gjør noe fett og gled deg til ølfestival!
