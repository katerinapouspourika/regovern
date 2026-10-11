import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * Blog posts: one Markdown file per post and language, in
 * src/content/blog/el/ and src/content/blog/en/. A post with the same file
 * name in both folders is the same article in two languages.
 */
const blog = defineCollection({
  loader: glob({ pattern: "{el,en}/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
