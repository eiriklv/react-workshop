var http = require('http');
var _ = require('lodash');
var express = require('express');

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

http.createServer(app)
    .listen(9999, '0.0.0.0');
