# quotes-feed

Part of overall quotes sample service 

## Web (front-end)

A modern [isomorphic web app](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc#.4nyzv6jea) using:

ExpressJS + Typescript + React + WebPack

Isomorphic : Server side rendered (SEO, perf), Client side hydrated (dynamic app).  Shared javascript and react views between the server and client.  The reason for nodejs frontend in this sample architecture.

Composed of web views and front-end api routes for browser clients to call Ajax.

Client to front-end communication is http+json as json is the language of choice for the web and javascript specifically.

Builds in place for fast inner loop.  Does a "layout" to a clean _dist folder (just build output) for the official container build.

## Backend

Only accessible from the front-end via network configuration and security.

Consists of storage apis (abstracts specific implementation).  Provides relevant caching and therefore is the data single source of truth (cache coherency).  Contains background compute intensive jobs.

Front-end to backend communication is RPC and specifically `gRPC`.

Coded in `go` as `node` is not the best choice for compute intensive 

## References

[Typescript: React & WebPack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#add-a-typescript-configuration-file)
[Typescript and React](https://fettblog.eu/typescript-react/components/)
[Server and Client side React](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p)
[Express & Typescript](https://github.com/BrianDGLS/express-ts)
[Render React views JIT](// https://stackoverflow.com/questions/40877044/typescript-2-react-js-and-express-server-side-rendering-issue)
[Isomorphic React Web App](https://medium.com/@diegocasmo/using-reacts-context-to-pass-variables-from-the-server-to-the-client-f2ce5f274172)




