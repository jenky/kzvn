var App = require('app');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	
	urlRoot: App.getApiEnpoint('records', this)
	// urlRoot: function() {
	// 	var base = App.getApiUrl() + 'videos';
	// 	return this.id ? base + '/' : base;
	// }
});