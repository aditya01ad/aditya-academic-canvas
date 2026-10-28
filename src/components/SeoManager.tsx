import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "@/data/seo.json";

type PageMetadata = { title: string; description: string };
const pages: Record<string, PageMetadata> = seo.pages;

function updateMeta(attribute: "name" | "property", name: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = value;
}

/** Keeps SPA navigations in sync with the distinct HTML heads built for deep links. */
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path];
    const logo = seo.siteUrl + seo.logoPath;

    document.title = page?.title ?? `Page not found | ${seo.siteName}`;
    updateMeta("name", "robots", page ? "index, follow" : "noindex, follow");
    if (!page) {
      document.querySelector('link[rel="canonical"]')?.remove();
      document.getElementById("site-jsonld")?.remove();
      return;
    }

    const url = seo.siteUrl + path;
    updateMeta("name", "description", page.description);
    updateMeta("property", "og:title", page.title);
    updateMeta("property", "og:description", page.description);
    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:url", url);
    updateMeta("property", "og:site_name", seo.siteName);
    updateMeta("property", "og:image", logo);
    updateMeta("name", "twitter:title", page.title);
    updateMeta("name", "twitter:description", page.description);
    updateMeta("name", "twitter:card", "summary");
    updateMeta("name", "twitter:image", logo);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // On SPA navigation, update the current WebPage in the structured data.
    const node = document.getElementById("site-jsonld");
    if (node?.textContent) {
      try {
        const json = JSON.parse(node.textContent) as {
          "@graph"?: Array<Record<string, unknown>>;
        };
        const webPage = json["@graph"]?.find((item) => item["@type"] === "WebPage");
        if (webPage) {
          webPage["@id"] = url + "#webpage";
          webPage.url = url;
          webPage.name = page.title;
          webPage.description = page.description;
          node.textContent = JSON.stringify(json);
        }
      } catch {
        // Metadata tags are still updated even if structured data is malformed.
      }
    }
  }, [pathname]);

  return null;
}
