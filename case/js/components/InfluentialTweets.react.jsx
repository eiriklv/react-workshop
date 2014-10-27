var React = require('react');
var Tweet = require('./Tweet.react');
var _ = require('lodash');

module.exports = React.createClass({

    render: function() {
        var tweets = _.chain(this.props.tweets)
            .sortBy(function(t) {
                return -t.user.followers_count;
            })
            .slice(0, 3)
            .map(function(tt) {
                return <li>
                    <Tweet tweet={ tt } />
                </li>
            })
            .value();

        return <ul className="influential">
            { tweets }
        </ul>
    }

});
