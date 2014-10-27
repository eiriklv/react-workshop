var React = require('react');

module.exports = React.createClass({

    render: function() {
        return <div className={"current-tweet"}>
            <p>{ this.props.tweet.text }</p>
        </div>
    }

});
