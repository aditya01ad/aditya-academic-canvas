import { describe, expect, it } from "vitest";
import { PROFILE } from "@/lib/profile";
import { SITE_NAME } from "@/lib/utils";

describe("public profile configuration", () => {
  it("identifies the owner and completed degree", () => {
    expect(SITE_NAME).toBe(PROFILE.name);
    expect(PROFILE.mscDegree).toBe("M.Sc. Mathematics");
    expect(PROFILE.mscPeriod).toContain("2026");
  });

  it("exposes valid links to core portfolio profiles", () => {
    expect(new URL(PROFILE.github).hostname).toBe("github.com");
    expect(new URL(PROFILE.linkedIn).hostname).toBe("linkedin.com");
    expect(new URL(PROFILE.website).protocol).toBe("https:");
  });
});
