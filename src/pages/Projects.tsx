import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Tag from "@/components/ui/Tag";
import { projectFilters, projects, type ProjectGroup } from "@/data/projects";

type Filter = "all" | ProjectGroup;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.group === filter);

  return (
    <PageLayout title="Projects">
      <section className="page-container page-section">
        <p className="page-subtitle">Projects & experiments</p>
        <h1 className="page-title mt-2">Things I've tried making</h1>
        <p className="page-lede mt-4 max-w-2xl">
          This is a mixture of research code, coursework, notebooks, and side projects.
          Not everything is polished or finished. I like keeping the experiments around, too.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((tab) => (
            <button
              key={tab.value}
              type="button"
              aria-pressed={filter === tab.value}
              onClick={() => setFilter(tab.value)}
              className={"px-5 py-2 rounded-sm text-xs uppercase tracking-widest border transition-colors duration-200 " +
                (filter === tab.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground")}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? "entry" : "entries"}
        </p>
        <div className="mt-6 space-y-5">
          {visible.map((project) => (
            <article key={project.id} className="border border-border rounded-sm p-6 card-hover">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-lg font-medium text-foreground">{project.title}</h2>
                <span className="text-xs text-muted-foreground">{project.kind}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                >
                  Open on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          A small note: a notebook full of learning exercises isn't a finished application, and a computational
          search isn't a proof. I've tried to describe these projects for what they are, not make them sound bigger.
        </p>
      </section>
    </PageLayout>
  );
}
