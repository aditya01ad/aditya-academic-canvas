import { Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-20 px-6">
      <div ref={ref} className="max-w-2xl mx-auto reveal">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-6 text-center">Contact</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-8 text-center">
          I am open to collaboration and discussion on topics in mathematics,
          theoretical computer science, and machine learning. I typically
          respond within a few days.
        </p>
        <div className="border border-border rounded-sm p-6 space-y-5">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Preferred Collaboration Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Spectral Graph Theory",
                "Convex Optimization",
                "Machine Learning Theory",
                "Mathematical Problem Solving",
              ].map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-3 py-1.5 border border-border text-foreground rounded-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
            <a
              href="mailto:24MA05020@iitbbs.ac.in"
              className="text-sm text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="Send email to 24MA05020@iitbbs.ac.in"
            >
              24MA05020@iitbbs.ac.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
