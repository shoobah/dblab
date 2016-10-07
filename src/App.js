import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input'
import Signature from './images/Signature.svg'

class App extends Component {

  clickSend(e) {
    console.log(e)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wilkommen aus der React schmutzfabrik</h2>
          <svg src={Signature} />
        </div>
        <Input clickSend={this.clickSend} />
      </div>
    );
  }
}

export default App;
