var React = require('react');

var App = require('./components/App.react');

React.renderComponent(
    <App />,
    document.getElementById('app')
);

var ws = new WebSocket('ws://localhost:9999');

ws.onmessage = function(ms) {
    console.log(ms);
}

