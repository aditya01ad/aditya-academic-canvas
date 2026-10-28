# Website SEO — 28 October 2026

The website is a personal space: mathematics, research, code, writing, and everyday interests. SEO reflects that without treating it as a recruiting website or claiming academic results not evidenced on the site.

## Implementation

- **Canonical origin:** `https://www.aditya-math.me` (Vercel redirects apex domain to www).
- **Seven distinct pages:** /, /about, /research, /projects, /blog, /contact, /notes.
- **Unique initial HTML heads:** The Vite build runs `scripts/build-seo.mjs`, producing `dist/<route>.html` with per-page titles, descriptions, canonical URLs and Open Graph/Twitter tags. Vercel rewrites known routes to those HTML entrypoints.
- **Client-side navigations:** `src/components/SeoManager.tsx` updates title, metadata, canonical and structured data after React Router navigations.
- **Structured data:** Person + WebSite + WebPage using Schema.org JSON-LD. These identify the owner and site; they are not a guarantee of rich results.
- **Sitemap:** Generated at `/sitemap.xml` from the same route configuration. No guessed last-modified dates.
- **robots.txt:** Allows crawlers and links to the sitemap. Vercel protects preview deployments separately.
- **404 handling:** Unknown server paths should serve the generated `404.html` with `noindex`, and client navigation renders a lightweight NotFound page.
- **Design:** No original CSS, typography or approved page copy changed.

## Maintenance

To update titles, descriptions or sitemap routes, edit `src/data/seo.json`. The build creates all per-route HTML entrypoints and the sitemap from that single configuration.

Run `npm run check` to lint, typecheck, test, build and validate generated metadata. Check the **live production domain** after deployment; local `vite preview` does not implement Vercel rewrite rules and may serve index.html for deep links.

**Limitations:** This is a client-rendered React site. Initial HTML contains route-specific metadata and JSON-LD, but the visible page body is still rendered by React. Google supports JavaScript rendering, but some crawlers do not. Static rendering or SSR could make body text readable to non-JavaScript crawlers in a later upgrade.

**Social image:** The current share image is the existing site logo SVG. Some social platforms do not support SVG thumbnails. A dedicated PNG/JPEG share image can be added later without changing the site's visible design.

## Search Console (owner step)

1. Open Google Search Console and verify the `aditya-math.me` domain property (DNS verification), or verify the `https://www.aditya-math.me/` URL-prefix property.
2. In **Sitemaps**, submit `https://www.aditya-math.me/sitemap.xml`.
3. Use URL Inspection for /, /research and /projects after Google has recrawled.
4. Check indexing coverage and rendered HTML over the following weeks. Submitting a sitemap does **not** guarantee ranking or indexing.

Do not add fake reviews, FAQs, articles, publication dates, or keyword-stuffed content simply for SEO.
