var React = require('react');
var TweetMap = require('./TweetMap.react');
var CurrentTweet = require('./CurrentTweet.react');
var InfluentialTweets = require('./InfluentialTweets.react');
var AppHeader = require('./AppHeader.react');
var _ = require('lodash');

var ws = new WebSocket('ws://localhost:9999');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            tweets: [],
            tweetCount: 0,
            currentTweet: null
        }
    },

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            var newTweet = JSON.parse(ms.data);
            var tweets = this.state.tweets.concat([newTweet]).slice(-100);
            this.setState({ tweets: tweets, tweetCount: this.state.tweetCount + 1 });
        }.bind(this);

        if (!this.state.currentTweet) this.state.currentTweet = this.state.tweets[0];
    },

    showTweet: function(id) {
        var tweet = _.findWhere(this.state.tweets, { id: id });
        if (!tweet) console.log('Tweet no longer in selection');
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
            <InfluentialTweets tweets={ this.state.tweets } />
            <AppHeader tweetCount={this.state.tweetCount}/>
            { tweet }
        </div>;
    }

});
