import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class BoosterListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};
	}

	renderComponent() {
		if (this.state.expanded) {
			const componentStyle = { backgroundColor: 'gray' };
			return (
				<Jumbotron>
					Hello world
				</Jumbotron>
			);
		}
	}

	toggleExpand() {
		this.setState({
			expanded: !this.state.expanded
		});
		console.log(this.state.expanded);
	}

	render() {
		return (
			<div onClick={this.toggleExpand.bind(this)}>
				<h4>
					{this.props.children} {`\u00bb`}
				</h4>
				{this.renderComponent()}
			</div>
	  );
	}
}

export default BoosterListItem;
