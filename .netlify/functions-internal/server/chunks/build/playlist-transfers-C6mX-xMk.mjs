import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function o(t) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...t.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Playlist Transfers" }), `
`, jsx(e.p, { children: "Fixing yet another problem I had in my day-to-day life. I'm a Spotify subscriber, but I have friends who are Apple Music subscribers. I wanted a way to get my friend's playlist of over 1000 songs over to Spotify." }), `
`, jsx(e.p, { children: "My solution was a Node.js backend that used Playwright to scrape the Apple Music site, convert that to JSON, and use the Spotify API to create the playlist and find each song. Convoluted? Sure. Unnecessary? Yes. Compute-intensive? Playwright. A huge learning experience? Definitely." }), `
`, jsx(e.p, { children: "Oh yeah, and it was the first time I'd ever shipped a React app." }), `
`, jsx(e.h2, { children: "Problems" }), `
`, jsx(e.p, { children: "You'll notice below that I've linked two different repositories \u2014 one for frontend and one for backend. At first, I was feeling my way through Next.js APIs, despite never writing an API in my life. I then found that Next has time limits for APIs, so I had to deploy my own server on an Ubuntu instance on a Digital Ocean droplet. Wayyyy overkill, but it got the job done." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/playlist-transfer", children: "Frontend" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/playlist-backend", children: "Backend" }) }), `
`] }), `
`, jsx(e.h3, { children: "October 2024 to December 2024" })] });
}
function l(t = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...t.components };
  return e ? jsx(e, { ...t, children: jsx(o, { ...t }) }) : o(t);
}

export { l as default };
//# sourceMappingURL=playlist-transfers-C6mX-xMk.mjs.map
