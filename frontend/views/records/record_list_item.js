var Backbone = require('backbone');
var React = require('react');
var helper = require('helpers');
require('backbone-react-component');

module.exports = React.createClass({
	
	mixins: [Backbone.React.Component.mixin],
	
	render: function () {
		var data = this.props.data;
		return (
			<tr>
				<td><a href={'/r/' + data.mapname}>{data.mapname}</a></td>
				<td>
					<If condition={data.steam_is_valid}>
						<a href={'/p/' + data.authid}>{data.name}</a>
					<Else />
						<span>{data.name}</span>
					</If>
				</td>
				<td dangerouslySetInnerHTML={{__html: data.display_time_html}}></td>
				<td>{data.date}</td>
				<td style={{verticalAlign: 'middle'}}><img src={helper.kzImage({weapon: data.weapon})} className="img-responsive" /></td>
			</tr>
		);
	}
});