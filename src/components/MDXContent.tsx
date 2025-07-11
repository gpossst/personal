import { MDXProvider } from "@mdx-js/react";
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const components = {
  YouTube: (props: any) => (
    <div className="w-full aspect-video">
      <YouTube {...props} width="100%" height="100%" />
    </div>
  ),
};

export default function MDXContent({
  link,
  newHash,
  setNewHash,
}: {
  link: string;
  newHash?: boolean;
  setNewHash?: (newHash: boolean) => void;
}) {
  const { postId } = useParams({ from: link as any });
  const [MDXComponent, setMDXComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        if (setNewHash) {
          setNewHash(false);
        }
        let importPath: string;
        if (link === "/projects") {
          // Get project hash from URL
          const projectHash = window.location.hash.slice(1);

          // Convert hash back to project name, then get the correct filename
          // We need to import the projects array and helper functions
          const projects = [
            {
              name: "The Odin Project",
              location: "/src/content/projects/the-odin-project.mdx",
            },
            {
              name: "Clariphoto",
              location: "/src/content/projects/clariphoto.mdx",
            },
            {
              name: "Playlist Transfers",
              location: "/src/content/projects/playlist-transfers.mdx",
            },
            {
              name: "Reformify",
              location: "/src/content/projects/reformify.mdx",
            },
            {
              name: "National Parks",
              location: "/src/content/projects/national-parks.mdx",
            },
            {
              name: "Robin (Unfinished)",
              location: "/src/content/projects/robin.mdx",
            },
            {
              name: "Better Job Board (Unfinished)",
              location: "/src/content/projects/better-job-board.mdx",
            },
            {
              name: "Sports Prediction ML Models",
              location: "/src/content/projects/sports-prediction-ml-models.mdx",
            },
            {
              name: "Spontaneous",
              location: "/src/content/projects/spontaneous.mdx",
            },
          ];

          const projectToHash = (projectName: string) => {
            return projectName.replace(/\s+/g, "-").replace(/[()]/g, "");
          };

          const project = projects.find(
            (p) =>
              projectToHash(p.name).toLowerCase() === projectHash.toLowerCase()
          );
          if (!project) {
            throw new Error(`Project not found for hash: ${projectHash}`);
          }

          // Extract the filename from the location
          const filename =
            project.location.split("/").pop()?.replace(".mdx", "") || "";
          importPath = `../../src/content/projects/${filename}.mdx`;
        } else {
          importPath = `../../src/content/posts/${postId}.mdx`;
        }

        // Dynamically import the MDX file
        const module = await import(importPath);
        setMDXComponent(() => module.default);
      } catch (err) {
        setError("Failed to load post content");
        console.error("Error loading MDX:", err);
      }
    };

    loadMDX();
  }, [postId, link, newHash]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!MDXComponent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXProvider components={components}>
        <MDXComponent />
      </MDXProvider>
    </div>
  );
}
