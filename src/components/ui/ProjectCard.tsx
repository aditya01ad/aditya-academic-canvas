import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";

/** Text-first project entry. Designed to be read, not to look like a product card. */
export default function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <article className="work-entry">
      <span className="work-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <div className="work-heading">
          <h3 className="work-title">{project.title}</h3>
          <span className="work-status">{project.status === "completed" ? "Completed" : "Ongoing"}</span>
        </div>
        <p className="work-category">{project.category}</p>
        <p className="work-description">{project.description}</p>
        <div className="work-meta">
          <span className="work-tags">{project.tags.join(" · ")}</span>
          <a className="quiet-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
            View source <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
