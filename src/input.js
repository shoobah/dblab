import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    render() {
        return (
            <div className="input-container">
                <label for="name">Name: </label>
                <input id="name" type="textbox" />
            </div>
        );
    }
}

export default Input;