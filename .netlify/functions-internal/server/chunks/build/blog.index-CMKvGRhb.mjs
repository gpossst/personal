import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { g } from './NavBar-dh9znK6F.mjs';
import { n, a } from './posts-CxGuEOV-.mjs';
import 'react';

function m() {
  const a$1 = useNavigate(), i = useRouter().state.location.pathname === "/blog";
  return jsxs("div", { className: `flex flex-col items-start p-4 h-full gap-12 ${i ? "justify-center" : ""}`, children: [jsxs("div", { className: "flex flex-col gap-4", children: [jsx("h2", { className: "text-xl font-semibold text-gray-500", children: "Videos" }), jsx("div", { className: "flex gap-4 flex-wrap", children: n.length > 0 ? n.map((t) => jsxs("div", { children: [jsx("h2", { className: "text-2xl font-bold text-red-500 cursor-pointer", onClick: () => {
    a$1({ to: "/blog/$postId", params: { postId: t.link }, viewTransition: true });
  }, children: t.title }), jsx("p", { className: "text-sm text-gray-500", children: t.date })] }, t.title)) : jsx("div", { className: "flex flex-col gap-4", children: jsx("h2", { className: "text-lg text-gray-500", children: "No videos yet! Stay tuned." }) }) })] }), jsxs("div", { className: "flex flex-col gap-4", children: [jsx("h2", { className: "text-xl font-semibold text-gray-500", children: "Posts" }), a.length > 0 ? a.map((t) => jsxs("div", { children: [jsx("h2", { className: "text-2xl font-bold text-red-500 cursor-pointer", onClick: () => {
    a$1({ to: "/blog/$postId", params: { postId: t.link }, viewTransition: true });
  }, children: t.title }), jsx("p", { className: "text-sm text-gray-500", children: t.date })] }, t.title)) : jsx("div", { className: "flex flex-col gap-4", children: jsx("h2", { className: "text-lg text-gray-500", children: "No posts yet! Stay tuned." }) })] })] });
}
const N = function() {
  return jsxs("div", { className: "flex flex-col items-center justify-center h-full w-full", children: [jsx(g, {}), jsx(Outlet, {}), jsx(m, {})] });
};

export { N as component };
//# sourceMappingURL=blog.index-CMKvGRhb.mjs.map
