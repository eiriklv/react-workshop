var _ = require('lodash');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Starred = function() {
    this.tweets = [];
};
util.inherits(Starred, EventEmitter);

Starred.prototype.add = function(tweet) {
    this.tweets.push(tweet);
    this.emit('added', tweet);
};

Starred.prototype.isStarred = function(tweet) {
    return _.contains(this.tweets, tweet);
};

module.exports = new Starred();
