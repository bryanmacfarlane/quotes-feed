// Import only what we need from express
import { Router, Request, Response } from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';

import {IndexView} from '../views/index'


// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // We can't use res.render('<viewName>', ...) since the tsx is compiled to js
    // so we just load it directly
    // https://stackoverflow.com/questions/40877044/typescript-2-react-js-and-express-server-side-rendering-issue
    let state = {title: "Quotes", message: "Worlds"};
    let el = React.createElement(IndexView, {
        title: state.title, 
        message: state.message, 
        state: JSON.stringify(state)})
    
    res.send(ReactDOM.renderToString(el));
});

// Export the express.Router() instance to be used by server.ts
export const IndexController: Router = router;