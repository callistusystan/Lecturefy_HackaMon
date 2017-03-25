import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary">Login as Presenter</Button>
        <Button bsStyle="primary">Login as Viewer</Button>
      </ButtonToolbar>
    );
  }
}

export default HomePage;
