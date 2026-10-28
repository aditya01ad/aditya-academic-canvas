import PageLayout from "@/components/layout/PageLayout";
import Tabs, { type Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const interestTags = [
  "Spectral graph theory",
  "Cospectral graphs",
  "Graph algorithms",
  "Linear algebra",
  "Combinatorics",
  "Numerical experiments",
  "Optimization",
  "Network science",
];

export default function Research() {
  const tabs: Tab[] = [
    {
      id: "overview",
      label: "The idea",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">Can you recognise a graph from its eigenvalues?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              That's a question that pulled me into spectral graph theory.
              A graph is made of vertices and edges. Once you put its connections into a matrix,
              you can study its eigenvalues—the graph's spectrum.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The fun part is that those numbers tell you quite a lot, but not everything.
              Two graphs can have the same spectrum without being the same graph.
              They're called <em>cospectral</em>, and figuring out when this can happen
              is what makes the subject so interesting to me.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">My master's work</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I explored spectral questions for graph families with pendant attachments
              as part of my M.Sc. thesis at IIT Bhubaneswar, supervised by {PROFILE.supervisor}.
              The thesis was completed in May 2026.
            </p>
          </div>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Why code belongs in this story</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I enjoy proofs, but I also like checking small examples and testing constructions
              with a computer. An experiment can help you spot a pattern or a counterexample;
              it can't replace a proof. I like having both ways of thinking available.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "das-project",
      label: "My thesis",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">M.Sc. thesis · May 2026</p>
            <h2 className="mt-3 text-lg font-medium text-foreground">{PROFILE.paperTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A pendant vertex is a vertex with just one neighbour—a little leaf attached
              to a graph. My thesis examined spectral determination questions for families
              built with such attachments: which structural features can be recovered from
              adjacency spectra, and where might cospectral alternatives appear?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The work brought together linear algebra, graph constructions, examples and
              computational exploration. I'm deliberately keeping this description at the
              level I can explain without making unsupported claims about new theorems.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Adjacency spectrum", "Pendant vertices", "Cospectrality", "Graph constructions"].map((topic) => (
                <Tag key={topic} label={topic} />
              ))}
            </div>
          </article>
          <div className="border border-border rounded-sm p-6">
            <h3 className="text-base font-medium text-foreground">What went into it</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground list-disc list-inside">
              <li>Reading and studying spectral graph theory and related graph families.</li>
              <li>Examining adjacency spectra, graph invariants and cospectral examples.</li>
              <li>Exploring constructions and small cases using Python and SageMath.</li>
              <li>Working through which observations need a mathematical argument, not just numerical evidence.</li>
            </ul>
          </div>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Code and notebooks</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I keep related experiments and research utilities in a public repository.
              It's a research working folder rather than a polished software package.
            </p>
            <a className="inline-flex text-sm text-accent hover:text-foreground" href="https://github.com/aditya01ad/spectral-project" target="_blank" rel="noopener noreferrer">
              Explore the spectral-project repository ↗
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "interests",
      label: "What's next?",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">The questions keep changing</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I'm still interested in spectral graph theory, especially its links to algorithms
              and computations. I've also been learning about operations research, optimization
              and modelling problems where mathematical structure helps you make a decision.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I don't have a fixed list of research topics for the rest of my life.
              The next interesting problem could come from a paper, a coding experiment,
              or a conversation with someone working in a completely different field.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Things I'm curious about</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {interestTags.map((topic) => <Tag key={topic} label={topic} />)}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            If you enjoy any of these topics, <a className="text-accent hover:text-foreground" href={"mailto:" + PROFILE.email}>I'd be happy to hear from you</a>.
          </p>
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Research">
      <section className="page-container page-section">
        <p className="page-subtitle">Mathematics & research</p>
        <h1 className="page-title mt-2">Graphs, spectra, and questions</h1>
        <p className="page-lede mt-4 max-w-2xl">
          A bit about the mathematics I worked on during my M.Sc., why it caught my attention,
          and the things I'm still curious about.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab="overview" />
        </div>
      </section>
    </PageLayout>
  );
}
