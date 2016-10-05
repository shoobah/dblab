import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wilkommen aus der React schmutzfabrik</h2>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
