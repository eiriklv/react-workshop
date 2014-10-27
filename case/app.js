var http = require('http');
var _ = require('lodash');
var express = require('express');
var Twit = require('twit');
var WebSocketServer = require('ws').Server
var twitterConfig = require('./twitter.json');
var util = require('util');

var T = new Twit(twitterConfig);

var app = express();
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    return res.send('world');
});

app.use(function(req, res, next) {
    if (req.accepts('html', 'json') == 'html' && req.method == "GET") {
        console.log('Routing ' + req.url + ' to index.html');
        req.url = './index.html'
    }
    next();
});

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
    locations: '-180,-90,180,90',
    // language: 'nb,nn,no'
    language: 'en'
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
        if (Math.random()>0.5) return;
        if (tweet.coordinates == null) return;

        console.log(tweet.text, tweet.coordinates)

        var tw = {
            text: tweet.text,
            geo: tweet.coordinates
        };
        ws.send(JSON.stringify(tw));
    }
};
