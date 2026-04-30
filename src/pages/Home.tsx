import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";

const focusAreas = [
  "Spectral Graph Theory",
  "Optimization",
  "Academic Writing",
  "Teaching",
];

const Home = () => {
  return (
    <PageLayout>
      <section className="page-container page-section text-center">
        <Badge tone="accent">Personal brand</Badge>
        <h1 className="page-title mt-4">Aditya · Academic Portfolio</h1>
        <p className="page-lede mt-4 max-w-2xl mx-auto">
          Placeholder introduction for a multi-page personal brand site. This landing view highlights the
          central narrative, current focus, and the paths that guide visitors deeper into research and
          project work.
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
            <Badge>Research</Badge>
            <h2 className="text-lg font-medium text-foreground mt-3">Living research narrative</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Placeholder summary describing ongoing investigations, current questions, and how the work
              connects to broader academic themes.
            </p>
            <Link
              to="/research"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              View research
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <Badge>Projects</Badge>
            <h2 className="text-lg font-medium text-foreground mt-3">Project portfolio</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Placeholder card for active and completed projects, showcasing methods, outcomes, and
              collaborations.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse projects
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <Badge>About</Badge>
            <h2 className="text-lg font-medium text-foreground mt-3">Personal story</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Placeholder content for biography, education highlights, and the voice behind the work.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Read the story
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
                Placeholder text describing the academic and creative themes that anchor research, teaching,
                and collaboration.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
