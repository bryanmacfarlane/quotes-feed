// Import only what we need from express
import { Router, Request, Response } from 'express';

import * as controller from './controller'
import {IndexView} from '../views/index'


// Assign router to the express.Router() instance
const router: Router = Router();

// The / here is relative to the route that the WelcomeController
// is mounted on in the server.ts file.
router.get('/', (req: Request, res: Response) => {
    // We can't use res.render('<viewName>', ...) since the tsx is compiled to js
    // so we just load it directly
    // https://stackoverflow.com/questions/40877044/typescript-2-react-js-and-express-server-side-rendering-issue
    controller.renderView(res, IndexView, {title: "Quotes", message: "Server"});
});

// Export the express.Router() instance to be used by server.ts
export const IndexController: Router = router;