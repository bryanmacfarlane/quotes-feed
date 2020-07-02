# quotes-feed

Part of overall quotes sample service 
## Web (front-end)

Composed of web views and front-end api routes for browser clients to call Ajax.

Client to front-end communication is http+json as json is the language of choice for the web and javascript specifically.

Coded in nodejs as it excels as a front end server which can share javascript and react component views between the frontend server and browser client.

https://www.typescriptlang.org/docs/handbook/react-&-webpack.html 

React Functional components for view and classes for "controls"


## Backend

Only accessible from the front-end via network configuration and security.

Consists of storage apis (abstracts specific implementation).  Provides relevant caching and therefore is the data single source of truth (cache coherency).  Contains background compute intensive jobs.

Front-end to backend communication is RPC and specifically `gRPC`.

Coded in `go` as `node` is not the best choice for compute intensive 



