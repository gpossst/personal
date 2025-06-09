import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function o(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Better Job Board" }), `
`, jsxs(e.p, { children: ["This was right after the release of ", jsx(e.a, { href: "https://www.interviewcoder.co/", children: "Interview Coder" }), ". I wanted to find a way for people like me, who truly love programming, problem solving, and learning to get a leg up over those who were willing to cheat their way into a job. The goal was to let users create a single profile with all of their information. We'd scan their repositories for relevant information, such as technologies or languages, and recommend them jobs that fit their skillset. From there, all they'd have to do is check an interested box for a job listing. Our algorithms would recommend candidates to recruiters based on their filters and preferences, and recruiters could one-click contact potential employees. This system could save candidates time and companies money, and make the entire job market much more efficient."] }), `
`, jsx(e.p, { children: "Overall, I really liked this idea. It got me thinking much more about my approach to data and using algorithms to serve that data to users. I think there's a possibility I return to this in the future, as recruiting in the tech space sucks right now." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: "Repository is private for now" }), `
`] }), `
`, jsx(e.h3, { children: "April 2025" })] });
}
function l(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(o, { ...n }) }) : o(n);
}

export { l as default };
//# sourceMappingURL=better-job-board-B0QtKlGj.mjs.map
