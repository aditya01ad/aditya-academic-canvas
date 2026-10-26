import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type ProjectStatus } from "@/data/projects";

type Filter = "all" | ProjectStatus;
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "active", label: "Ongoing" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter(p => p.status === filter);
  return (
    <PageLayout title="Projects">
      <div className="page-container inner-page">
        <header className="page-intro">
          <p className="eyebrow">WORK / EXPERIMENTS</p>
          <h1 className="page-title">Projects & explorations<span className="accent-ink">.</span></h1>
          <p className="page-lede">Research projects, numerical experiments, and work I’m building as I learn. Every entry links to its source, so the code can speak for itself.</p>
        </header>
        <div className="filter-line" role="group" aria-label="Filter projects">
          {filters.map(f => (
            <button key={f.value} type="button" className={`filter-link ${filter===f.value ? "filter-active" : ""}`} aria-pressed={filter===f.value} onClick={()=>setFilter(f.value)}>{f.label}</button>
          ))}
          <span className="project-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"}</span>
        </div>
        <div className="work-list">{visible.map((project,i)=><ProjectCard key={project.id} project={project} index={i}/>)}</div>
      </div>
    </PageLayout>
  );
}
