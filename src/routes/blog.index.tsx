import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import PostList from "~/components/PostList";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Blog | Garrett Post",
        description: "A blog by Garrett Post",
      }),
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <NavBar />
      <Outlet />
      <PostList />
    </div>
  );
}
