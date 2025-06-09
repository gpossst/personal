import { jsxs, jsx } from 'react/jsx-runtime';
import { MDXProvider } from '@mdx-js/react';
import { useParams, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import G from 'react-youtube';
import { g } from './NavBar-dh9znK6F.mjs';
import { i } from './posts-CxGuEOV-.mjs';

const k = { YouTube: (t) => jsx("div", { className: "w-full aspect-video", children: jsx(G, { ...t, width: "100%", height: "100%" }) }) };
function y({ link: t, newHash: e, setNewHash: n }) {
  const { postId: r } = useParams({ from: t }), [a, u] = useState(null), [i, x] = useState(null);
  return useEffect(() => {
    (async () => {
      var _a;
      try {
        n && n(false);
        let s;
        if (t === "/projects") {
          const d = window.location.hash.slice(1), b = [{ name: "The Odin Project", location: "/src/content/projects/the-odin-project.mdx" }, { name: "Clariphoto", location: "/src/content/projects/clariphoto.mdx" }, { name: "Playlist Transfers", location: "/src/content/projects/playlist-transfers.mdx" }, { name: "Reformify", location: "/src/content/projects/reformify.mdx" }, { name: "National Parks", location: "/src/content/projects/national-parks.mdx" }, { name: "Robin (Unfinished)", location: "/src/content/projects/robin.mdx" }, { name: "Better Job Board (Unfinished)", location: "/src/content/projects/better-job-board.mdx" }, { name: "Sports Prediction ML Models", location: "/src/content/projects/sports-prediction-ml-models.mdx" }, { name: "Spontaneous", location: "/src/content/projects/spontaneous.mdx" }], v = (l) => l.replace(/\s+/g, "-").replace(/[()]/g, ""), m = b.find((l) => v(l.name).toLowerCase() === d.toLowerCase());
          if (!m) throw new Error(`Project not found for hash: ${d}`);
          s = `../../src/content/projects/${((_a = m.location.split("/").pop()) == null ? void 0 : _a.replace(".mdx", "")) || ""}.mdx`;
        } else s = `../../src/content/posts/${r}.mdx`;
        const j = await import(s);
        u(() => j.default);
      } catch (s) {
        x("Failed to load post content"), console.error("Error loading MDX:", s);
      }
    })();
  }, [r, t, e]), i ? jsx("div", { className: "text-red-500", children: i }) : a ? jsx("div", { className: "prose dark:prose-invert max-w-none", children: jsx(MDXProvider, { components: k, children: jsx(a, {}) }) }) : jsx("div", { children: "Loading..." });
}
function C() {
  const t = useParams({ from: "/blog/$postId" }), e = i.filter((r) => r.link !== t.postId && !r.private), n = e[Math.floor(Math.random() * e.length)];
  return jsxs("div", { className: "flex justify-between w-full pb-4", children: [jsx(Link, { to: "/blog", className: "hover:font-bold text-red-500 transition-all duration-150", children: "Back to all posts" }), " ", e.length > 0 ? jsx("div", { className: "hidden md:block", children: jsx("div", { className: "flex flex-col gap-2", children: jsxs("div", { className: "flex gap-2", children: [jsx("p", { className: "", children: "You might also like:" }), jsx(Link, { to: "/blog/" + n.link, className: "hover:font-bold text-red-500 transition-all duration-150", children: n.title })] }) }) }) : null] });
}
const S = function() {
  return jsxs("div", { className: "flex flex-col items-center h-full w-full", children: [jsx(g, {}), jsxs("div", { className: "max-w-3xl w-full flex-1 justify-between px-8 flex flex-col gap-8 md:pt-8", children: [jsx(y, { link: "/blog/$postId" }), jsx(C, {})] })] });
};

export { S as component };
//# sourceMappingURL=blog._postId-Cv432NNX.mjs.map
