import React from 'react';
import ReactDOM from "react-dom";

import { Clock } from "../../views/components/clock"
import {IndexView} from '../../views/index'

export interface CustomWindow extends Window {
    __INITIAL_STATE__: string;
}

declare let window: CustomWindow;

let idxState: any = window.__INITIAL_STATE__

let initTitle=idxState["title"];
let initMsg=idxState["message"];

function newView(message: string) {
    return <IndexView title={initTitle} message={message}/>
}

ReactDOM.hydrate(
    newView(initMsg), 
    document.documentElement);

// every .5 seconds update message
// props are immutable so we have to construct a new view and render it on the parent element
// don't worry, react diffs the DOM tree and only updates what changes
let i = 0;
setInterval(() => {
    i=++i%3;
    let marks="";
    for (let j=0; j<=i; j++) {
        marks = marks + "!"
    }

    let msg = initMsg + marks;
    ReactDOM.render(newView(msg), document.documentElement)
}, 500);

// secondary data can be added client side
// client adds a component (the clock)
ReactDOM.render(
    <Clock/>,
    document.getElementById("clock")
);