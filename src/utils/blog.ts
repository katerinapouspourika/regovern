import { getCollection, type CollectionEntry } from "astro:content";
import { locales, localizePath, type Locale } from "@/i18n";

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

/**
 * Localised paths of a post in every language it exists in. A post may exist
 * in only one language; the other language's switcher then goes to its blog list.
 */
export async function getTranslationPaths(
  post: BlogPost,
): Promise<Partial<Record<Locale, string>>> {
  const slug = postSlug(post);
  const all = await getCollection("blog", ({ data }) => !data.draft);
  const ids = new Set(all.map(({ id }) => id));
  return Object.fromEntries(
    locales
      .filter((lang) => ids.has(`${lang}/${slug}`))
      .map((lang) => [lang, localizePath(postPath(post), lang)]),
  );
}
