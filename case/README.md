# Case: Twitter Dashboard

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

Lag en komponent som tar inn et tweet-objekt og rendrer dette. Bruk
Tweet-komponenten i Dashboard-komponenten.  Du kan se et eksempel i
`example_tweet.json`. Eksempel-HTML finner du nederst i oppgaven.

Når du har laget Tweet-komponenten kan du sette opp en WebSocket-tilkobling
mot serveren og starte å motta tweets. Dette kan også gjøres i
Dashboard-komponenten. Rendre siste mottatte tweet med Tweet-komponenten.

Her ser du hvilke lifecycle-metoder som finnes i React:
http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

WebSocket-oppsett:

```
var ws = new WebSocket('ws://localhost:9999');
ws.onmessage = function(ms) {
    var newTweet = JSON.parse(ms.data);
}
```

Komponenten bør ha følgende HTML-struktur (da får du med litt
gratis CSS på kjøpet):

```html
<div class="tweet">
    <div class="tweet-header">
        <img class="tweet-image" src="some/url/image.jpg" />
        <div class="tweet-image-offset tweet-name">Knut Olav</div>
        <div class="tweet-image-offset tweet-screen-name">@VerdensKongen</div>
        <a class="tweet-save-button">Save</a>
    </div>

    <div class="tweet-text">Halla på'rræ</div>
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

Legg merke til flagget som har klassen `flag-icon-no`, der de
to siste bokstavene er landskoden (f.eks. `no` for Norge).

### Oppgave 2: TweetList

Utvid til å rendre en liste med alle mottatte tweets. `<ul>`-en
bør ha klassen `.tweetlist`.

På sikt (ganske raskt, faktisk) vil vi få mange tweets, så
endre til å kun vise de tre siste.

Flytt dette ut i egen komponent `TweetList`.

### Oppgave 3: TweetMap

Nå skal vi legge til et kart! Du finner endel komponenter på
f.eks. http://react-components.com. Der ligger også
react-googlemaps (hint, hint).

Lag en kart-komponent. Vi anbefaler å wrappe kartet i en div med
klassen `tweet-map`.

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

Hver tweet inneholder sin geo-posisjon. Bruk dette til å
plassere markører på kartet.

Nå kan vi skru opp dampen på antall tweets per sekund. Endre hastigheten i
`app.js` til `SPEED.MEDIUM`. For å ikke kræsje browseren kan det være lurt å
begrense antall tweets som vises (ellers gjør laptop-en din til helikopter).
Hundre siste tweets er et bra utgangspunkt.

### Oppgave 4: InfluentialTweets

Nå som vi får vesentlig flere tweets blir det vanskelig å lese tweetene i
`TweetList`. Endre til å at de tre tweetene som vises kommer fra brukerne med
flest følgere blant de hundre som vises.

### Oppgave 5: CurrentTweet

Ved å klikke på en markør skal valgte tweet vises. Det kan være hensiktsmessig
å lage en egen komponent som bruker `Tweet`-komponenten internt. For litt
gratis CSS, bruk `.current-tweet`.

Den valgte tweeten skal ha en egen farge på markøren. Markørobjektet har en
property `icon` som tar inn en bildeurl. Her kan du velge blant for eksempel:

```
http://maps.google.com/mapfiles/ms/icons/red-dot.png
http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
http://maps.google.com/mapfiles/ms/icons/blue-dot.png
http://maps.google.com/mapfiles/ms/icons/green-dot.png
```

### Oppgave 6: shouldComponentUpdate

Med mange innkommende tweets kan det være lurt å hjelpe React med å forstå når
man i det hele tatt trenger å sjekke om en komponent har endringer som skal
rendres til DOM-en. (Altså når et nytt render-kall ikke medfører endringer som
skal rendres.)

Skriv en `console.log` i `render`-metoden på `CurrentTweet`-komponenten og se
hvor ofte denne kalles. Vi ønsker at den kun skal rendre én gang for hver gang
vi velger en ny tweet. Til dette kan vi bruke lifecycle-metoden `shouldComponentUpdate`.

### Oppgave 7: App Header

Appen vår må ha en fet tittel, og vise hvor mange sekunder den har kjørt og
antall tweets den har prosessert. Lag en headerkomponent. Her finner du litt
basis-HTML, som blant annet viser eksempel på HTML-struktur på kjøretid og
antall tweets.

```html
<div class="app-header">
    <h1>Crazy-name, yo</h1>
    <div>
        <span class="tweet-stats-desc">seconds running</span>
        <strong>12</strong>
    </div>
</div>
```

Her kan du gjenbruke komponenten fra `Timer`-oppgaven!

### Oppgave 8: Landstatistikk

Vi har lyst til å rangere landene etter flest publiserte tweets. Lag en
komponent `CountryList` som gjør dette. Denne statistikken skal baseres på alle
tweets, ikke kun de siste hundre.

```html
<ul class="country-list">
    <li>
       <span class="tweet-flag flag-icon flag-icon-no"></span>
       <span class="country-tweet-count">25</span>
    </li>
</ul>
```

### Oppgave 9: Refaktorering

Vi har nå implementert flaggvisning to forskjellige steder. Skill dette ut i en
egen komponent `Flag`.

### Oppgave 10: DIY

Gjør noe fett og gled deg til ølfestival!
