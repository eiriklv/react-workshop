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
        // Here we've just set up the basics for one way of handling routes in
        // a React applications. Basically, we treat a route as application
        // state instead of something that lays on the outside of your
        // application.

        // However, as soon as we start to handle routes, we see that we need
        // to move the state from our Dashboard component and into this
        // component.  Better yet, we should move it out of the React
        // components entirely. One way of handling this is by following the
        // architectural principles called Flux (https://facebook.github.io/flux/).
        // Another way could be to use Omniscient (https://github.com/omniscientjs/omniscient).
        // Or just to put it into pure JavaScript objects.

        page('/', function() {
            this.setState({ route: 'root' });
        }.bind(this));

        page('/starred', function() {
            this.setState({ route: 'starred' });
        }.bind(this));

        page();

//        setTimeout(function() {
//            page('/starred');
//        }, 5000);
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
