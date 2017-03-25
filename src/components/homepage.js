import React, { Component } from 'react';
import Header from './header';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <button type="button" class="btn btn-default">Login as Presenter</button>
        <button type="button" class="btn btn-default">Login as Viewer</button>
      </div>
    );
  }
}

export default HomePage;
