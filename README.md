# Quotes Feed Sample Service

A sample service using modern technologies.  The goal is to focus on a scaleable solution (both in code and architecturally) while keeping the problem domain as simple: a set of quotes. For pure learning and illustrative purposes.   

## Front End (Web)

A modern [isomorphic web app](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc#.4nyzv6jea) as node express app using react+typescript and webpack:

<p align="center">
    <img src="frontend/docs/fe.png"/>
</p>

- React views and js shared between server and client (browser)
- Primary views server side rendered (SEO/perf).  
- Hydrated and augmented on client for dynamic client behaviors. 

Builds in place for fast inner loop.  Does a "layout" to a clean _dist folder (just build output) for the official container build.

```bash
$ npm install    # once
$ npm run build
$ npm start 
```

## Back End

Only accessible from the front-end via network configuration and security.

Consists of storage apis (abstracts specific implementation).  Provides relevant caching and therefore is the data single source of truth (cache coherency).  Contains background compute intensive jobs.

Front-end to backend communication is RPC and specifically `gRPC`.

Coded in `go` as `node` is not the best choice for compute intensive.


