# Rakkas with Preact on the Client

This is the standard Rakkas starter template modified to use `@preact/compat` instead of React, but only on the client. SSR is still done by React on the backend but hydration is done with Preact on the client. The resolver plugin is inlined into [vite.config.ts](./vite.config.ts) and can probably be used in other Vite-based React projects as well.

Currently, Rakkas's client-side router relies on concurrent Suspense which isn't available in Preact. So the client-side router isn't used: I used plain `a` tags instead of `Link` and reimplemented `StyledLink` in [the main layout](./src/routes/layout.tsx) to not use client-side navigation. We can implement an alternative router for Preact in the future.

This seems like a promising way to reduce the bundle size even further once Rakkas supports islands. The bundle size for each of the three pages in this demo is reduced by 120K (from ~190K to ~70K) compared to the React version (just disable the resolver plugin to see it for yourself).

## Try it out

```bash
npx degit rakkasjs/preact-on-client my-app
```

\- or -

[![Try on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rakkasjs/preact-on-client)
