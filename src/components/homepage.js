import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import Header from './header';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = {margin: 'auto'};
    return (
      <div>
        <Header />

        <Jumbotron style={containerStyle}>
          <Button bsStyle="primary">Login as Presenter</Button>
          <Button bsStyle="primary">Login as Viewer</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;
