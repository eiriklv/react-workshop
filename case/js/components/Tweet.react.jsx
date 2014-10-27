var React = require('react');

module.exports = React.createClass({

    // ettersom vi rendrer på nytt hver gang vi mottar nye tweets fra backend
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.tweet !== nextProps.tweet;
    },

    render: function() {
        var tweet = this.props.tweet;

        return <div className="tweet">
            <img src={tweet.user.profile_image_url} />
            <p>{ tweet.text }</p>
            <p>By: @{ tweet.user.screen_name }</p>
            <p>Followers: { tweet.user.followers_count }</p>
        </div>
    }

});
