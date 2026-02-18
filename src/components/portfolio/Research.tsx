const Research = () => {
  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Research</h2>
        <article className="border border-border rounded-sm p-6">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Spectral Determination of Graphs
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Ongoing
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Investigating conditions under which graphs are uniquely determined by
            their adjacency spectrum. This work involves analyzing cospectral
            graphs, characterizing spectral invariants, and exploring connections
            between graph topology and eigenvalue distributions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Research;
