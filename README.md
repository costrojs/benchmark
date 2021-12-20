# Benchmarks

Benchmark between Costro and other frameworks (React, Preact, Vue, Svelte).

The example creates a single web application with a router.

Here is the size of the non-gzipped bundles in production mode (Node.js> 12, Browserlist: latest version of Chrome).

- Costro: 11 KB
- Preact: 22 KB
- Svelte: 35 KB
- Vue: 89 KB
- React: 142 KB

> Note: Costro natively includes [Store](https://costro.js.org/docs/store) management while other frameworks may require an additional dependency (e.g. Redux) which would further increase the size of the bundle.
