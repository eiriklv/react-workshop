var React = require('react');
var Tweet = require('./Tweet.react');
var starred = require('../starredTweets');
var page = require('page');

module.exports = React.createClass({

    toRoot: function() {
        page('/');
    },

    render: function() {
        var tweets = starred.tweets.map(function(tweet) {
            return <li>
                <Tweet tweet={ tweet } />
            </li>
        });

        return <div>
            <a href="#" onClick={this.toRoot}>Tilbake</a>
            <ul>
                { tweets }
            </ul>
        </div>
    }

});
