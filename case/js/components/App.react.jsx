var React = require('react');
var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;


var ws = new WebSocket('ws://localhost:9999');



module.exports = React.createClass({

    componentDidMount: function () {
        ws.onmessage = function(ms) {
            ms = JSON.parse(ms.data);
            var lastTen = this.state.tweets.concat([ms]).slice(-100);
            this.setState({ tweets: lastTen });
            console.log(lastTen);
        }.bind(this);          
    },

    getInitialState: function() {
        return {
            zoom: 1,
            tweets: []
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

        var markers = this.state.tweets.map(function(t) {
            return <Marker
                      onClick={this.handleClick}
                      position={new GoogleMapsAPI.LatLng(t.geo.coordinates[1], t.geo.coordinates[0])} />
        });

        return <div className="container">
        			<Map className="test"
                        width="100%"
                        height="100%"
	        			zoom={ this.state.zoom }
                        scaleControl={false}
                        streetViewControl={false}
                        panControl={false}
                        zoomControl={false}
                        mapTypeControl={false}
	        			onZoomChange={this.zoomChanged}
					    initialCenter={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >

                
                    { markers }
                    <OverlayView
                      style={{backgroundColor: 'gray'}}
                      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >
                    </OverlayView>
                    </Map>
        		</div>
    }

});
