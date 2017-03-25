import React, { Component } from 'react';
import { ButtonGroup,ButtonToolbar, Button, Jumbotron } from 'react-bootstrap';

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
            <div className="buttonToolbar">
                <Button bsStyle="primary" bsSize="large" className="center-button">Login as Presenter</Button>
                <Button bsStyle="primary" bsSize="large" className="center-button">Login as Viewer</Button>
            </div>
      </div>
    );
  }
}

export default HomePage;
