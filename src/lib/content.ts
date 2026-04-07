import type { CollectionEntry } from "astro:content";

export function sortBlogPosts(posts: CollectionEntry<"blog">[]) {
  return posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
}

export function sortTestimonials(entries: CollectionEntry<"testimonials">[]) {
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export function sortFaqs(entries: CollectionEntry<"faqs">[]) {
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}
