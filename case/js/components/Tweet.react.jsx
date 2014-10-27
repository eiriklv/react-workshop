var React = require('react');

module.exports = React.createClass({

    // ettersom vi rendrer på nytt hver gang vi mottar nye tweets fra backend
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.tweet !== nextProps.tweet;
    },

    render: function() {
        var tweet = this.props.tweet;
        var cx = 'tweet ' + (this.props.className || '');

        return <div className={ cx }>
            <img src={tweet.user.profile_image_url} />
            <p>{ tweet.text }</p>
            <p>By: @{ tweet.user.screen_name }</p>
            <p>Followers: { tweet.user.followers_count }</p>
        </div>
    }

});
