# How to add or edit a news article (简易指南)

To add a new article, do the following steps so editors can add content easily:

1. Create markdown files for each language in `src/pages/articles/markdown-news/` with name format `<id>.<lang>.md`, e.g. `4.en.md`, `4.zh.md`.
   - Keep `id` as a short number or slug string consistent with `src/lib/news.ts`.
   - Markdown may contain headings, lists, images, etc. Use relative image paths from `public/`.

2. Add a news item to `src/lib/news.ts`:
   - Example: { id: '4', image: '/time4.png', date: '2025-12-16', titleKey: 'pages.news.articles.article4.title', excerptKey: 'pages.news.articles.article4.excerpt', contentKey: 'pages.news.articles.article4.content' }

3. Add translations (title/excerpt/content summary) in your locale files (e.g. `src/i18n/locales/en.json` under `pages.news.articles.article4`).

4. The site will pick up the markdown content automatically through `src/lib/newsContent.ts` mapping. If you need to add a new id, import the new markdown files in `newsContent.ts` and add them to the `contentMap`.

Notes for maintainers:
- `src/lib/newsContent.ts` centralizes markdown imports (required by the bundler). If you prefer automatic file discovery, we can add a small script to generate this mapping.
- `src/components/Article.tsx` renders article content (title, date, image, markdown HTML). Keep it minimal to make layout changes easy.

简单流程：增加 markdown -> 在 `news.ts` 注册 -> 添加翻译 -> 提交。
