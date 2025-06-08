import blogPosts from "../utils/posts";
import { Link, useParams } from "@tanstack/react-router";

export default function RandomPost() {
  const currentPost = useParams({ from: "/blog/$postId" });
  const posts = blogPosts.filter(
    (post) => post.link !== currentPost.postId && !post.private
  );
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return (
    <div className="flex justify-between w-full pb-4">
      <Link
        to="/blog"
        className="hover:font-bold text-red-500 transition-all duration-150"
      >
        Back to all posts
      </Link>{" "}
      {posts.length > 0 ? (
        <div className="hidden md:block">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="">You might also like:</p>
              <Link
                to={"/blog/" + randomPost.link}
                className="hover:font-bold text-red-500 transition-all duration-150"
              >
                {randomPost.title}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
