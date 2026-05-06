import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";

type Project = {
  title: string;
  variant: "active" | "completed";
  summary: string;
  tags: string[];
};

const allProjects: Project[] = [
  {
    title: "Optimization Algorithms Playground",
    variant: "active",
    summary:
      "Benchmarks for gradient-based optimizers, visualized with NumPy/Matplotlib to compare convergence and stability.(pending)",
    tags: ["Python", "Numerical", "Visualization"],
  },
  /*{
    title: "Topology Notes Companion",
    variant: "completed",
    summary:
      "LaTeX-first notes covering point-set topology, with curated exercises and teaching references.",
    tags: ["LaTeX", "Teaching", "Writing"],
  },*/
  {
    title: "Graph Spectra codes",
    variant: "active",
    summary:
      "Reusable scripts for spectral computations, eigenvalue experiments, and invariant checks in graph theory.",
    tags: ["Graph Theory", "Research", "Tools"],
  },
];

const activeProjects = allProjects.filter((project) => project.variant === "active");
const completedProjects = allProjects.filter((project) => project.variant === "completed");

const Projects = () => {
  const ProjectCard = ({ project }: { project: Project }) => (
    <article className="border border-border rounded-sm p-6 card-hover">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <Badge variant={project.variant} />
      </div>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );

  const tabs: Tab[] = [
    {
      id: "all",
      label: "All",
      content: (
        <div className="space-y-6">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ),
    },
    {
      id: "active",
      label: "Active",
      content: (
        <div className="space-y-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ),
    },
    {
      id: "completed",
      label: "Completed",
      content: (
        <div className="space-y-6">
          {completedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Projects">
      <section className="page-container page-section">
        <p className="page-subtitle">Projects</p>
        <h1 className="page-title mt-2">Project portfolio</h1>
        <p className="page-lede mt-4 max-w-2xl">
          A mix of research-adjacent builds, computational experiments, and structured learning artifacts.
          Each project supports the transition from theory to ML engineering practice.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="all" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
