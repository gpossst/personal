import { createFileRoute } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import RandomPost from "~/components/RandomPost";
import { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import YouTube from "react-youtube";

const components = {
  YouTube: (props: any) => (
    <div className="w-full aspect-video">
      <YouTube {...props} width="100%" height="100%" />
    </div>
  ),
};

// Dynamic import function for blog post MDX files
const importBlogPost = async (postId: string) => {
  try {
    const module = await import(`../content/posts/${postId}.mdx`);
    return module.default;
  } catch (error) {
    console.error(`Failed to import blog post: ${postId}`, error);
    return null;
  }
};

export const Route = createFileRoute("/blog/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      const component = await importBlogPost(postId);
      if (component) {
        setMDXComponent(() => component);
      } else {
        setError("Failed to load blog post");
      }
    };

    loadBlogPost();
  }, [postId]);

  if (error) {
    return (
      <div className="flex flex-col items-center h-full w-full">
        <NavBar />
        <div className="max-w-3xl w-full flex-1 justify-between px-8 flex flex-col gap-8 md:pt-8">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  if (!MDXComponent) {
    return (
      <div className="flex flex-col items-center h-full w-full">
        <NavBar />
        <div className="max-w-3xl w-full flex-1 justify-between px-8 flex flex-col gap-8 md:pt-8">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-full w-full">
      <NavBar />
      <div className="max-w-3xl w-full flex-1 justify-between px-8 flex flex-col gap-8 md:pt-8">
        <div className="prose dark:prose-invert max-w-none">
          <MDXProvider components={components}>
            <MDXComponent />
          </MDXProvider>
        </div>
        <RandomPost />
      </div>
    </div>
  );
}
