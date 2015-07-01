var Backbone = require('backbone');
var App = require('app');
var Pace = require('pace');
var helper = require('helpers');

Backbone.$ = $;

window.__app = App;

// Bootstrap App

// This route always run first.
// var UsersRouter = require('./users/router');
// new UsersRouter();
// // 

var CoreRouter = require('./core/router');
var RecordsRouter = require('./records/router');

new CoreRouter();
new RecordsRouter();

$(function() {

	require('./plugins');

	$(document).on('click', 'a:not([data-bypass])', function (e) {

		var href = $(this).attr('href'),
			protocol = this.protocol + '//';

		// if ((href.slice(protocol.length) !== protocol) 
			// && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {

			e.preventDefault();			

			url = href.replace(/^\//,'').replace('\#\!\/','')

			Backbone.history.navigate(url, {trigger: true});

			window.scrollTo(0, 0);
		// }
	});

	if (Backbone.history) {

		Pace.start();

		Backbone.history.on("route", function (route, router) {

			// console.log(router);
			// url = App.getCurrentRoute();

			// if (url == '') url = '/';

			// helper.setActiveNav(url);
		});

		Backbone.history.start({pushState: true});

	}
});
