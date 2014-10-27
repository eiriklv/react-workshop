var React = require('react');
var TweetMap = require('./TweetMap.react');

var ws = new WebSocket('ws://localhost:9999');



module.exports = React.createClass({

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            ms = JSON.parse(ms.data);
            var last = this.state.tweets.concat([ms]).slice(-100);
            this.setState({ tweets: last });
        }.bind(this); 
    },

    getInitialState: function() {
        return {
            tweets: []
        }
    },
    render: function() {

        return <div>
                <TweetMap tweets={ this.state.tweets } />

        </div>;
    }

});
