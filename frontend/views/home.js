var Backbone = require('backbone');
var React = require('react');
var App = require('app');
require('backbone-react-component');
var wow = require('wow');

var Home = React.createClass({

	mixins: [Backbone.React.Component.mixin],

	initView: function() {
		new wow.WOW().init();

		var Collection = require('../records/collection');
		var collection = new Collection();

		collection.url = App.getApiUrl('records/stream');

		collection.fetch({
			// data: {_sort: '-created_at'/*, _limit: 6, _offset: 0*/},
			success: function(self, response) {
				var View = require('../views/records/stream');
				React.render(<View collection={self} />, document.getElementById('stream'));
			}
		});
	},

	componentDidMount: function() {
		this.initView();
	},

	componentDidUpdate: function() {
		this.initView();
	},

	render: function () {
		return (
			<div>
				<div className="home" id="home">
					<div className="overlay" />
					<div className="container">
						<div className="row">
							<div className="home-text col-md-8">
								<h1 className="wow fadeInDown" data-wow-delay="1.5s" data-wow-duration="1.5s" data-wow-offset={10}>Responsive Admin Dashboard Template.</h1>
								<p className="lead wow fadeInDown" data-wow-delay="2s" data-wow-duration="1.5s" data-wow-offset={10}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Aenean commodo ligula eget dolor.</p>
								<a href="http://themeforest.net/item/modern-responsive-admin-dashboard-template/11004840" target="_blank" className="btn btn-default btn-rounded btn-lg wow fadeInUp" data-wow-delay="2.5s" data-wow-duration="1.5s" data-wow-offset={10}>Download</a>
								<a href="../index.html" target="_blank" className="btn btn-success btn-rounded btn-lg wow fadeInUp" data-wow-delay="2.5s" data-wow-duration="1.5s" data-wow-offset={10}>Live Preview</a>
							</div>
							<div className="scroller">
								<div className="mouse"><div className="wheel" /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="container m-t-lg m-b-lg" id="stream" />
			</div>
		);
	}
});

module.exports = Home;