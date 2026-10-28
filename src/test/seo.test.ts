import { describe, expect, it } from "vitest";
import seo from "@/data/seo.json";

describe("search metadata", () => {
  it("defines unique, human-readable metadata for every public route", () => {
    const pages = Object.entries(seo.pages);
    const expected = ["/", "/about", "/research", "/projects", "/blog", "/contact", "/notes"];
    expect(pages.map(([path]) => path).sort()).toEqual(expected.sort());
    expect(new Set(pages.map(([, page]) => page.title)).size).toBe(pages.length);
    for (const [path, page] of pages) {
      expect(path.startsWith("/")).toBe(true);
      expect(page.title).toContain("Aditya Chauhan");
      expect(page.title.length).toBeLessThan(75);
      expect(page.description.length).toBeGreaterThan(65);
      expect(page.description.length).toBeLessThan(180);
    }
  });

  it("uses the verified primary HTTPS domain", () => {
    expect(seo.siteUrl).toBe("https://www.aditya-math.me");
    expect(seo.logoPath).toBe("/aditya-logo-a.svg");
  });
});
