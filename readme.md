# Frontendworkshop 19.02.15

Slides from the presentation are available here [her](https://github.com/ewendel/react-workshop/blob/master/slides/slides.pdf?raw=true)

## Instructions

Start by cloning this repo:

```
https://github.com/ewendel/react-workshop.git
```

Run the following to install the projects' dependencies:

```
npm install
```

Start the webserver with:

```
node app.js
```

To start the server for the Twitter-app, do:

```
cd case
node app.js
```


## Exercises

Exercise descriptions are available here in this file, `README.md`, and files for you to code in are already created. These can be found in `react-workshop/tasks/`. This means that you do not have to create any files yourself in order to complete the first part of the workshop.

In these files, the source code for React.js and a JSX-transpiler are already included so that we do not need to continously build our frontend code while developing. Some of the exercises include pre-written CSS, so you shouldn'nt need to write any CSS (unless you want to spice things up).

These files can be reached at the following URL: `http://localhost:3000/{exercise number}/index.html`, e.g. `http://localhost:3000/1/index.html`

**It may be helpful to peek at [React's documentation](http://facebook.github.io/react/docs/) while doing the exercises.**

## Exercise 1: Becoming aquainted with React Components

Create a simple React component that prints "Hello World" to the Document Object Model (the DOM).

#### Tips

Helpful methods: 
`React.createClass, React.render`

## Oppgave 2: Passing data & using JSX

Expand the component from ex. 1 to take in a property called `name` from its parent and write out "Hello, {name}".<br>
If the component is not passed a prop it should use "World" as a default value.

Next, create a component called `Helloes`that accept a property `names` (array) and utilizes the previous component to write out "Hello, {name}" for each of the names in the `names`-array.

#### Tips

`props` are used to pass data from parent to child components - reached via `this.props` and are immutable

`render()` has to return only one node

Remember that you can use ordinary JavaScript in JSX by using `{ }`

Helpful methods: `Array.prototype.map`




## Oppgave 3: Stateful components: Timer

Create a component called `Timer` that prints out the time that has passed since the component was initially rendered. Example:

`I was started 7.8 seconds ago`

The component should update itself ten times per second, and the component should perform any necessary cleanup when unmounted, e.g timer methods.

#### Tips

We use `state` to store our data that changes during the lifetime of a component. It can be accessed through `this.state`

Helpful methods: 
`setInterval, clearInterval`

Lifecycle hooks:
`componentDidMount, componentWillUnmount`



## Oppgave 4: More state: Real-time search

Create a component `Search`that is passed an array called `items` (a prop). The elements contained in the array will have the following format: `{ name: "Some string", url: "www.somesite.com" }`

The component should include a text field, and the elements in the array should be filtered by which ones contain the current string in the input field. The HTML-structure should look like this:

```html
<div>
	<input type="text" />
		<ul> 
			return <li><a ...></a></li>
		</ul>
</div>
```
Also - ensure the input field has focus after the component has been rendered.

#### Tips

Helpful methods:  `String.prototype.match, Array.prototype.filter`

Useful attributes i JSX: `onChange`, `refs`, `className` (because `class` is a reserved keyword in JavaScript)



--
# Part II: Creating a Twitter Dashboard

In this section you will create a single-page app that uses real-time data from the Twitter API to monitor activity on the social messaging platform.

Further instructions are found in `/case/readme.md`.


--

## More React

Concepts that could/should be explored further:

* setState() vs replaceState()
* forceUpdate()
* shouldComponentUpdate()
* key-attributes
* reconciliation (diffing)

### Articles

* [Reacts diff algorithm](http://calendar.perfplanet.com/2013/diff/)
* [Removing User Interface Complexity, or Why React is Awesome] (http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
* [About ClojureScript and functional programming i React] (http://blog.getprismatic.com/om-sweet-om-high-functional-frontend-engineering-with-clojurescript-and-react/)

### Videos

* [The Secrets of React's Virtual DOM](https://www.youtube.com/watch?v=-DX3vJiqxm4)
* [Rethinking Best Practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [Be Predictable, Not Correct](https://www.youtube.com/watch?v=h3KksH8gfcQ)
* [How Instagram.com Works](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* [High performance functional programming with React and Meteor](https://www.youtube.com/watch?v=qqVbr_LaCIo)

