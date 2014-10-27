var React = require('react');
var TweetMap = require('./TweetMap.react');
var CurrentTweet = require('./CurrentTweet.react');
var InfluentialTweets = require('./InfluentialTweets.react');
var AppHeader = require('./AppHeader.react');
var CountryList = require('./CountryList.react');
var _ = require('lodash');

var ws = new WebSocket('ws://localhost:9999');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            tweets: [],
            tweetCount: 0,
            currentTweet: null,
            countries: {}
        }
    },

    countCountry: function(countryCode) {
        var countries = _.clone(this.state.countries);
        countries[country] = (countries[country] || 0 ) + 1;
        this.setState({ countries: countries });
    }

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            var newTweet = JSON.parse(ms.data);
            var tweets = this.state.tweets.concat([newTweet]).slice(-100);
            this.setState({ tweets: tweets, tweetCount: this.state.tweetCount + 1 });

            var countryCode = newTweet.place.country_code;
            if (countryCode) this.countCountry(countryCode);
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
            <CountryList countries={this.state.countries} />
            { tweet }
        </div>;
    }

});
