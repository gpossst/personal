import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function r(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "The Odin Project" }), `
`, jsx(e.p, { children: "Where it all started. After starting and stopping a number of times through the Covid-19 lockdown, The Odin Project was the first program that I stuck to. I on-and-off worked on The Odin Project's coursework over the course of about a year." }), `
`, jsx(e.p, { children: "I wish I had been more enthused initially, but I didn't truly get the excitement to code until later on. The beginning steps, when you're just re-dredging things everyone has done, was the biggest reason I was so slow in learning over that period." }), `
`, jsx(e.h2, { children: "Projects" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/top-ttt", children: "Tic-Tac-Toe" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/top-todo", children: "To-Do" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/top-calculator2", children: "Calculator (Twice)" }) }), `
`] }), `
`, jsx(e.h3, { children: "June 2022 to August 2023" })] });
}
function a(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(r, { ...n }) }) : r(n);
}

export { a as default };
//# sourceMappingURL=the-odin-project-dYSy2rNJ.mjs.map
