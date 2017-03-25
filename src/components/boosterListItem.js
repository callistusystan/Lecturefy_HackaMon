import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class BoosterListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
	    <ListGroupItem>
				{props.name}
			</ListGroupItem>
	  );
	}
}

export default BoosterListItem;
