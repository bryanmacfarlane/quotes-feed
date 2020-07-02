import React from 'react';
import ReactDOM from "react-dom";

import { Hello } from "../../views/components/hello";
import { Clock } from "../../views/components/clock"

// TODO: pass state down and hydrate
// https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p
// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#add-a-typescript-configuration-file
/* <Hello name={window.__INITIAL__DATA__.name} */

ReactDOM.render(
    <Hello name="World!" />,
    document.getElementById("hello")
);

ReactDOM.render(
    <Clock/>,
    document.getElementById("clock")
);