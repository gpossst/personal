import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function o(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "National Parks Checklist" }), `
`, jsx(e.p, { children: "A checklist for those who want to visit every United States National Park. I made this because I was going on a road trip to three different parks and thought it would be cool to mark every place I went." }), `
`, jsx(e.p, { children: "The biggest thing I got from this project is the availability of free data on the internet. I was able to get so much information directly from open sources like Wikipedia." }), `
`, jsx(e.p, { children: "This also gave me experience really diving into PostgreSQL. Prior to this, I had dabbled, even had some school assignment with SQL, but here I was actually in the weeds." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/npl-new", children: "Repository" }) }), `
`] }), `
`, jsx(e.h3, { children: "January 2025 to February 2025" })] });
}
function l(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(o, { ...n }) }) : o(n);
}

export { l as default };
//# sourceMappingURL=national-parks-Cp9syUB5.mjs.map
