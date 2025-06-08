import { createFileRoute } from "@tanstack/react-router";
import MDXContent from "~/components/MDXContent";
import NavBar from "~/components/NavBar";
import RandomPost from "~/components/RandomPost";

export const Route = createFileRoute("/blog/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <NavBar />
      <div className="max-w-3xl w-full flex-1 justify-between px-8 flex flex-col gap-8 md:pt-8">
        <MDXContent />
        <RandomPost />
      </div>
    </div>
  );
}
