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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
