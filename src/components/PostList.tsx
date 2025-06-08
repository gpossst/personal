import { useNavigate, useRouter } from "@tanstack/react-router";
import { recentPosts, recentVideos } from "~/utils/posts";

export default function PostList() {
  const navigate = useNavigate();
  const router = useRouter();

  const isBlogPage = router.state.location.pathname === "/blog";

  return (
    <div
      className={`flex flex-col items-start p-4 h-full gap-12 ${
        isBlogPage ? "justify-center" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-500">Videos</h2>
        <div className="flex gap-4 flex-wrap">
          {recentVideos.length > 0 ? (
            recentVideos.map((post) => (
              <div key={post.title}>
                <h2
                  className="text-2xl font-bold text-red-500 cursor-pointer"
                  onClick={() => {
                    navigate({
                      to: "/blog/$postId",
                      params: { postId: post.link },
                      viewTransition: true,
                    });
                  }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg text-gray-500">
                No videos yet! Stay tuned.
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-500">Posts</h2>
        {recentPosts.length > 0 ? (
          recentPosts.map((post) => (
            <div key={post.title}>
              <h2
                className="text-2xl font-bold text-red-500 cursor-pointer"
                onClick={() => {
                  navigate({
                    to: "/blog/$postId",
                    params: { postId: post.link },
                    viewTransition: true,
                  });
                }}
              >
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-gray-500">No posts yet! Stay tuned.</h2>
          </div>
        )}
      </div>
    </div>
  );
}
