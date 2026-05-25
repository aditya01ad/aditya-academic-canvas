import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const interestTags = [
  "Spectral Graph Theory",
  "Convex Optimization",
  "Numerical Analysis",
  "Graph Neural Networks",
  "Linear Algebra",
  "Topology",
  "Combinatorics",
  "Matrix Theory",
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
              Advancing spectral graph theory through rigorous proofs and computational validation.
              The long-term goal is to bridge theoretical insights with applications in
              graph algorithms and data-driven computation.
            </p>
          </article>

          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thesis work supervised by {PROFILE.supervisor} on <em>{PROFILE.paperTitle}</em> —
              studying spectral invariants, adjacency spectra, and characterizations of graph families
              with pendant attachments.
            </p>
          </div>

          <div className="border border-border rounded-sm p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Conferences</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-foreground font-medium">2025</span>
                <span>IWSMGA 2025 &mdash; International Workshop on Spectral Methods in Graph Algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-medium">2025</span>
                <span>ICLAA 2025 &mdash; International Conference on Linear Algebra and its Applications</span>
              </li>
            </ul>
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
              <h3 className="text-lg font-medium text-foreground">Spectral Determination of Graphs with Pendant Attachments</h3>
              <Badge variant="inprep" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              M.Sc. thesis research investigating which graph families are determined by their
              adjacency spectrum when pendant vertices are attached. The work develops new
              spectral invariants and characterization techniques for detecting cospectral mates.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag label="Graph spectra" />
              <Tag label="Pendant attachments" />
              <Tag label="Adjacency matrix" />
              <Tag label="Spectral invariants" />
              <Tag label="Cospectral graphs" />
            </div>
          </article>

          <div className="border border-border rounded-sm p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Milestones</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside">
              <li>Developed spectral invariants for pendant-attached graph families.</li>
              <li>Computational verification across candidate graph families using SageMath.</li>
              <li>Manuscript in preparation &mdash; {PROFILE.paperCitation}.</li>
            </ul>
          </div>

          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Supervisor</p>
            <p className="text-sm text-muted-foreground">
              {PROFILE.supervisor} &mdash; Department of Mathematics, IIT Bhubaneswar
            </p>
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
              Beyond the thesis, I am drawn to problems that sit at the boundary of pure
              mathematics and computation — particularly where algebraic structure reveals
              hidden properties of discrete systems.
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
              Actively seeking collaborations that connect spectral theory to practical
              implementation &mdash; especially in graph-theoretic algorithms, network analysis,
              and graph representation learning.
            </p>
          </div>

          <div className="border border-border rounded-sm p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Future directions</p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Spectral properties of random and structured graph families</li>
              <li>Applications of convex optimization to combinatorial problems</li>
              <li>Graph neural networks grounded in spectral theory</li>
              <li>Numerical methods for large-scale eigenvalue problems</li>
            </ul>
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
          M.Sc. Mathematics &mdash; IIT Bhubaneswar &mdash; thesis on spectral graph theory
          under {PROFILE.supervisor}. CGPA {PROFILE.mscCgpa}.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="overview" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
