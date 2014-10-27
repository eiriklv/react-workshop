var React = require('react');
var Tweet = require('./Tweet.react');
var _ = require('lodash');

module.exports = React.createClass({

    render: function() {
        var tweets = this.props.tweets;
        var s = _.sortBy(tweets, function(t) {
            return -t.user.followers_count;
        });

        var ts = s.slice(0, 3).map(function(tt) {
            return <li>
                <Tweet tweet={ tt } />
            </li>
        });

        return <ul className="influential">
            { ts }
        </ul>
    }

});
