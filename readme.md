# react-workshop

Dette repoet inneholder alt materiale brukt i workshop om React.js for JavaScript & webteknologi-gruppa 23. september 2014.

Start med å klone repoet:

```
https://github.com/ewendel/react-workshop.git
```

For å installere prosjektets avhengigheter, kjør 

```
npm install
```

For å kjøre watcheren som kontinuerlig bygger frontendkoden din, kjør


```
npm run watch
```

## Structure

The repo is organized like this:
- `app.js`: Main file. Starts the server.
- `/bin`: Various build scripts.
- `/browser`: All browser code: Sass and JSX files.
- `/public`: Publicly available static assets: build output and images.
- `/routes`: Express route definitions.
- `/test`: Mocha specs.
- `/views`: Server side views. Written with [PEJS](https://github.com/gett/pejs).


## Oppgaver

Underveis i oppgavene kan det være greit å kikke innom [dokumentasjonen](http://facebook.github.io/react/docs/).

## Oppgave 1: Bli kjent med komponenter

Lag en enkel React-komponent som kun skriver ut `Hello World` til skjermen.

#### Tips

Husk JSX-headsup i første linje:<br>
`/** @jsx React.DOM */`

Interessante metoder: 
`React.createClass, React.renderComponent`

## Oppgave 2: Data & JSX

Utvid komponenten til å ta inn en property `name` og skrive ut `Hello, {name}`.<br>
Dersom ikke komponenten mottar noe name-parameter skal den skrive ut det samme som i oppgave 1.

Lag så en komponent `Helloes` som tar en property `names` og bruker komponenten fra oppgave 2 til å skrive ut `Hello, {name}` på en ny linje for hvert navn i arrayet.

#### Tips

`props` brukes til å holde immutable data

`render()` må returnere kun én node på toppnivå

Husk at man kan bruke vanlig JS i JSX ved å bruke `{ }`

Interessante metoder: `Array.prototype.map`

## Opgave 3: Tilstandsfulle komponenter: Timer

Lag en komponent `Timer` som skriver ut mengden tid som er gått siden komponenten ble startet. Eksempel:

`I was started 7.8 seconds ago`

Komponenten skal oppdatere seg ti ganger/sekund, og komponenten skal rydde opp etter seg når den unmountes.

#### Tips

Interessante metoder:
`setInterval, clearInterval`

Lifecycle hooks:
`componentDidMount, componentDidUnmount`

## Oppgave 4: Mer tilstand: Sanntidsøk

Lag en komponent `Search` som tar inn et array `items`. Elementene i items er på formen `{ name: "Some string", url: "www.somesite.com" }`

Komponenten skal inneholde et tekstfelt, og endringer i tekstfeltet skal filtrere hvilke av elementene i `items` som vises. Se under for HTML-struktur:

```html
<div class="search-items">
	<input type="text" />
		<ul> 
			return <li class="search-item"><a ...></a></li>
		</ul>
</div>
```

#### Tips

Interessante metoder: `String.prototype.match, Array.prototype.filter`

Attributter i JSX: `onChange`, `className` (da class er et reserved keyword i JS)

## Oppgave 5: Komponentgjenbruk, ajax & events

Lag et bildegalleri som henter populære bilder fra Instagram. Ved klikk på et bilde skal dette bildet markeres som favoritt og vises i en egen liste med bilder. Favorittmarkeringen kan fjernes ved å klikke på bildet igjen i en av listene. Bilder kan hentes ved å gå mot følgende endepunkt:

`https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=?`

API-nøkkelen skal sendes inn som parameter til komponenten. HTML-strukturen skal være som vist under.

```html
<div class="pictures">
	<div class="picture"><img ... /></div>
	...
</div>

<div class="favorites">
	<div class="picture favorite"><img ... /></div>
	...
</div>
```

I tillegg skal `.favorites` inneholde en melding når ingen bilder er favorittmarkert:

```html
<p>Click an image to mark it as a favorite.</p>
```

## Credits

Repoet er basert på en [boilerplate](https://github.com/jmosbech/react-boilerplate) for React laget av [jmosbech](https://github.com/jmosbech).