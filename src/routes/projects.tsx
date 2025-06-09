import { createFileRoute, useNavigate } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import Timeline from "~/components/Timeline";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
import MDXContent from "~/components/MDXContent";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const projects = [
  {
    name: "The Odin Project",
    location: "/public/projects/the-odin-project.mdx",
  },
  { name: "Clariphoto", location: "/public/projects/clariphoto.mdx" },
  {
    name: "Playlist Transfers",
    location: "/public/projects/playlist-transfers.mdx",
  },
  { name: "Reformify", location: "/public/projects/reformify.mdx" },
  { name: "National Parks", location: "/public/projects/national-parks.mdx" },
  { name: "Robin (Unfinished)", location: "/public/projects/robin.mdx" },
  {
    name: "Better Job Board (Unfinished)",
    location: "/public/projects/better-job-board.mdx",
  },
  {
    name: "Sports Prediction ML Models",
    location: "/public/projects/sports-prediction-ml-models.mdx",
  },
  {
    name: "Spontaneous",
    location: "/public/projects/spontaneous.mdx",
  },
];

// Helper function to convert project name to URL-friendly hash
const projectToHash = (projectName: string) => {
  return projectName.replace(/\s+/g, "-").replace(/[()]/g, "");
};

// Helper function to convert hash back to project name
const hashToProject = (hash: string) => {
  return projects.find((p) => projectToHash(p.name) === hash)?.name || null;
};

function RouteComponent() {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [newHash, setNewHash] = useState<boolean>(false);

  const hasContent = markdownContent !== "";

  // Handle URL hash on component mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const projectName = hashToProject(hash);
      if (projectName) {
        handleOpenProject(projectName);
      }
    }
  }, []);

  const handleOpenProject = async (project: string) => {
    const projectLocation = projects.find((p) => p.name === project)?.location;
    if (!projectLocation) {
      return;
    }

    // Update URL hash
    const hash = projectToHash(project);
    window.history.pushState(null, "", `#${hash}`);

    const md = await fetch(projectLocation);
    const mdText = await md.text();

    setMarkdownContent(mdText);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setNewHash(true);
  };

  const handleCloseProject = () => {
    setMarkdownContent("");
    // Clear the hash from URL
    window.history.pushState(null, "", window.location.pathname);
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
              <MDXContent
                link={"/projects"}
                newHash={newHash}
                setNewHash={setNewHash}
              />
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
              onClick={handleCloseProject}
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
