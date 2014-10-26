var React = require('react');
var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

module.exports = React.createClass({

    getInitialState: function() {
        return {
            zoom: 5
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
        			<Map className="test"
                        width="100%"
                        height="100%"
	        			zoom={ this.state.zoom }
                        scaleControl={false}
                        streetViewControl={false}
                        mapTypeId={window.google.maps.MapTypeId.ROADMAP}
                        panControl={false}
                        zoomControl={false}
                        mapTypeControl={false}
	        			onZoomChange={this.zoomChanged}
					    initialCenter={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >

                    <Marker
                      onClick={this.handleClick}
                      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} />

                    <Marker
                    onClick={this.handleClick}
                    position={new GoogleMapsAPI.LatLng(37.774929500000000000, -122.419415500000010000)} />

                    <OverlayView
                      style={{backgroundColor: 'gray'}}
                      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >
                      <p>My state: {this.state.zoom}</p>
                    </OverlayView>
                    </Map>
        		</div>
    }

});
