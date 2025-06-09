const i = [{ title: "Cheating on Coding Interviews", date: "2025-03-30", link: "ai-interview-video", private: false }, { title: "Perfect Future with AI", date: "2025-06-08", link: "ai-ideal-future", private: false }], a = i.filter((e) => !e.link.includes("video") && !e.private).sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime()).slice(0, 3), n = i.filter((e) => e.link.includes("video") && !e.private).sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime()).slice(0, 3);
i.filter((e) => !e.link.includes("video") && !e.private).sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime());
i.filter((e) => e.link.includes("video") && !e.private).sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime());

export { a, i, n };
//# sourceMappingURL=posts-CxGuEOV-.mjs.map
