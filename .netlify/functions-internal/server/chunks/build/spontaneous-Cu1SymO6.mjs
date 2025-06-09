import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function r(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Spontaneous" }), `
`, jsx(e.p, { children: "My goal here was to create a directory of one-day lift ticket prices for different resorts. I noticed a trend where if you bought tickets the day before going, they were cheaper than buying regularly, so I built a tool I thought would be useful for myself and others." }), `
`, jsx(e.p, { children: "This project taught me a ton about web scraping. I learned to find patterns in network history and site visualizations in order to get the data as efficiently and easily as possible." }), `
`, jsx(e.h2, { children: "Problems" }), `
`, jsx(e.p, { children: "It turns out, not everyone wants you sniffing on their website. I had to find some nifty little workarounds in order to actually get any data from Veil affiliated ski resorts. It was my first real introduction to anti-scraping methods." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/spontaneous", children: "Frontend" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/spontaneous_lambda", children: "Backend" }) }), `
`] }), `
`, jsx(e.h3, { children: "December 2024 to January 2025" })] });
}
function l(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(r, { ...n }) }) : r(n);
}

export { l as default };
//# sourceMappingURL=spontaneous-Cu1SymO6.mjs.map
