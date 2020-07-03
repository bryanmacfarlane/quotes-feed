import React, { Component } from 'react';

type StateProps= {
    state: string
}

export class State extends Component<StateProps, {}> {
    render() {
        return <script dangerouslySetInnerHTML={{__html: "window.__INITIAL_STATE__=" + this.props.state}}/>
    }
}
