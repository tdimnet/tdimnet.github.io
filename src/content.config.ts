import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// On-site blog. Posts are Markdown files in src/content/blog/.
// English-first today; `lang` keeps the structure ready for French later.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // The "standfirst" — a one-line intro shown under the title.
    standfirst: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(["en", "fr"]).default("en"),
    tag: z.string(),
    // Where the piece primarily lives: own site or cross-posted to NX Academy.
    home: z.enum(["tdimnet", "nx"]).default("tdimnet"),
    // Full-bleed pixel-art banner (path under /public).
    banner: z.string().default("/assets/writter.png"),
    bannerAlt: z.string().default(""),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
