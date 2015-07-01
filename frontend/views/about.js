var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
	
	mixins: [Backbone.React.Component.mixin],
	
	render: function () {
		return <div className="text-center">This is about page</div>;
	}
});