var React = require('react');
var TweetMap = require('./TweetMap.react');
var CurrentTweet = require('./CurrentTweet.react');
var _ = require('lodash');

var ws = new WebSocket('ws://localhost:9999');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            tweets: [],
            currentTweet: null
        }
    },

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            ms = JSON.parse(ms.data);
            var last = this.state.tweets.concat([ms]).slice(-100);
            this.setState({ tweets: last });
        }.bind(this);

        if (!this.state.currentTweet) this.state.currentTweet = this.state.tweets[0];
    },

    showTweet: function(id) {
        var tweet = _.findWhere(this.state.tweets, { id: id });
        if (!tweet) console.log('Tweet no longer in last hundred');
        this.setState({ currentTweet: tweet });
    },

    render: function() {
        var tweet = null;
        if (this.state.currentTweet != null) {
            tweet = <CurrentTweet tweet={ this.state.currentTweet } />
        }

        return <div>
            <TweetMap
                tweets={ this.state.tweets }
                showTweet={ this.showTweet} />
            { tweet }
        </div>;
    }

});
