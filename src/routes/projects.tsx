import { createFileRoute, useNavigate } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import Timeline from "~/components/Timeline";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
import { MDXProvider } from "@mdx-js/react";
import YouTube from "react-youtube";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Projects | Garrett Post",
        description: "A list of projects by Garrett Post",
      }),
    ],
  }),
});

const projects = [
  {
    name: "The Odin Project",
    location: "the-odin-project",
  },
  { name: "Clariphoto", location: "clariphoto" },
  {
    name: "Playlist Transfers",
    location: "playlist-transfers",
  },
  { name: "Reformify", location: "reformify" },
  {
    name: "National Parks",
    location: "national-parks",
  },
  { name: "Robin (Unfinished)", location: "robin" },
  {
    name: "Better Job Board (Unfinished)",
    location: "better-job-board",
  },
  {
    name: "Sports Prediction ML Models",
    location: "sports-prediction-ml-models",
  },
  {
    name: "Spontaneous",
    location: "spontaneous",
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

// Dynamic import function for MDX files
const importMDX = async (location: string) => {
  try {
    const module = await import(`../content/projects/${location}.mdx`);
    return module.default;
  } catch (error) {
    console.error(`Failed to import MDX file: ${location}`, error);
    return null;
  }
};

const components = {
  YouTube: (props: any) => (
    <div className="w-full aspect-video">
      <YouTube {...props} width="100%" height="100%" />
    </div>
  ),
};

function RouteComponent() {
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  );
  const [currentProject, setCurrentProject] = useState<string>("");
  const [newHash, setNewHash] = useState<boolean>(false);

  const hasContent = MDXComponent !== null;

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
    const projectData = projects.find((p) => p.name === project);
    if (!projectData) {
      return;
    }

    // Update URL hash
    const hash = projectToHash(project);
    window.history.pushState(null, "", `#${hash}`);

    const MDXComponent = await importMDX(projectData.location);
    if (MDXComponent) {
      setMDXComponent(() => MDXComponent);
      setCurrentProject(project);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setNewHash(true);
    }
  };

  const handleCloseProject = () => {
    setMDXComponent(null);
    setCurrentProject("");
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
          {MDXComponent ? (
            <div className="prose dark:prose-invert w-full md:w-auto md:max-w-3xl md:pt-8 pb-12">
              <MDXProvider components={components}>
                <MDXComponent />
              </MDXProvider>
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
