import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Pineapple JS</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
