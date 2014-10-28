var http = require('http');
var _ = require('lodash');
var express = require('express');
var Twit = require('twit');
var WebSocketServer = require('ws').Server
var twitterConfig = require('./twitter.json');
var util = require('util');
var historyApiFallback = require('connect-history-api-fallback');
historyApiFallback.setLogger(console.log.bind(console));

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
    locations: '-180,-90,180,90'
    // ,language: 'en,nb,nn,no'
});

wss.on('connection', function(ws) {
    var pushTweet = pushTo(ws);
    stream.on('tweet', pushTweet)

    ws.on('close', function() {
        stream.removeListener('tweet', pushTweet);
    });
});

var SPEED = {
    SLOW: 0.01,
    MEDIUM: 0.1,
    FAST: 0.2,
    INSANE_HAHAHA: 0.5,
    ARE_YOU_KIDDING_ME: 0.8,
    MY_BROWSER_HATES_ME: 1.0
};

function pushTo(ws) {
    return function (tweet) {
        if (Math.random() > SPEED.SLOW) return;
        if (tweet.coordinates == null) return;
        if (tweet.place == null) return;
        

        var tw = _.pick(tweet, 'id', 'text', 'geo', 'place', 'user', 'entities', 'lang');
        ws.send(JSON.stringify(tw), function(err) {
            if (err) console.log(err);
        });
    }
};
