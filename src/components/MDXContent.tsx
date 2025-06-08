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

export default function MDXContent() {
  const { postId } = useParams({ from: "/blog/$postId" });
  const [MDXComponent, setMDXComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        // Dynamically import the MDX file
        const module = await import(`../../public/posts/${postId}.mdx`);
        setMDXComponent(() => module.default);
      } catch (err) {
        setError("Failed to load post content");
        console.error("Error loading MDX:", err);
      }
    };

    loadMDX();
  }, [postId]);

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
