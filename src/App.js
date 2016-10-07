import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './input'
import Signature from './images/Signature.svg'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    clickSend = (e) => {
        this.setState({
            value: e
        })
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Wilkommen aus der React schmutzfabrik</h2>
            </div>
            <Input clickSend={this.clickSend} />
            <span>{this.state.value}</span>
            <img role="presentation" className="signature" src={Signature} />
          </div>
        )
    }
}

export default App
