var webpack = require("webpack");
var path = require("path");
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var SplitByNamePlugin = require('split-by-name-webpack-plugin');

var resolveBowerPath = function(componentPath) {
	return path.join(__dirname, '../bower_components', componentPath);
};

var resolveBasePath = function(componentPath) {
	return path.join(__dirname, '../frontend', componentPath);
};

var resolveViewPath = function(componentPath) {
	return path.join(__dirname, '../frontend/views', componentPath);
};

module.exports = {
	resolve: {
		extensions: ['', '.js', '.json', '.coffee', '.jsx'],
		alias: {
			'bootstrap': resolveBowerPath('/bootstrap/dist/js/bootstrap.js'),
			'pace': resolveBowerPath('/pace/pace.js'),
			'helpers': resolveBasePath('/common/helpers.js'),
			'notification': resolveBasePath('/common/notification.js'),
			'app': resolveBasePath('/app.js'),

			'jquery.scrollbar': resolveBowerPath('/jquery.scrollbar/jquery.scrollbar.js'),
			'Locstor': resolveBowerPath('/locstor/locstor.min.js'),
			'toastr': resolveBowerPath('/toastr/toastr.js'),
			'bLazy': resolveBowerPath('/bLazy/blazy.js'),
			'wow': resolveBowerPath('/wow/dist/wow.js'),
		}
	},
	entry: {
		app: [
			resolveBasePath('/main.js')
		],	
		views: [
			resolveViewPath('/about.js'),
			resolveViewPath('/home.js'),		
			resolveViewPath('/404.js'),

			resolveViewPath('/records/stream.js'),
		],			
		vendor: [
			"backbone",
			"backbone-deep-model",
			"jquery",
			"underscore",
			"backbone-react-component",
			"react",	
			"formsy-react",
			'bootstrap',
			'jquery.scrollbar',
			"pace",
			"node-waves",
			"Locstor",
			"moment",
			"bLazy"
		],		
	},
	output: {
		filename: "[name].js",
		chunkFilename: '[id].js',
		publicPath: './public/js/'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony!jstransform-loader?jsx-control-statements" }
		]
	},
	plugins: [		
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
		]),
		new webpack.optimize.AggressiveMergingPlugin(),
    	new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),

		new ChunkManifestPlugin({
			filename: "manifest.json",
			manifestVariable: "webpackManifest"
		})
	]
};