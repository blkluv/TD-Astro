import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import db from "@astrojs/db";
import icon from "astro-icon";
import vercel from "@astrojs/vercel"; // ✅ correct import, no serverless/edge
import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  site: "https://twerk.dance",

  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    db(),
    simpleStackForm(),
  ],

  output: "server",

  adapter: vercel({
    analytics: true,
    edgeMiddleware: false, // safer for Astro DB
  }),

  vite: {
    ssr: {
      noExternal: ["astro-icon", "simple-stack-form"],
    },
  },
});
