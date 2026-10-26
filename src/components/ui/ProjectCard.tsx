import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";
export default function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return <article className="project-card group">
    <div className="flex justify-between gap-5">
      <span className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</span>
      <span className="status-tag">{project.status === "completed" ? "Completed" : "In progress"}</span>
    </div>
    <div className="mt-9">
      <h3 className="font-display text-2xl leading-tight tracking-tight md:text-[1.8rem]">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
    </div>
    <div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag=><span className="chip" key={tag}>{tag}</span>)}</div>
    <a className="project-link mt-8" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository on GitHub`}>
      Explore repository <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
    </a>
  </article>;
}
