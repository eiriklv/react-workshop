var http = require('http');
var _ = require('lodash');
var express = require('express');
var Twit = require('twit');
var WebSocketServer = require('ws').Server
var twitterConfig = require('./twitter.json');
var util = require('util');
var historyApiFallback = require('connect-history-api-fallback');
historyApiFallback.setLogger(console.log.bind(console));

var LOCATIONS = {
    EUROPE: '-13.380968, 37.810047, 31.443250, 70.709137',
    WORLD: '-180,-90,180,90'
};

var SPEED = {
    SLOW: 0.01,
    MEDIUM: 0.1,
    FAST: 0.2,
    INSANE: 0.4,
    RUDUNCULOUS: 0.6,
    MY_BROWSER_HATES_ME: 1.0
};


var T = new Twit(twitterConfig);

var app = express();
app.use(express.static('dist'));
app.use(historyApiFallback);
app.use(express.static('public'));

app.use(function(err, req, res, next){
    console.error(err.stack);
    next(err);
});

app.use(function(err, req, res, next) {
    util.inspect(err);
    res.status(500).send({ error: err.message });
});

var server = http.createServer(app);
server.listen(9999);

var wss = new WebSocketServer({ server: server });

var stream = T.stream('statuses/filter', {
    locations: LOCATIONS.WORLD
    ,language: 'en,nb,nn,no'
});

wss.on('connection', function(ws) {
    var pushTweet = pushTo(ws);
    stream.on('tweet', pushTweet)

    ws.on('close', function() {
        stream.removeListener('tweet', pushTweet);
    });
});


function pushTo(ws) {
    return function (tweet) {
        if (Math.random() > SPEED.MEDIUM) return;
        if (tweet.coordinates == null) return;
        if (tweet.place == null) return;
        

        var tw = _.pick(tweet, 'id', 'text', 'geo', 'place', 'user', 'entities', 'lang');
        ws.send(JSON.stringify(tw), function(err) {
            if (err) console.log(err);
        });
    }
};
