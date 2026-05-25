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
    title: "Optimization Algorithms Playground",
    variant: "active",
    summary:
      "Benchmarks for gradient-based optimizers (SGD, Adam, RMSProp) visualized with NumPy/Matplotlib. Compares convergence speed, stability, and loss landscapes across test functions.",
    tags: ["Python", "NumPy", "Matplotlib", "Numerical"],
  },
  {
    title: "Graph Spectra Toolkit",
    variant: "active",
    summary:
      "Reusable Python scripts for spectral computations — adjacency/Laplacian eigenvalues, spectral gap, graph isomorphism checks, and pendant-attachment invariants used in research.",
    tags: ["Graph Theory", "SageMath", "Python", "Research"],
    link: "https://github.com/aditya01ad",
  },
  {
    title: "Spectral Determination Notes",
    variant: "active",
    summary:
      "Structured LaTeX notes on spectral determination of graphs — covering DAS conjecture, cospectral mates, and known results. Doubles as a reading companion for the thesis.",
    tags: ["LaTeX", "Graph Theory", "Writing"],
  },
  {
    title: "Topology Notes Companion",
    variant: "completed",
    summary:
      "LaTeX-first notes covering point-set topology with curated exercises and teaching references. Covers metric spaces, compactness, connectedness, and quotient spaces.",
    tags: ["LaTeX", "Teaching", "Writing"],
  },
  {
    title: "Linear Algebra Problem Sets",
    variant: "completed",
    summary:
      "Curated problem sets for undergraduate linear algebra — eigenvalues, inner product spaces, canonical forms. Designed for self-study and teaching use.",
    tags: ["Linear Algebra", "Teaching", "LaTeX"],
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

        {/* Filter tabs */}
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

        {/* Project count */}
        <p className="mt-4 text-xs text-muted-foreground">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Project cards */}
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
