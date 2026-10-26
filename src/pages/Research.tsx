import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { PROFILE } from "@/lib/profile";

export default function Research() {
  return (
    <PageLayout title="Research">
      <div className="page-container inner-page">
        <header className="page-intro">
          <p className="eyebrow">MATHEMATICS / GRAPHS</p>
          <h1 className="page-title">Research & questions<span className="accent-ink">.</span></h1>
          <p className="page-lede">My academic research began with a simple curiosity: how much can we learn about a graph from its spectrum?</p>
        </header>

        <section className="reading-section" aria-labelledby="thesis-heading">
          <p className="section-label">M.SC. THESIS · COMPLETED MAY 2026</p>
          <h2 className="reading-heading mt-3" id="thesis-heading">{PROFILE.paperTitle}</h2>
          <p className="reading-copy">Supervised by {PROFILE.supervisor}, Department of Mathematics, IIT Bhubaneswar.</p>
          <p className="reading-copy">Spectral graph theory studies graph structure through the eigenvalues of matrices associated with it. My thesis considered families of graphs with pendant attachments, and questions of when their adjacency spectra distinguish their structures.</p>
          <p className="reading-copy">The work involved mathematical investigation of spectral properties and cospectral graphs, supported by computational experiments. I remain interested in the interplay between theorems, constructions, and code.</p>
          <a className="text-link mt-5" href="https://github.com/aditya01ad/spectral-project" target="_blank" rel="noopener noreferrer">Explore related code <ArrowUpRight className="h-4 w-4" aria-hidden="true"/></a>
        </section>

        <section className="reading-section" aria-labelledby="research-methods">
          <h2 className="reading-heading" id="research-methods">Methods & tools</h2>
          <dl className="detail-list">
            <div className="detail-row"><dt className="detail-term">Mathematics</dt><dd className="detail-description text-muted-foreground">Graph spectra, eigenvalues, adjacency matrices, spectral invariants, cospectral constructions.</dd></div>
            <div className="detail-row"><dt className="detail-term">Computation</dt><dd className="detail-description text-muted-foreground">Python, NetworkX, SageMath, and computational experiments with graph families.</dd></div>
            <div className="detail-row"><dt className="detail-term">Research style</dt><dd className="detail-description text-muted-foreground">Formulate a question, examine structural constraints, explore examples, and distinguish experimental evidence from proof.</dd></div>
          </dl>
        </section>

        <section className="reading-section" aria-labelledby="research-next">
          <h2 className="reading-heading" id="research-next">Questions I want to explore</h2>
          <p className="reading-copy">I'm curious about graph algorithms, spectral approaches to networks, combinatorial optimization, and the numerical tools that make larger computational questions tractable. These are interests, not claims of completed research in each area.</p>
          <p className="tag-line">Spectral graph theory · Combinatorics · Linear algebra · Graph algorithms · Optimization · Network science</p>
        </section>
      </div>
    </PageLayout>
  );
}
