import { describe, expect, it } from "vitest";
import { projects, projectFilters } from "@/data/projects";

describe("published project entries", () => {
  it("have unique identifiers and direct public GitHub repository links", () => {
    expect(projects.length).toBeGreaterThanOrEqual(6);
    expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length);
    for (const project of projects) {
      const url = new URL(project.url);
      expect(url.hostname).toBe("github.com");
      expect(url.protocol).toBe("https:");
      expect(url.pathname.split("/").filter(Boolean).length).toBe(2);
      expect(url.pathname.startsWith("/aditya01ad/")).toBe(true);
      expect(project.summary.trim().length).toBeGreaterThan(30);
    }
  });

  it("includes research, coding and personal interests", () => {
    const filters = new Set(projectFilters.map((filter) => filter.value));
    for (const group of ["all", "research", "coding", "other"]) expect(filters.has(group as "all")).toBe(true);
    expect(projects.some((p) => p.group === "research")).toBe(true);
    expect(projects.some((p) => p.group === "coding")).toBe(true);
    expect(projects.some((p) => p.group === "other")).toBe(true);
    expect(projects.some((p) => p.featured)).toBe(true);
  });
});
