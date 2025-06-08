import { createFileRoute } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <NavBar />
    </div>
  );
}
