import React, {Component} from 'react'
import './Input.css'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameTxt: ''
        }
    }

    static propTypes = {
        clickSend: React.PropTypes.func.isRequired
    }

    handleChange = (event) => {
        this.props.clickSend(event.target.value)
        this.setState(
            {nameTxt: event.target.value}
        )
    }

    render() {
        return (
            <div className="input-container">
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" value={this.state.nameTxt} onChange={this.handleChange}/>
                <button className="sendbutton" onClick={this.props.clickSend.bind(this, this.state.nameTxt) } >Send</button>
            </div>
        )
    }
}

export default Input
