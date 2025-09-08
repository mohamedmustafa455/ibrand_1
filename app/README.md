# `app` folder

- **Purpose**: Next.js App Router pages and route structure (pages, layouts, error/not-found, sitemap, robots).
- **Contains**: Route groups like `about`, `services`, `portfolio`, `contact`, plus `layout.tsx` and SEO utilities.
- **Highlights**:
  - Modern App Router structure with server-first rendering.
  - Built-in SEO and performance improvements.
  - Multilingual and RTL support via translation/theme providers.
- **Notes**:
  - When adding a new service page, keep slugs consistent with `data/services.ts`.
  - Do not rename dynamic segments like `[slug]` without updating links and data.
