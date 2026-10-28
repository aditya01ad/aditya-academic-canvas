/**
 * Builds static, per-route HTML head metadata for our Vite SPA.
 * This makes link previews/canonical tags visible before JavaScript runs,
 * while React still renders the actual pages and keeps the original design.
 */
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const seo = JSON.parse(await readFile("src/data/seo.json", "utf8"));
const output = "dist";
const template = await readFile(join(output, "index.html"), "utf8");
const marker = /<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/;
if (!marker.test(template)) throw new Error("SEO markers missing from built index.html");

const escapeHtml = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const tag = (key, name, value) =>
  `    <meta ${key}="${escapeHtml(name)}" content="${escapeHtml(value)}" />`;
const canonical = (path) => seo.siteUrl + path;
const logo = seo.siteUrl + seo.logoPath;

const commonGraph = [
  {
    "@type": "Person",
    "@id": seo.siteUrl + "/#person",
    name: "Aditya Chauhan",
    url: seo.siteUrl + "/",
    sameAs: ["https://github.com/aditya01ad", "https://www.linkedin.com/in/aditya01ad/"],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Bhubaneswar" },
      { "@type": "CollegeOrUniversity", name: "Veer Narmad South Gujarat University" }
    ],
    knowsAbout: ["Mathematics", "Spectral graph theory", "Graph theory", "Programming", "Optimization"]
  },
  {
    "@type": "WebSite",
    "@id": seo.siteUrl + "/#website",
    url: seo.siteUrl + "/",
    name: seo.siteName,
    inLanguage: "en",
    author: { "@id": seo.siteUrl + "/#person" }
  }
];

const renderHead = (path, page) => {
  const url = canonical(path);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...commonGraph,
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        url,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": seo.siteUrl + "/#website" },
        about: { "@id": seo.siteUrl + "/#person" }
      }
    ]
  };
  const json = JSON.stringify(graph).replace(/</g, "\\u003c");
  return [
    "    <!-- SEO_START -->",
    `    <title>${escapeHtml(page.title)}</title>`,
    tag("name", "description", page.description),
    tag("name", "robots", "index, follow"),
    tag("property", "og:title", page.title),
    tag("property", "og:description", page.description),
    tag("property", "og:type", "website"),
    tag("property", "og:site_name", seo.siteName),
    tag("property", "og:locale", "en_IN"),
    tag("property", "og:url", url),
    tag("property", "og:image", logo),
    tag("property", "og:image:alt", "A monogram logo for Aditya Chauhan"),
    tag("name", "twitter:card", "summary"),
    tag("name", "twitter:title", page.title),
    tag("name", "twitter:description", page.description),
    tag("name", "twitter:image", logo),
    `    <link rel="canonical" href="${escapeHtml(url)}" />`,
    `    <script type="application/ld+json" id="site-jsonld">${json}</script>`,
    "    <!-- SEO_END -->"
  ].join("\n");
};

for (const [path, page] of Object.entries(seo.pages)) {
  if (!path.startsWith("/") || (path !== "/" && !/^\/[a-z-]+$/.test(path))) {
    throw new Error(`Unsafe route in SEO configuration: ${path}`);
  }
  if (!page.title || !page.description) throw new Error(`Missing metadata: ${path}`);
  const filename = path === "/" ? "index.html" : path.slice(1) + ".html";
  const content = template.replace(marker, renderHead(path, page));
  await writeFile(join(output, filename), content);
  console.log(`SEO: ${path} → ${filename}`);
}

const notFound = template.replace(marker, [
  "    <!-- SEO_START -->",
  "    <title>Page not found | Aditya Chauhan</title>",
  tag("name", "robots", "noindex, follow"),
  tag("name", "description", "This page does not exist. Return to Aditya Chauhan's personal website."),
  "    <!-- SEO_END -->"
].join("\n"));
await writeFile(join(output, "404.html"), notFound);

// Sitemap only lists canonical, indexable URLs; no invented lastmod dates.
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...Object.keys(seo.pages).map((path) => `  <url><loc>${escapeHtml(canonical(path))}</loc></url>`),
  '</urlset>',
  ''
].join("\n");
await writeFile(join(output, "sitemap.xml"), sitemap);

// Fail the build if route metadata or the sitemap has an unexpected omission.
for (const [path, page] of Object.entries(seo.pages)) {
  const filename = path === "/" ? "index.html" : path.slice(1) + ".html";
  const html = await readFile(join(output, filename), "utf8");
  const url = escapeHtml(canonical(path));
  if (!html.includes(`rel="canonical" href="${url}"`) ||
      !html.includes(`<title>${escapeHtml(page.title)}</title>`) ||
      !html.includes('application/ld+json')) {
    throw new Error(`Invalid generated SEO page: ${path}`);
  }
}
console.log(`SEO: ${Object.keys(seo.pages).length} canonical pages + sitemap.xml + 404.html generated`);
