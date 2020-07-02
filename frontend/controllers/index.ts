// Import only what we need from express
import { Router, Request, Response } from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';

import {IndexView} from '../views/index'
//const IndexComponent = React.createFactory(IndexView)

// https://stackoverflow.com/questions/40877044/typescript-2-react-js-and-express-server-side-rendering-issue


// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    // res.render('index', { name: 'World' });
    //ReactDOM.renderToNodeStream
    let el = React.createElement(IndexView, {title: "Worlds"})
    res.send(ReactDOM.renderToString(el));
});

// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;

//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });

// Export the express.Router() instance to be used by server.ts
export const IndexController: Router = router;