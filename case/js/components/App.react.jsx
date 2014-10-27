var React = require('react');
var _ = require('lodash');
var page = require('page');
var Dashboard = require('./Dashboard.react');
var StarredTweets = require('./StarredTweets.react');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            route: 'root'
        }
    },

    componentDidMount: function () {
        page('/', function() {
            console.log('ROOT');
            this.setState({ route: 'root' });
        }.bind(this));

        page('/starred', function() {
            console.log('STARRED');
            this.setState({ route: 'starred' });
        }.bind(this));

        page();

        setTimeout(function() {
            page('/starred');
        }, 5000);
    },

    componentWillUnmount: function() {
        page.stop();
    },

    render: function() {
        switch(this.state.route) {
            case 'starred':
                return <StarredTweets />

            default:
                return <Dashboard />
        }
    }

});
