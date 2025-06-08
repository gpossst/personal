const blogPosts = [
  {
    title: "Cheating on Coding Interviews",
    date: "2025-03-30",
    link: "ai-interview-video",
    private: false,
  },
  {
    title: "Perfect Future with AI",
    date: "2025-06-08",
    link: "ai-ideal-future",
    private: false,
  },
];

export const recentPosts = blogPosts
  .filter((post) => !post.link.includes("video") && !post.private)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export const recentVideos = blogPosts
  .filter((post) => post.link.includes("video") && !post.private)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export const allPosts = blogPosts
  .filter((post) => !post.link.includes("video") && !post.private)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const allVideos = blogPosts
  .filter((post) => post.link.includes("video") && !post.private)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default blogPosts;
