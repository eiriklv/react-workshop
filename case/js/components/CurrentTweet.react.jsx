var React = require('react');
var Tweet = require('./Tweet.react');

module.exports = React.createClass({

    render: function() {
        return <Tweet
            className="current-tweet"
            tweet={ this.props.tweet } />
    }

});
