import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tabs from "@/components/ui/Tabs";

const tabs = [
  { id: "story", label: "Story", content: <p>Story content</p> },
  { id: "skills", label: "Skills", content: <p>Skills content</p> },
  { id: "education", label: "Education", content: <p>Education content</p> },
];

describe("portfolio tabs", () => {
  it("renders one visible panel at a time without changing design", () => {
    render(<Tabs tabs={tabs} defaultTab="story" />);
    expect(screen.getByRole("tab", { name: "Story" }).getAttribute("aria-selected")).toBe("true");
    fireEvent.click(screen.getByRole("tab", { name: "Skills" }));
    expect(screen.getByRole("tab", { name: "Skills" }).getAttribute("aria-selected")).toBe("true");
    expect(screen.getByText("Skills content")).toBeTruthy();
    expect(screen.queryByText("Story content")).toBeNull();
  });

  it("supports arrow keys and Home/End for keyboard navigation", () => {
    render(<Tabs tabs={tabs} />);
    const story = screen.getByRole("tab", { name: "Story" });
    const skills = screen.getByRole("tab", { name: "Skills" });
    const education = screen.getByRole("tab", { name: "Education" });
    story.focus();
    fireEvent.keyDown(story, { key: "ArrowRight" });
    expect(document.activeElement).toBe(skills);
    expect(skills.getAttribute("tabindex")).toBe("0");
    fireEvent.keyDown(skills, { key: "End" });
    expect(document.activeElement).toBe(education);
    fireEvent.keyDown(education, { key: "Home" });
    expect(document.activeElement).toBe(story);
  });
});
