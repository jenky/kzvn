var Backbone = require('backbone');
var React = require('react');
var App = require('app');
var helper = require('helpers');

var Collection = require('./collection');
var Model = require('./model');

module.exports = Backbone.Router.extend({
 
	routes: {
		'r/:map': 'view',
	},
 
	view: function(map) {

		var Collection = require('../records/collection');
		var collection = new Collection();

		collection.url = App.getApiUrl('records/' + map)

		collection.fetch({
			success: function(self, response) {
				var View = require('../views/records/view');
				helper.pageTitle(map + ' - Records');
				React.render(<View collection={self} />, document.getElementById('app'));
			}
		});
	}
});