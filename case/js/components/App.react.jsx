var React = require('react');
var TweetMap = require('./TweetMap.react');
var _ = require('underscore');

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

    showTweet: function(id) {
        var tweet = _.findWhere(this.state.tweets, { id: id });

        if (!tweet) console.log('Tweet no longer in last hundred');

        console.log(tweet);
    },

    render: function() {

        return <div>
            <TweetMap
                tweets={ this.state.tweets }
                showTweet={ this.showTweet} />
        </div>;
    }

});
