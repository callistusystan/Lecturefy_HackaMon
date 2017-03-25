import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class BoosterListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};
	}

	render() {
		return (
			<div>
				<h4>
					{this.props.children}
				</h4>
				<p>
					Hello world
				</p>
			</div>
	  );
	}
}

export default BoosterListItem;
