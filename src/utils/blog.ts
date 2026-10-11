import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n";

export type BlogPost = CollectionEntry<"blog">;

/** The post's URL slug: its file name, shared by both languages. */
export function postSlug(post: BlogPost): string {
  return post.id.slice(post.id.indexOf("/") + 1);
}

/** Language-neutral path of a post; localise it with `localizePath`. */
export function postPath(post: BlogPost): string {
  return `/blog/${postSlug(post)}/`;
}

/** Published posts in one language, newest first. */
export async function getPosts(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection(
    "blog",
    (post) => post.id.startsWith(`${locale}/`) && !post.data.draft,
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
