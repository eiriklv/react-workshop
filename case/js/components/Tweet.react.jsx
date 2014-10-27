var React = require('react');

module.exports = React.createClass({

    // ettersom vi rendrer på nytt hver gang vi mottar nye tweets fra backend
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.tweet !== nextProps.tweet;
    },

    render: function() {
        var tweet = this.props.tweet;

        return <div className="tweet">
            <div className="user cf">
                <img className="user-img" src={tweet.user.profile_image_url} />
                <div className="user-meta">
                    <h2>@{ tweet.user.screen_name }</h2>
                    <div className="user-followers">Followers: { tweet.user.followers_count }</div>
                </div>
            </div>
            <p>{ tweet.text }</p>
        </div>
    }

});
