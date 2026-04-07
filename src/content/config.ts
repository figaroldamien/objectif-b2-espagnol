import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      "Certification",
      "Methode et progression",
      "Oral et production",
      "Grammaire utile",
      "Voyage"
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    faq: z.array(z.string()).default([]),
    ctaVariant: z.enum(["diagnostic", "guide"]).default("diagnostic"),
    heroImage: z.string().optional()
  })
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    goal: z.string(),
    result: z.string(),
    quote: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

const faqs = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(["certification", "lead-magnet", "contact"]).default("certification"),
    order: z.number().default(0)
  })
});

export const collections = {
  blog,
  testimonials,
  faqs
};
