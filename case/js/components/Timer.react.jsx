/** @jsx React.DOM */
var React = require('react');

var Timer = React.createClass({

    getInitialState: function(){
        return { elapsed: 0 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: this.state.elapsed + 1 });
    },

    render: function() {
        var elapsed = this.state.elapsed;
        return <span>{this.state.elapsed}</span>;
    }
});

module.exports = Timer;