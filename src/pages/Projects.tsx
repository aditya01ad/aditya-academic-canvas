import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";

type Project = {
  title: string;
  variant: "active" | "completed";
  summary: string;
  tags: string[];
  link?: string;
};

const allProjects: Project[] = [
  {
    title: "Spectral Determination of Graphs with Pendant Attachments",
    variant: "completed",
    summary: "M.Sc. thesis research on spectral determination, cospectral graphs, and structural invariants for graph families with pendant attachments.",
    tags: ["Spectral Graph Theory", "SageMath", "Research"],
    link: "https://github.com/aditya01ad/spectral-project",
  },
  {
    title: "Study of Cospectral Graphs",
    variant: "completed",
    summary: "Computational and mathematical exploration of graph spectra, cospectrality, and constructions relevant to spectral graph theory.",
    tags: ["Graph Theory", "Python", "SageMath"],
    link: "https://github.com/aditya01ad/Study_of_Cospectral_Graphs",
  },
  {
    title: "Optimization Techniques",
    variant: "completed",
    summary: "Implementations and experiments around optimization methods, with an emphasis on numerical behavior and convergence.",
    tags: ["Python", "Optimization", "Numerical"],
    link: "https://github.com/aditya01ad/Optimization-techniques",
  },
  {
    title: "Circle Packing",
    variant: "completed",
    summary: "Computational geometry project exploring circle-packing configurations and algorithmic construction.",
    tags: ["Python", "Computational Geometry", "Algorithms"],
    link: "https://github.com/aditya01ad/Circle-packing",
  },
  {
    title: "DS Analyzer",
    variant: "completed",
    summary: "A data-structure and algorithm analysis project demonstrating practical programming and analytical tooling.",
    tags: ["Python", "Algorithms", "Data Structures"],
    link: "https://github.com/aditya01ad/ds-analyzer",
  },
  {
    title: "Academic Canvas",
    variant: "active",
    summary: "The React/TypeScript academic portfolio itself, designed to present research, projects, education, and technical work in one place.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    link: "https://github.com/aditya01ad/aditya-academic-canvas",
  },
  {
    title: "Research Writing App",
    variant: "active",
    summary: "A research-oriented writing tool exploring structured workflows for mathematical and academic writing.",
    tags: ["Research Tools", "Writing", "Software"],
    link: "https://github.com/aditya01ad/Research-Writing-app",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.variant === filter);

  const tabs: { id: "all" | "active" | "completed"; label: string }[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <PageLayout title="Projects">
      <section className="page-container page-section">
        <p className="page-subtitle">Projects</p>
        <h1 className="page-title mt-2">Project portfolio</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Research-adjacent builds, computational experiments, and structured learning artifacts.
          Each project bridges mathematical theory with practical implementation.
        </p>

        <div className="mt-8 flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-sm text-xs uppercase tracking-widest border transition-colors duration-200 ${
                filter === tab.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="mt-6 space-y-5">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="border border-border rounded-sm p-6 card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-medium text-foreground">{project.title}</h3>
                <Badge variant={project.variant} />
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
