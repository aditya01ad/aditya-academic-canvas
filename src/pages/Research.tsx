import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";

const interestTags = [
  "Spectral Graphs",
  "Topology",
  "Combinatorics",
  "Optimization",
  "Mathematical Writing",
];

const Research = () => {
  const tabs: Tab[] = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-foreground">Research vision</h3>
              <Badge variant="inprep" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Placeholder summary of long-term research direction, key questions, and the interdisciplinary
              lens applied to mathematical inquiry.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Placeholder detail on the most recent thread of investigation, including collaborators,
              methodologies, and exploratory results.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "das-project",
      label: "DAS Project",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-foreground">Discrete Algebraic Structures</h3>
              <Badge variant="active" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Placeholder description of the DAS project scope, objectives, and planned outputs. Replace with
              specific goals, datasets, or theoretical results as needed.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag label="Graph spectra" />
              <Tag label="Invariant analysis" />
              <Tag label="Proof notebooks" />
            </div>
          </article>
          <div className="border border-border rounded-sm p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Next milestones</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside">
              <li>Placeholder milestone for literature review and foundational proofs.</li>
              <li>Placeholder milestone for computational experiments and validation.</li>
              <li>Placeholder milestone for drafting an initial manuscript.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "interests",
      label: "Interests",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h3 className="text-lg font-medium text-foreground">Exploration themes</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Placeholder list of research interests and adjacent topics that inspire reading, mentoring, and
              collaborations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {interestTags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </article>
          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Open questions</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Placeholder prompts for open questions, future collaborations, and potential proposals.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Research">
      <section className="page-container page-section">
        <p className="page-subtitle">Research</p>
        <h1 className="page-title mt-2">Research portfolio</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Placeholder introduction framing the research program, featured projects, and areas of
          exploration.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="overview" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
