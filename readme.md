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

### Oppgave 1: Bli kjent med komponenter

Lag en enkel React-komponent som kun skriver ut ```Hello World``` til skjermen.

## Credits

Repoet er basert på en [boilerplate](https://github.com/jmosbech/react-boilerplate) for React laget av [jmosbech](https://github.com/jmosbech).