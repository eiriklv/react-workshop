var React = require('react');
var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

module.exports = React.createClass({

    getInitialState: function() {
        return {
            zoom: 10
        }
    },

    handleClick: function() {
    	this.setState({ 
    		zoom: 8 + Math.floor(Math.random()*5)
    	});
    },

    zoomChanged: function(e) {
    	this.setState({ zoom: e.zoom })
    },

    render: function() {
        return <div className="container">
        			<h1>Hello Maps</h1>
        			<Map
        				height={500}
	        			zoom={ this.state.zoom }
	        			onZoomChange={this.zoomChanged}
					    initialCenter={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >

					    <Marker
					      onClick={this.handleClick}
					      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} />

					    <OverlayView
					      style={{backgroundColor: 'gray'}}
					      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >
					      <p>My state: {this.state.zoom}</p>
					    </OverlayView>
					  </Map>,
        		</div>
    }

});
