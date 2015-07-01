var Backbone = require('backbone');

var App = {};

App.options = {
	title: 'KzVn',
	api_host: 'http://kzvn.local',
	api_version: 'v1',
	img_cdn: 'https://storage-milano.rhcloud.com/kz/image.php'
};

App.getCurrentRoute = function() {
	return Backbone.history.fragment;
};

App.getOption = function(key) {
	return App.options[key] || null;
};

App.getApiUrl = function(path) {

	var url = App.getOption('api_host') + '/' + App.getOption('api_version');
	var path = path ? path : '';

	if (url.slice(-1) != '/') {
		url = url + '/';
	}

	return url + path;
}

App.getApiEnpoint = function(path, model) {

	var url = App.getApiUrl() + path;

	if (model.id !== undefined && model.id) {
		url = url + '/';
	}

	return url;
}

module.exports = App;