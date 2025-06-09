import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function o(t) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...t.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Clariphoto" }), `
`, jsx(e.p, { children: "I had always had this idea - Tinder for photos. You just swipe left on photos you want to delete and right on those you want to keep. It turns out, it had already been made. I made it anyways just for the sake of learning, and I learned a lot." }), `
`, jsx(e.p, { children: "This was my first real self-inspired project, and I made the genius decision to do it in a language and framework that I had never worked with before. It was my first real experience teaching myself a new language and technology." }), `
`, jsx(e.p, { children: "Overall, it was a great experience for me to really jump in. I found the strength in learning as I went and developed strategies to quickly learn technologies. I also discovered a huge jump in learning rate by doing something I was inspired to do, albeit far over my head." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/photo-app", children: "Repository" }) }), `
`] }), `
`, jsx(e.p, { children: "I let my Apple Developer License lapse, so all we've got left is the code." }), `
`, jsx(e.h3, { children: "Jan 2024 to May 2024" })] });
}
function h(t = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...t.components };
  return e ? jsx(e, { ...t, children: jsx(o, { ...t }) }) : o(t);
}

export { h as default };
//# sourceMappingURL=clariphoto-DnRD4ErW.mjs.map
