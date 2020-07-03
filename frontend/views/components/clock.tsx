import React, { Component } from 'react';

type ClockState = {
    time: Date 
}

export class Clock extends Component<{}, ClockState> {

    // method to update state to current time
    tick() {
        this.setState({
            time: new Date()
        });
    }

    // before it mounts, we set state
    componentWillMount() {
        this.tick();
    }

    // after it mounts, we update state every second
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return <p>Current Time: {this.state.time.toLocaleTimeString()}</p>
    }
}