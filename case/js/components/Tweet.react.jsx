var React = require('react');

module.exports = React.createClass({

    // ettersom vi rendrer på nytt hver gang vi mottar nye tweets fra backend
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.tweet !== nextProps.tweet;
    },

    render: function() {
        var tweet = this.props.tweet;

        return <div className="tweet">
            <div className="tweet-header">
                <img className="tweet-image" src={tweet.user.profile_image_url} />
                <div className="tweet-image-offset tweet-name">{ tweet.user.name }</div>
                <div className="tweet-image-offset tweet-screen-name">@{ tweet.user.screen_name }</div>
                <a className="tweet-follow-button"><i/>Follow</a>
            </div>

            <div className="tweet-text">{ tweet.text }</div>
            <div className="tweet-stats">
                <span className="tweet-user-followers">
                    <strong>{ tweet.user.followers_count }</strong>
                    <span className="tweet-stats-desc">followers</span>
                </span>
            </div>
        </div>
    }

});
