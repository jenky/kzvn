var App = require('app');
var Backbone = require('backbone');

var Model = require('./model');

module.exports = Backbone.Collection.extend({
	model: Model,
	url: App.getApiUrl() + 'records'
});