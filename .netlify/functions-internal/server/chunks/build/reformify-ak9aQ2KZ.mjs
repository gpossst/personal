import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function i(s) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...s.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Reformify" }), `
`, jsx(e.p, { children: "My first time really using Next.js. Prior to this, I had basically used Next as a router and for boilerplate. Here, I would go all out." }), `
`, jsx(e.p, { children: "I made this as a way to simplify forms. The goal was to avoid having to spin up a database, save users from spam, and let them build with ease. It's pretty much just Next.js APIs that use API tokens to verify users, then insert any form submssions into a database. It's then got a rather ugly (sorry) UI that lets users view any submssions they've had." }), `
`, jsx(e.p, { children: "I learned a lot about APIs during this process, the OpenAPI spec is a big thing. I might revisit it at some point, but things have been too busy lately." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://reformify.dev", children: "Reformify" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/reformify", children: "Repository" }) }), `
`] }), `
`, jsx(e.h3, { children: "November 2024 to March 2025" })] });
}
function l(s = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...s.components };
  return e ? jsx(e, { ...s, children: jsx(i, { ...s }) }) : i(s);
}

export { l as default };
//# sourceMappingURL=reformify-ak9aQ2KZ.mjs.map
