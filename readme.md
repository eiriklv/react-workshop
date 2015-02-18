# react-workshop

Dette repoet inneholder alt materiale brukt i workshop om React.js for på BEKK Fagdag 31. oktober 2014.

Slides ligger [her](https://github.com/ewendel/react-workshop/blob/master/slides/slides.pdf?raw=true)

Start med å klone repoet:

```
https://github.com/ewendel/react-workshop.git
```

For å installere prosjektets avhengigheter, kjør 

```
npm install
```

Start serveren:

```
node app.js
```

For å starte serveren til Twitter-caset:

```
cd case
node app.js
```


## Oppgaver

Oppgavetekstene ligger her i `README.md`, og det er laget ferdig index.html, script.js og styles.css i en mappe per oppgave som ligger under `react-workshop/tasks/`. I disse filene er både React og en JSX-Transformator for utvikling dratt inn, så vi slipper å bygge frontenden vår kontinuerlig. Noen av oppgavene utleveres med en del CSS, slik at det i utgangspunktet skal være unødvendig å skrive noe mer css.

Disse filene kan nås via f.eks `http://localhost:3000/{oppgavenr}/index.html`

Man kan også bruke f.eks [JSFiddle](www.jsfiddle.net) til å gjøre oppgavene om ønskelig.

**Underveis i oppgavene kan det være greit å kikke innom [dokumentasjonen](http://facebook.github.io/react/docs/) til React.**

## Oppgave 1: Bli kjent med komponenter

Lag en enkel React-komponent som kun skriver ut `Hello World` til DOM-en.

#### Tips

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

## Oppgave 3: Tilstandsfulle komponenter: Timer

Lag en komponent `Timer` som skriver ut mengden tid som er gått siden komponenten ble startet. Eksempel:

`I was started 7.8 seconds ago`

Komponenten skal oppdatere seg ti ganger i sekundet, og komponenten skal rydde opp etter seg når den unmountes.

#### Tips

Interessante metoder:
`setInterval, clearInterval`

Lifecycle hooks:
`componentDidMount, componentDidUnmount`

## Oppgave 4: Mer tilstand: Sanntidsøk

Lag en komponent `Search` som tar inn et array `items`. Elementene i items er på formen `{ name: "Some string", url: "www.somesite.com" }`

Komponenten skal inneholde et tekstfelt, og endringer i tekstfeltet skal filtrere hvilke av elementene i `items` som vises. Se under for HTML-struktur:

```html
<div>
	<input type="text" />
		<ul> 
			return <li><a ...></a></li>
		</ul>
</div>
```

Sett også fokus på inputfeltet etter at siden er lastet.

#### Tips

Interessante metoder: `String.prototype.match, Array.prototype.filter`

Attributter i JSX: `onChange`, `refs`, `className` (da class er et reserved keyword i JS)



--
# Caseoppgave

Vi skal lage en interaktiv app som benytter blant annet Twitter og Google Maps.

Oppgavebeskrivelsen finner du /case/readme.md.



--

## Mer React

Konsepter / API-kall å lese mer om:

* setState() vs replaceState()
* forceUpdate()
* shouldComponentUpdate()
* key-attributes
* reconciliation (diffing)

### Artikler

* [Reacts diff algorithm](http://calendar.perfplanet.com/2013/diff/)
* [Removing User Interface Complexity, or Why React is Awesome] (http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
* [Om ClojureScript og funksjonell programmering i React] (http://blog.getprismatic.com/om-sweet-om-high-functional-frontend-engineering-with-clojurescript-and-react/)

### Apper

Det finnes få eksempelapper av litt størrelse på nettet. Her er to apper jeg har skrevet det siste halvåret som man kan ta en titt på om man ønsker. Si ifra til meg, så skal dere få tilgang!

* [Banebooking.net](https://www.banebooking.net)
* [BEKK Fagdag](https://fagdag.bekk.no)

### Videoer

Pete Hunt jobber i Instagram og en av hovedbidragsyterne til React. Han har vært land og strand det siste året og holdt talks. Her er et utdrag:

* [The Secrets of React's Virtual DOM](https://www.youtube.com/watch?v=-DX3vJiqxm4)
* [Rethinking Best Practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [Be Predictable, Not Correct](https://www.youtube.com/watch?v=h3KksH8gfcQ)
* [How Instagram.com Works](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* [High performance functional programming with React and Meteor](https://www.youtube.com/watch?v=qqVbr_LaCIo)

