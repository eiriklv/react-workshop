/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

var TweetMap = React.createClass({
    displayName: 'TweetMap',

    render: function() {

        var props = this.props;

        var markers = this.props.tweets.map(function(t) {
            var callback = function() {
                props.showTweet(t.id);
            }

            return <Marker
                onClick={ callback }
                position={new GoogleMapsAPI.LatLng(t.geo.coordinates[0], t.geo.coordinates[1])} />
        });

        return <div className="container">
                    <Map className="test"
                        width="100%"
                        height="100%"
                        initialZoom={3}
                        scaleControl={false}
                        streetViewControl={false}
                        panControl={false}
                        zoomControl={false}
                        mapTypeControl={false}
                        initialCenter={new GoogleMapsAPI.LatLng(30.675226, -35.051272)} >

                    { markers }
                    <OverlayView
                      style={{backgroundColor: 'gray'}}
                      position={new GoogleMapsAPI.LatLng(59.9191310, 10.7585240)} >
                    </OverlayView>
                    </Map>
                </div>
    }
});

module.exports = TweetMap;
