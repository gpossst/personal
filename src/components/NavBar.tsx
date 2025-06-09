import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useCallback } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback(
    async (to: string) => {
      if (!document.startViewTransition) {
        navigate({ to });
        return;
      }

      const transition = document.startViewTransition(async () => {
        await navigate({ to });
      });
    },
    [navigate, location]
  );

  const isHome = () => {
    return location.pathname === "/" || location.pathname === "";
  };

  return (
    <div
      className={`flex md:h-full md:flex-col ${
        isHome()
          ? "flex-col items-center justify-center gap-2 md:gap-0"
          : "items-end py-8 md:py-0 md:fixed top-4 right-4 gap-4 justify-start md:justify-center"
      }`}
    >
      <h3
        className="text-xl md:text-2xl font-bold cursor-pointer"
        style={{
          viewTransitionName: "site-title",
        }}
        onClick={() => handleNavigation("/")}
      >
        Garrett Post
      </h3>
      <div
        className={`flex ${
          isHome() ? "flex-row gap-4" : "md:flex-col gap-4 md:gap-2 items-end"
        }`}
      >
        <NavBarItem
          link="/projects"
          text="Projects"
          onNavigate={handleNavigation}
        />
        <NavBarItem link="/blog" text="Blog" onNavigate={handleNavigation} />
      </div>
    </div>
  );
}

function NavBarItem({
  link,
  text,
  onNavigate,
}: {
  link: string;
  text: string;
  onNavigate: (to: string) => void;
}) {
  return (
    <div className="group md:items-center">
      <button
        onClick={() => onNavigate(link)}
        className="text-red-500 text-lg"
        style={{
          viewTransitionName: `nav-${text.toLowerCase()}`,
        }}
      >
        {text}
      </button>
      <div
        className="w-full h-0 md:h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{
          viewTransitionName: `nav-underline-${text.toLowerCase()}`,
        }}
      />
    </div>
  );
}
