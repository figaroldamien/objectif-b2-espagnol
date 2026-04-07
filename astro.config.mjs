import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.objectifb2espagnol.fr",
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
