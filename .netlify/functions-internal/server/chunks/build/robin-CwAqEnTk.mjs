import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

function r(n) {
  const e = { a: "a", h1: "h1", h2: "h2", h3: "h3", li: "li", p: "p", ul: "ul", ...useMDXComponents(), ...n.components };
  return jsxs(Fragment, { children: [jsx(e.h1, { children: "Robin" }), `
`, jsxs(e.p, { children: ["When I'm in class, I hate taking notes. I know it helps with information retention, but I'd much rather just listen to the lecture directly. So, I made Robin, an AI note taking app. It used OpenAI's ", jsx(e.a, { href: "https://github.com/openai/whisper", children: "Whipser" }), " to record a professor's voice during a lecture, then convert that lecture into text. After the text conversion, it used Google's Gemini models, which were impressively cheap, to clean up the text, produce flashcards, and more."] }), `
`, jsx(e.p, { children: "Overall, it was a super fun project, because I could actually test it in class. I could go into class, press record, and be free to listen to the lecture without distracitons. I learned a ton about how to send requests to and handle responses from LLM providers, which are finally starting to standardize." }), `
`, jsxs(e.p, { children: ["The idea fizzled out when I found Google's ", jsx(e.a, { href: "https://notebooklm.google/", children: "NotebookLM" }), ", pretty much Robin but made by the third largest company in the world with use of their own models and lots more money."] }), `
`, jsx(e.h2, { children: "Problems" }), `
`, jsx(e.p, { children: "I didn't realize how difficult text parsing was with LLM responses. Working with text is easy, but working with text when you don't know the format of the output is much harder." }), `
`, jsx(e.h2, { children: "Links" }), `
`, jsxs(e.ul, { children: [`
`, jsx(e.li, { children: jsx(e.a, { href: "https://github.com/gpossst/robin", children: "Repository" }) }), `
`] }), `
`, jsx(e.h3, { children: "April 2025" })] });
}
function l(n = {}) {
  const { wrapper: e } = { ...useMDXComponents(), ...n.components };
  return e ? jsx(e, { ...n, children: jsx(r, { ...n }) }) : r(n);
}

export { l as default };
//# sourceMappingURL=robin-CwAqEnTk.mjs.map
