import React, { Component } from 'react';
import { Button} from 'react-bootstrap';

import Header from './header';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
            <div className="buttonContainer">
                <Button bsStyle="primary" bsSize="large" className="center-button">Login as Presenter</Button>
                <Button bsStyle="primary" bsSize="large" className="center-button">Login as Viewer</Button>
            </div>
      </div>
    );
  }
}

export default HomePage;
