import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("portfolio projects", () => {
  it("has unique IDs and direct HTTPS repository links", () => {
    expect(new Set(projects.map(project => project.id)).size).toBe(projects.length);
    for (const project of projects) {
      const url = new URL(project.url);
      expect(url.protocol).toBe("https:");
      expect(url.hostname).toBe("github.com");
      expect(url.pathname.split("/").filter(Boolean).length).toBeGreaterThanOrEqual(2);
    }
  });
  it("provides featured projects and honest status labels", () => {
    expect(projects.filter(project => project.featured).length).toBeGreaterThan(0);
    for (const project of projects) expect(["active", "completed"]).toContain(project.status);
  });
});
