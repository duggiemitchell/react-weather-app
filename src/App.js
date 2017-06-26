import React from 'react'
import Button from './Button'
import Location from './Location'
import fetchUserLocation from './utils/api'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: 'Charlotte, NC'
        }
    }
    componentWillMount() {
        fetchUserLocation()
    }
    render() {
        return (
            <div>
                <Button/>
                <Location location={this.state.userLocation}/>
            </div>
        )
    }
}

export default App