import{j as e}from"./client-B0jcN1F3.js";import{u as s}from"./YouTube.esm-CnB3KR1q.js";function o(n){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Robin"}),`
`,e.jsxs(t.p,{children:["When I'm in class, I hate taking notes. I know it helps with information retention, but I'd much rather just listen to the lecture directly. So, I made Robin, an AI note taking app. It used OpenAI's ",e.jsx(t.a,{href:"https://github.com/openai/whisper",children:"Whipser"})," to record a professor's voice during a lecture, then convert that lecture into text. After the text conversion, it used Google's Gemini models, which were impressively cheap, to clean up the text, produce flashcards, and more."]}),`
`,e.jsx(t.p,{children:"Overall, it was a super fun project, because I could actually test it in class. I could go into class, press record, and be free to listen to the lecture without distracitons. I learned a ton about how to send requests to and handle responses from LLM providers, which are finally starting to standardize."}),`
`,e.jsxs(t.p,{children:["The idea fizzled out when I found Google's ",e.jsx(t.a,{href:"https://notebooklm.google/",children:"NotebookLM"}),", pretty much Robin but made by the third largest company in the world with use of their own models and lots more money."]}),`
`,e.jsx(t.h2,{children:"Problems"}),`
`,e.jsx(t.p,{children:"I didn't realize how difficult text parsing was with LLM responses. Working with text is easy, but working with text when you don't know the format of the output is much harder."}),`
`,e.jsx(t.h2,{children:"Links"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/gpossst/robin",children:"Repository"})}),`
`]}),`
`,e.jsx(t.h3,{children:"April 2025"})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default};
