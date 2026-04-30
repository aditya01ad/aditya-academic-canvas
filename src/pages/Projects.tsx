import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import TabGroup, { TabItem } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";

const allProjects = [
  {
    title: "Optimization Algorithms Playground",
    status: "Active",
    summary: "Placeholder overview of algorithm experiments, benchmarking, and visualization work.",
    tags: ["Python", "Numerical", "Visualization"],
  },
  {
    title: "Topology Notes Companion",
    status: "Completed",
    summary: "Placeholder summary of a published note series and teaching materials.",
    tags: ["LaTeX", "Teaching", "Writing"],
  },
  {
    title: "Graph Spectra Toolkit",
    status: "Active",
    summary: "Placeholder description for a toolkit supporting spectral graph investigations.",
    tags: ["Graph Theory", "Research", "Tools"],
  },
];

const activeProjects = allProjects.filter((project) => project.status === "Active");
const completedProjects = allProjects.filter((project) => project.status === "Completed");

const Projects = () => {
  const renderProject = (project: (typeof allProjects)[number]) => (
    <article key={project.title} className="border border-border rounded-sm p-6 card-hover">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <Badge tone="accent">{project.status}</Badge>
      </div>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );

  const tabs: TabItem[] = [
    {
      id: "all",
      label: "All",
      content: <div className="space-y-6">{allProjects.map(renderProject)}</div>,
    },
    {
      id: "active",
      label: "Active",
      content: <div className="space-y-6">{activeProjects.map(renderProject)}</div>,
    },
    {
      id: "completed",
      label: "Completed",
      content: <div className="space-y-6">{completedProjects.map(renderProject)}</div>,
    },
  ];

  return (
    <PageLayout>
      <section className="page-container page-section">
        <p className="page-subtitle">Projects</p>
        <h1 className="page-title mt-2">Project portfolio</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Placeholder overview of research-adjacent builds, collaborations, and experiments. Expand each
          project with real outcomes and links.
        </p>
        <div className="mt-10">
          <TabGroup tabs={tabs} defaultTab="all" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
