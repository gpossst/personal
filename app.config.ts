import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  server: {
    preset: "netlify",
  },
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      {
        enforce: "pre",
        ...mdx({
          jsxImportSource: "react",
          providerImportSource: "@mdx-js/react",
        }),
      },
    ],
  },
});
