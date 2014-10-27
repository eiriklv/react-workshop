/*** @jsx React.DOM */
var React = require('react');

var countries = require('../util/countries');
var Flag = require('./Flag.react');

var NO_OF_COUNTRIES = 25;

var CountryList = React.createClass({

	render: function() {

		var list = [];
		
		for (var prop in this.props.countries) list.push({ countryCode: prop, tweetCount: this.props.countries[prop] })
		list.sort(function(x,y) { return x.tweetCount < y.tweetCount ? 1 : -1 });
		list = list.slice(0, NO_OF_COUNTRIES);

		return <ul className="countrylist">
			{ list.map(function(item, index) {
				return <li key={item.countryCode}>
						<Flag countryCode={item.countryCode} />
						<span className="country-tweet-count">{ item.tweetCount }</span>
						</li>
			})}
		</ul>;
	}

});

module.exports = CountryList;