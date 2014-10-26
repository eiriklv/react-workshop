var http = require('http');
var _ = require('lodash');
var express = require('express');
var Twit = require('twit');
var WebSocketServer = require('ws').Server
var twitterConfig = require('./twitter.json');

var T = new Twit(twitterConfig);

var app = express();
app.use(express.static('dist'));

app.use(function(req, res, next) {
    if (req.accepts('html', 'json') == 'html' && req.method == "GET") {
        console.log('Routing ' + req.url + ' to index.html');
        req.url = './index.html'
    }
    next();
});

app.use(express.static('public'));

app.get('/hello', function(req, res) {
    return res.send('world');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    next(err);
});

app.use(function(err, req, res, next) {
    require('util').inspect(err);
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
    stream.on('tweet', pushTweet)

    function pushTweet(tweet) {
        console.log(tweet.text, tweet.coordinates)
        var tw = {
            text: tweet.text,
            geo: tweet.coordinates
        };
        ws.send(JSON.stringify(tw));
    };

    ws.on('close', function() {
        stream.removeListener('tweet', pushTweet);
        // stream.stop();
    });
});

