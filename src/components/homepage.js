import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import Header from './header';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = {margin: '10px auto 10px'};
    return (
      <div>
        <Header />

        <div className="container-fluid" style={containerStyle}>
          <ButtonToolbar>
            <Button bsStyle="primary">Login as Presenter</Button>
            <Button bsStyle="primary">Login as Viewer</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default HomePage;
