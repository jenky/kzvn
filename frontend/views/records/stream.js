var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

var RecordListItem = require('./record_list_item');

var RecordStream = React.createClass({
	
	mixins: [Backbone.React.Component.mixin],
	
	render: function () {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="panel panel-white">
						<div className="panel-heading clearfix">
							<h4 className="panel-title">Stream</h4>
						</div>
						<div className="panel-body">
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>Mapname</th>
											<th>Player</th>
											<th>Time</th>
											<th>Date</th>
											<th>Weapon</th>
										</tr>
									</thead>
									<tbody>
										<For each="entry" of={this.state.collection}>
											<RecordListItem key={entry.id} data={entry} />
										</For>										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = RecordStream;