//var React = require('react');
import React, { FunctionComponent } from 'react';

export interface DefaultLayoutProps {
  title: string,
  state?: string
}

// https://fettblog.eu/typescript-react/children/
export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ title, state, children }) => 
  <html>
      <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{title}</title>
          <link rel="stylesheet" href="css/bulma.min.css"/>
          <script src="js/react.production.min.js"></script>
          <script src="js/react-dom.production.min.js"></script>
      </head>
      <body>
        {children}
      </body>
      <script dangerouslySetInnerHTML={{__html: "window.__INITIAL_STATE__=" + state}}></script>
      <script src="script/index.js"></script>      
  </html>