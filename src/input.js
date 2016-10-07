import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    propTypes = {
        clickSend: React.PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="input-container">
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" />
                <button className="sendbutton" onClick={this.props.clickSend.bind(this) } >Send</button>
            </div>
        );
    }
}

Input.

export default Input;
