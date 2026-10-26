import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type ProjectStatus } from "@/data/projects";
type Filter = "all" | ProjectStatus;
const filters: { id: Filter; label: string }[] = [{id:"all",label:"All projects"},{id:"completed",label:"Completed"},{id:"active",label:"In progress"}];
export default function Projects() {
  const [filter,setFilter]=useState<Filter>("all");
  const visible=filter==="all"?projects:projects.filter(p=>p.status===filter);
  return <PageLayout title="Projects">
    <section className="page-container page-section">
      <p className="eyebrow">SELECTED REPOSITORIES / 2026</p>
      <h1 className="page-title mt-5">Work & explorations<span className="accent-ink">.</span></h1>
      <p className="page-lede mt-5 max-w-2xl">Research code, optimization notebooks, and mathematical experiments. Project status distinguishes completed coursework from ongoing work; each card links directly to the repository.</p>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map(f=><button type="button" key={f.id} aria-pressed={filter===f.id} onClick={()=>setFilter(f.id)} className={`filter-button ${filter===f.id?"is-selected":""}`}>{f.label}</button>)}</div>
      <p className="mt-5 text-xs text-muted-foreground" aria-live="polite">{visible.length} {visible.length===1?"project":"projects"}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{visible.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div>
    </section>
  </PageLayout>;
}
