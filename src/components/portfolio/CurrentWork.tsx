import { useScrollReveal } from "@/hooks/useScrollReveal";

const CurrentWork = () => {
  const ref = useScrollReveal();

  return (
    <section id="current-work" className="py-20 px-6">
      <div ref={ref} className="max-w-2xl mx-auto reveal">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-6 text-center">
          Currently Working On
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 border-accent pl-5">
            <h3 className="text-base font-medium text-foreground">
              Spectral Determination of Graphs
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mt-1">
              Investigating cospectral pairs and conditions for spectral
              uniqueness in families of graphs, with applications to network
              analysis.
            </p>
          </div>
          <div className="border-l-2 border-border pl-5">
            <h3 className="text-base font-medium text-foreground">
              Convex Optimization Methods
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mt-1">
              Exploring proximal gradient and interior-point methods for
              structured convex programs arising in machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
