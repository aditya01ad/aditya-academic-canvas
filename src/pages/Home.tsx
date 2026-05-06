import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const focusAreas = [
  "Spectral Graph Theory",
  "Convex Optimization",
  "Graph Neural Networks",
  "Numerical Analysis",
];

const Home = () => {
  return (
    <PageLayout title="Home">
      <section className="page-container page-section text-center">
       
        <h1 className="page-title mt-4">{PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground mt-3">Mathematician · ML Engineer</p>
        <p className="page-lede mt-4 max-w-2xl mx-auto">
          MSc Mathematics at IIT Bhubaneswar with a focus on spectral methods research, pure mathematics, and
          programming. Exited to work on applied roles through research-le projects and collaboration. love intellectual conversations. A curious mind, enjoy exploring. 
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/research"
            className="inline-flex items-center justify-center border border-border px-5 py-2 rounded-sm text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-200"
          >
            Explore research
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-foreground bg-foreground text-background px-5 py-2 rounded-sm text-xs uppercase tracking-widest hover:opacity-90 transition-opacity duration-200"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <section className="page-container page-section">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="border border-border rounded-sm p-6 card-hover">
            <Badge variant="active" />
            <h2 className="text-lg font-medium text-foreground mt-3">Research focus</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Working under {PROFILE.supervisor} on {PROFILE.paperTitle}. Current milestone is drafting the
              manuscript while deepening expertise in spectral graph theory.
            </p>
            <Link
              to="/research"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              View research
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <Badge variant="inprep" />
            <h2 className="text-lg font-medium text-foreground mt-3">Project portfolio</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Applied builds centered on optimization algorithms, graph spectra codes, and structured
              math notes for learning and teaching.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse projects
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <Badge variant="planned" />
            <h2 className="text-lg font-medium text-foreground mt-3">Collaborate & connect</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Open to different roles and research discussions. Reach out via {PROFILE.email} or
              explore work at {PROFILE.website}.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Start a conversation
            </Link>
          </article>
        </div>
      </section>

      <section className="page-container page-section">
        <div className="border border-border rounded-sm p-6 md:p-8 card-hover">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
            <p className="page-subtitle">Focus areas</p>
            <h2 className="text-2xl font-medium text-foreground mt-2">Themes shaping the work</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl">
               rigorous mathematics, stuck in coursework, getting research done,growing Intellectually and emotionally.
            </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Tag key={area} label={area} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
