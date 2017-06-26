import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true
        }
    }
    handleClick =() => {
        this.setState(previousState => ({
          isToggleOn: !previousState.isToggleOn
        }))
    }
render() {
    return (
        <div>
          <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Hi': 'Bye'}</button>
        </div>
            )
        }
}

export default Button;