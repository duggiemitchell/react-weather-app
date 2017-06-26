import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnText: 'Hello'
        }
    }
    handleClick =() => {
        console.log('clicked!')
    }
render() {
    return (
        <div>
          <button onClick={this.handleClick}>{this.state.btnText}</button>
        </div>
            )
        }
}

export default Button;