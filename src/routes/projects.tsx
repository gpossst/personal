import { createFileRoute } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import Timeline from "~/components/Timeline";
import Markdown from "react-markdown";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const projects = [
  {
    name: "The Odin Project",
    location: "/public/projects/the-odin-project.md",
  },
  { name: "Clariphoto", location: "/public/projects/clariphoto.md" },
  {
    name: "Playlist Transfers",
    location: "/public/projects/playlist-transfers.md",
  },
  { name: "Reformify", location: "/public/projects/reformify.md" },
  { name: "National Parks", location: "/public/projects/national-parks.md" },
  { name: "Robin (Unfinished)", location: "/public/projects/robin.md" },
  {
    name: "Better Job Board (Unfinished)",
    location: "/public/projects/better-job-board.md",
  },
  {
    name: "Sports Prediction ML Models",
    location: "/public/projects/sports-prediction-ml-models.md",
  },
  {
    name: "Spontaneous",
    location: "/public/projects/spontaneous.md",
  },
];

function RouteComponent() {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const hasContent = markdownContent !== "";

  const handleOpenProject = async (project: string) => {
    const projectLocation = projects.find((p) => p.name === project)?.location;
    if (!projectLocation) {
      return;
    }
    const md = await fetch(projectLocation);
    const mdText = await md.text();
    console.log(mdText);
    setMarkdownContent(mdText);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-full w-full flex flex-col md:flex-row items-center md:items-start">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-[5]">
        <div className={hasContent ? "hidden md:block" : "block"}>
          <Timeline handleOpenProject={handleOpenProject} />
        </div>
        <div className="flex-1 md:p-0 px-8">
          {markdownContent ? (
            <div className="prose dark:prose-invert w-full md:w-auto md:max-w-3xl md:pt-8 pb-12">
              <Markdown>{markdownContent}</Markdown>
            </div>
          ) : (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 items-center justify-center">
              <div className="hidden md:block">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <PacmanLoader color="oklch(63.7% 0.237 25.331)" />
                  Choose a project from the timeline!
                </div>
              </div>
            </div>
          )}
        </div>
        {hasContent && (
          <div className="block md:hidden">
            <button
              className="fixed flex bottom-4 right-4 text-red-500 rounded-md items-center gap-2"
              onClick={() => setMarkdownContent("")}
            >
              <FaArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        )}
      </div>
      <div className="flex-1 h-full"></div>
    </div>
  );
}
