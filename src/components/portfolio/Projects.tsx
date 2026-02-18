const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Projects</h2>
        <article className="border border-border rounded-sm p-6">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Optimization Algorithms Implementation
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Implemented and benchmarked classical optimization algorithms
            including gradient descent variants and Newton-Raphson method.
            Explored convergence behavior under different step-size strategies and
            visualized optimization landscapes for convex and non-convex
            objective functions.
          </p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
              Python
            </span>
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
              NumPy
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
