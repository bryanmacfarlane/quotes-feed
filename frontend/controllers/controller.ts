import { Response } from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

export function renderView<P extends {}>(
    res: Response,
    type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
    props: any,
    ...children: React.ReactNode[]): void {
    
    let el = React.createElement(type, props, children);
    res.write("<!DOCTYPE html>")
    res.write(ReactDOM.renderToString(el));
    res.end();
}
