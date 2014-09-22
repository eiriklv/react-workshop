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
`React.createClass`, `React.renderComponent`

## Oppgave 2: Data i React

Utvid komponenten til å ta inn en property `name` og skrive ut `Hello, {name}`.<br>
Dersom ikke komponenten mottar noe name-parameter skal den skrive ut det samme som i oppgave 1.

Lag så en komponent `Helloes` som tar en property `names` og bruker komponenten fra oppgave 2 til å skrive ut `Hello, {name}` på en ny linje for hvert navn i arrayet.

#### Tips

`props` brukes til å holde immutable data

`render()` må returnere kun én node på toppnivå

## Opgave 3: Timer

Lag en komponent `Timer` som skriver ut mengden tid siden komponenten ble startet. Eksempel:

`I was started 7.8 seconds ago`

Komponenten skal oppdatere seg ti ganger/sekund.

#### Tips

Interessante metoder:
`setInterval clearInterval`

Lifecycle hooks:
`componentDidMount` `componentDidUnmount`


## Credits

Repoet er basert på en [boilerplate](https://github.com/jmosbech/react-boilerplate) for React laget av [jmosbech](https://github.com/jmosbech).