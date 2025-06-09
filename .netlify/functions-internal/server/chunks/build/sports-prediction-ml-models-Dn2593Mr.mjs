import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function o(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Sports Prediction AI Models" }), `
`, jsxs(e.p, { children: ["I was tired of web development and had my interest sparked by ", jsx(e.a, { href: "https://www.youtube.com/watch?v=LkJpNLIaeVk", children: "this" }), " video. I decided to learn the basics of neural networks, then jump in with an algorithm that would take NBA team statistics and predict a team's win percentage. I've since begun working on a model for the MLB as well, going so far as to use the MLB's unofficial, official stats API to get a night's schedule, get each team's stats, and predict the outcome for every game."] }), `
`, jsx(e.p, { children: "I learned a ton about neural networks, data manipulation, data normalization, and data availability. I realized that despite having a ton of fun with web development, there's a lot of programming that I've neglected to explore." }), `
`, jsx(e.h2, { children: "Problems" }), `
`, jsx(e.p, { children: "For a sport as stat-intensive as baseball, I found it difficult to find comprehensive historical box scores for games. I was forced to sort through Reddit threads and documentation to finally land on a Kaggle dataset that had what I needed." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/mlb-ai", children: "MLB" }) }), `
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/nba-ai", children: "NBA" }) }), `
`] }), `
`, jsx(e.h3, { children: "May 2025 to June 2025" })] });
}
function d(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(o, { ...n }) }) : o(n);
}

export { d as default };
//# sourceMappingURL=sports-prediction-ml-models-Dn2593Mr.mjs.map
