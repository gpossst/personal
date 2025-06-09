import{j as e}from"./client-B0jcN1F3.js";import{u as i}from"./YouTube.esm-CnB3KR1q.js";function s(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Playlist Transfers"}),`
`,e.jsx(n.p,{children:"Fixing yet another problem I had in my day-to-day life. I'm a Spotify subscriber, but I have friends who are Apple Music subscribers. I wanted a way to get my friend's playlist of over 1000 songs over to Spotify."}),`
`,e.jsx(n.p,{children:"My solution was a Node.js backend that used Playwright to scrape the Apple Music site, convert that to JSON, and use the Spotify API to create the playlist and find each song. Convoluted? Sure. Unnecessary? Yes. Compute-intensive? Playwright. A huge learning experience? Definitely."}),`
`,e.jsx(n.p,{children:"Oh yeah, and it was the first time I'd ever shipped a React app."}),`
`,e.jsx(n.h2,{children:"Problems"}),`
`,e.jsx(n.p,{children:"You'll notice below that I've linked two different repositories — one for frontend and one for backend. At first, I was feeling my way through Next.js APIs, despite never writing an API in my life. I then found that Next has time limits for APIs, so I had to deploy my own server on an Ubuntu instance on a Digital Ocean droplet. Wayyyy overkill, but it got the job done."}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/gpossst/playlist-transfer",children:"Frontend"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/gpossst/playlist-backend",children:"Backend"})}),`
`]}),`
`,e.jsx(n.h3,{children:"October 2024 to December 2024"})]})}function a(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as default};
