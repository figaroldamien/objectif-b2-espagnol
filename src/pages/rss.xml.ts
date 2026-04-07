import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/lib/site";
import { sortBlogPosts } from "@/lib/content";

export async function GET() {
  const posts = sortBlogPosts(await getCollection("blog", ({ data }) => !data.draft));

  return rss({
    title: siteConfig.name,
    description: siteConfig.defaultDescription,
    site: siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    }))
  });
}
