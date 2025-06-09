import { jsxs, jsx } from 'react/jsx-runtime';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { useCallback } from 'react';

function g() {
  const t = useNavigate(), e = useLocation(), a = useCallback(async (o) => {
    if (!document.startViewTransition) {
      t({ to: o });
      return;
    }
    document.startViewTransition(async () => {
      await t({ to: o });
    });
  }, [t, e]), r = () => e.pathname === "/" || e.pathname === "";
  return jsxs("div", { className: `flex md:h-full md:flex-col ${r() ? "flex-col items-center justify-center gap-2 md:gap-0" : "items-end py-8 md:py-0 md:fixed top-4 right-4 gap-4 justify-start md:justify-center"}`, children: [jsx("h3", { className: "text-xl md:text-2xl font-bold cursor-pointer", style: { viewTransitionName: "site-title" }, onClick: () => a("/"), children: "Garrett Post" }), jsxs("div", { className: `flex ${r() ? "flex-row gap-4" : "md:flex-col gap-4 md:gap-2 items-end"}`, children: [jsx(s, { link: "/projects", text: "Projects", onNavigate: a }), jsx(s, { link: "/blog", text: "Blog", onNavigate: a })] })] });
}
function s({ link: t, text: e, onNavigate: a }) {
  return jsxs("div", { className: "group md:items-center", children: [jsx("button", { onClick: () => a(t), className: "text-red-500 text-lg", style: { viewTransitionName: `nav-${e.toLowerCase()}` }, children: e }), jsx("div", { className: "w-full h-0 md:h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left", style: { viewTransitionName: `nav-underline-${e.toLowerCase()}` } })] });
}

export { g };
//# sourceMappingURL=NavBar-dh9znK6F.mjs.map
