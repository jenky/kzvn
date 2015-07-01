var Backbone = require('backbone');
var React = require('react');
var helper = require('helpers');

module.exports = Backbone.Router.extend({
 
	routes: {
		'': 'index',
		'about': 'about',

		'*notFound': 'notFound',
	},
 
	// initialize: function() {
		
	// },

	index: function() {
		
		// var Collection = require('../videos/collection');
		// var collection = new Collection();

		// collection.fetch({
		// 	data: {_sort: '-created_at'/*, _limit: 6, _offset: 0*/},
		// 	success: function(self, response) {
		// 		var View = require('../views/videos/index');
		// 		helper.pageTitle('Videos');
		// 		React.render(<View collection={self} VideoCollection={collection} />, document.getElementById('app'));
		// 	}
		// });
		helper.pageTitle('Home');
		var View = require('../views/home');
		React.render(<View />, document.getElementById('app'));
	},

	about: function() {

		// var View = require('../views/about/view');

		// helper.pageTitle('About');

		// React.render(<View />, document.getElementById('app'));
	},

	notFound: function() {
		var View = require('../views/404');

		helper.pageTitle('Oops');

		React.render(<View />, document.getElementById('app'));
	}

});