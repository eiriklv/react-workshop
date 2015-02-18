# Case: Twitter Dashboard

In this task you will create a super-cool Twitter Dashboard.

## Setup

The server feeding your app with tweets is already set up, but you need to create a user to gain access:

### Obtaining access to the API

Visit https://apps.twitter.com

Click "Create new app". Choose a random app name and description and use "http://example.org" as app url.

Go to "Keys and Access Tokens". Create "twitter.json" in the root folder of this repo. It should have the following format:

```
{
    "consumer_key": "your key",
    "consumer_secret": "your secret",
    "access_token": "your access token",
    "access_token_secret": "your access token secret"
}
```

### Local setup

Start by installing dependencies and starting the development tool:

```
npm install
npm install -g gulp

gulp watch
```

Gulp is a build tool used to transpile our JSX code, minify and concatenate our JavaScript and CSS, amongst other things.

Then do the following in another terminal window:

```
node app.js
```

Finally open the following URL in your web browser: http://localhost:9999/

## Step-by-step guide

### Oppgave 1: Rendering a single tweet

Create a component that accepts a tweet-object and renders this. Use this component in the premade Dashboard component. An example tweet object is found in `case/task/example_tweet.json`. An example of the HTML your component should output is found at the bottom of this exercise.

Afterwards, set up a WebSocket connection to the server in order to receive tweets from the API. This should be done in the Dashboard component. Pass the most recently received tweet to the Tweet component.

Here's a list of lifecycle methods available in React:<br>
http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

This is the code needed to set up a WebSocket connection and receive data:

```
var ws = new WebSocket('ws://localhost:9999');
ws.onmessage = function(ms) {
    var newTweet = JSON.parse(ms.data);
}
```

Komponenten bør ha følgende HTML-struktur (da får du med litt
gratis CSS på kjøpet):
The Tweet component should have the following HTML structure (which gives you some free CSS)

```html
<div class="tweet">
    <div class="tweet-header">
        <img class="tweet-image" src="some/url/image.jpg" />
        <div class="tweet-image-offset tweet-name">Knut Olav</div>
        <div class="tweet-image-offset tweet-screen-name">@VerdensKongen</div>
        <a class="tweet-save-button">Save</a>
    </div>

    <div class="tweet-text">Hello, fellow developers!</div>
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

Take note of the element with the class `flag-icon-no`, where the two last letters incide the country code of the tweets' origin. (i.e `no` for Norge).

### Oppgave 2: A list of tweets

Expand the component to render a list of all received tweets in a `<ul>´. This list should have the class `.tweetlist`.

Afterwards, limit the list to only show the three last tweets.

Move all this logic into a new component `TweetList`.

Note: you should still use the `Tweet` component created earlier to render each individual tweet.

### Oppgave 3: TweetMap

Time to plot where on earth all these tweets are coming from!

You can find plenty of components made by other people at http://react-components.com.
Use the component called `react-googlemaps`.

Create a map component. The top-level div should have the CSS class `tweet-map`.

The current map settings will suffice:

```
initialZoom: 3
scaleControl: false
streetViewControl: false
panControl: false
zoomControl: false
mapTypeControl: false
initialCenter: 30.675226, -35.051272
```
Each tweet has geoposition data. Use this to place markers on the map.

Now we can turn up the rate of tweets we receive. In `app.js`, change the value on line 65 from `SPEED.SLOW` to `SPEED.MEDIUM`.

It can be wise to only use, lets say, the last hundred received tweets in order to avoid your computer from crashing due to the vast amounts of data.

### Oppgave 4: InfluentialTweets

Now that we are receiving way more tweets, it is becoming harder to read the tweets in our `TweetList`. Change this component to show the three tweets that has the most followers amongst the last hundred that are shown.

### Oppgave 5: CurrentTweet

We want to to be able to click on one of our map markers in order to that exact tweet. Make a new component `CurrentTweet` that wraps a `Tweet`component. For some free styling, use the class `.current-tweet`.

The selected tweet should have its own marker color. The marker object has a prop called "icon" that accepts an image url. Here are some suitable images:


```
http://maps.google.com/mapfiles/ms/icons/red-dot.png
http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
http://maps.google.com/mapfiles/ms/icons/blue-dot.png
http://maps.google.com/mapfiles/ms/icons/green-dot.png
```

### Oppgave 6: shouldComponentUpdate

Considering the amount of incoming tweets, it could be wise to help React understand whether it needs to check if a component has changes that should be rendered to the DOM. (That is, when a call to render() would produce the same output as the previous call).

By using `console.log` in the `render`-method of our `CurrentTweet` component, we can see how often it is called. Check this again after having implemented the lifecycle method `shouldComponentUpdate`. See the docs for how this works.

### Oppgave 7: App Header

Our app needs a header. In addition to showing the app name (which is yours to decide), it shall display the number of seconds that has passed since it started running (sounds familiar?) and the number of tweets it has processed.

The HTML could look something like this:

```html
<div class="app-header">
    <h1>Crazy-name, yo</h1>
    <div>
        <span class="tweet-stats-desc">seconds running</span>
        <strong>12</strong>
    </div>
    (similar for no. of tweets)
</div>
```
Remember to reuse the `Timer` component you created earlier!

### Oppgave 8: Country statistics

We would like to display which countries that create the highest number of tweets. Create a component `CountryList` that does exactly this. It should take into account all tweets ever received, not just the last hundred.

The HTML could look like this:

```html
<ul class="country-list">
    <li>
       <span class="tweet-flag flag-icon flag-icon-no"></span>
       <span class="country-tweet-count">25</span>
    </li>
</ul>
```

### Oppgave 9: Refaktorering

We are now displaying small flag icons at two different places in our app. It is not beneficial to have code duplication, as we should try to keep ourselves DRY (dont repeat yourself). 

Refactor this to use the same component - a `Flag` component.