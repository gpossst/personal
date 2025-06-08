import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import PostList from "~/components/PostList";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
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
