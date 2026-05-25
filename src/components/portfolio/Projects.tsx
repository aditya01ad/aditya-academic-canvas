import { Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const ref = useScrollReveal();
  return (
    <section id="projects" className="py-20 px-6">
      <div ref={ref} className="max-w-2xl mx-auto reveal">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Projects</h2>
        <article className="border border-border rounded-sm p-6 card-hover">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-medium text-foreground">
              Optimization Algorithms Implementation
            </h3>
            <a
              href="https://github.com/aditya01ad"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
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
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
              Matplotlib
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
