import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default (props) => {
	return (
    <ListGroupItem>
			{props.name}
		</ListGroupItem>
  );
};
