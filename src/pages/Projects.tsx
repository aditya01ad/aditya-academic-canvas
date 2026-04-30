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
    summary: "Placeholder overview of algorithm experiments, benchmarking, and visualization work.",
    tags: ["Python", "Numerical", "Visualization"],
  },
  {
    title: "Topology Notes Companion",
    variant: "completed",
    summary: "Placeholder summary of a published note series and teaching materials.",
    tags: ["LaTeX", "Teaching", "Writing"],
  },
  {
    title: "Graph Spectra Toolkit",
    variant: "active",
    summary: "Placeholder description for a toolkit supporting spectral graph investigations.",
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
          Placeholder overview of research-adjacent builds, collaborations, and experiments. Expand each
          project with real outcomes and links.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="all" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
