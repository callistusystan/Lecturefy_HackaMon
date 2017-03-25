import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Header from './header';

const boosters = ["Chat Booster", "Poll Booster"];

class BoosterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headerStyle = {marginTop: '0'};
    return (
      <div>
        <h2 styles={headerStyle}>Current boosters</h2>

        <ListGroup>
          <ListGroupItem>Chat booster</ListGroupItem>
          <ListGroupItem>Poll booster</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default BoosterView;
