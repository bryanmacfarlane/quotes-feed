
import express from 'express';

import * as path from 'path';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {IndexController} from './controllers';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {ErrorView} from './views/error'

export async function create() {
    var app: express.Express = express();

    // app.set('view engine', 'jsx');
    // app.engine('jsx', require('express-react-views').createEngine({ beautify: true }));

    // TODO: hook up logger

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    // -------------------------------------------------------
    // routes
    // -------------------------------------------------------
    app.get('/', IndexController);

    // -------------------------------------------------------
    // error handling
    // -------------------------------------------------------

    // forward routes not found to the error handler
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        let err: any = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    // development error handler
    // will print stacktrace
    
    if (app.get('env') === 'development') {
        app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(err.status || 500);
            let el = React.createElement(ErrorView, {statusCode: res.statusCode, message: err.message})
            res.send(ReactDOM.renderToString(el));

            // res.render('error', {
            //     message: err.message,
            //     error: err
            // });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(err.status || 500);
        let el = React.createElement(ErrorView, {statusCode: res.statusCode, message: err.message})
        res.send(ReactDOM.renderToString(el));        
        // res.render('error', {
        //     message: err.message,
        //     error: {}
        // });
    });    

    return app;
}

process.on('uncaughtException', function (err) {
    console.error(err.stack);
});
