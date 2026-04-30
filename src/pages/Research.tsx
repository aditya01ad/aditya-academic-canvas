import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const interestTags = [
  "Spectral Graphs",
  "Convex Optimization",
  "Numerical Analysis",
  "Graph Neural Networks",
  "Topology",
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
                Advancing spectral graph theory through rigorous proofs and computational validation. The
                long-term goal is to bridge theoretical insights with applications in machine learning and
                network science.
              </p>
            </article>
            <div className="accent-left space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thesis work supervised by {PROFILE.supervisor} on {PROFILE.paperTitle}, building new
                invariants and characterizations for graph families.
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
                The DAS project focuses on spectral determination with pendant attachments, combining proof
                techniques with computational checks. Current output: {PROFILE.paperTitle}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag label="Graph spectra" />
                <Tag label="Pendant attachments" />
                <Tag label="Proof notebooks" />
              </div>
            </article>
            <div className="border border-border rounded-sm p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Next milestones</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside">
                <li>Finalize proof outline and supporting lemmas.</li>
                <li>Run computational verification across candidate graph families.</li>
                <li>Complete manuscript draft with {PROFILE.paperCitation}.</li>
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
                Beyond thesis work, the research agenda includes convex optimization, numerical methods, and
                the spectral view of machine learning models.
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
                Seeking collaborations that connect spectral theory to practical ML systems, especially in
                graph representation learning.
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
          Current thesis work at {PROFILE.msc} with a focus on spectral graph theory and applied mathematical
          analysis for machine learning.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="overview" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
