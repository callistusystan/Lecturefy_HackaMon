import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" class="btn btn-default">Login as Presenter</button>
        <button type="button" class="btn btn-default">Login as Viewer</button>
      </div>
    );
  }
}

export default HomePage;
