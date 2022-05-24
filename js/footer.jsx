/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
					</button>
				);
			}	

			// console.log('count', this.props.count)
			var count = this.props.count
			var countText
			// 0 would technically be pluralized I think?
			if ((count = 0) || (count > 1)) { 
				countText = 'items left'
			}
			else {
				countText = 'item left'
			}
			
			var filterCheck = (this.props.count > 0) ? (<ul className="filters">
			<li>
				<a
					href="#/"
					className={classNames({selected: nowShowing === app.ALL_TODOS})}>
						All
				</a>
			</li>
			{' '}
			<li>
				<a
					href="#/active"
					className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
						Active
				</a>
			</li>
			{' '}
			<li>
				<a
					href="#/completed"
					className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
						Completed
				</a>
			</li>
		</ul>) : (null)

			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {countText}
					</span>
					{filterCheck}
					{clearButton}
				</footer>
			);
		}
	});
})();
