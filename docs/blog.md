# Writing a blog post

Posts are Markdown files in `src/content/blog/el/` (Greek) and `src/content/blog/en/` (English). The file name is the URL: `src/content/blog/el/my-post.md` becomes `/blog/my-post/`, and `src/content/blog/en/my-post.md` becomes `/en/blog/my-post/`.

## A new post

1. Put the cover image in `src/assets/blog/` (create the folder if needed). Use a landscape photo at least 1920px wide; Astro resizes it.
2. Create the Markdown file:

   ```md
   ---
   title: "Τίτλος άρθρου"
   description: "One or two sentences, shown on cards and in search results."
   date: 2026-11-15
   cover: ../../../assets/blog/my-cover.jpg
   coverAlt: "What the photo shows, for people who cannot see it"
   ---

   First paragraph…

   ## A subheading

   More text, lists, > quotes and links all work.
   ```

3. Commit on a branch and open a pull request as usual. The build fails with a clear message if a field is missing.

## Two languages

- Give the Greek and English versions **the same file name**. The language switcher then links them, and search engines learn they are translations.
- A post can exist in only one language. It appears only in that language's blog list, and the switcher on it leads to the other language's blog list.

## Drafts

Add `draft: true` to the front matter to keep a post out of the site until it is ready.
