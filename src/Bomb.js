// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.props.initialCount !== 0) {
            return <h1>{this.props.initialCount} seconds left before I go boom!</h1>
        }
        return <h1>Boom!</h1>
    }
}

export default Bomb