import React, { Component } from 'react';

type HelloProps = {
    name: string
}

export class Hello extends Component<HelloProps, {}> {
    render() {
    return <h2><div id="hello">Hello { this.props.name }</div></h2>
    }
}

// if I did import * from react, I hit this
// https://github.com/microsoft/TypeScript/issues/18134
// /** @augments {React.Component<object, object>} */

