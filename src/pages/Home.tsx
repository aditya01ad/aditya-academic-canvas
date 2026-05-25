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

const highlights = [
  { label: "Institution", value: PROFILE.mscInstitution, sub: `${PROFILE.mscDegree} · ${PROFILE.mscPeriod}` },
  { label: "Academic Standing", value: `CGPA ${PROFILE.mscCgpa}`, sub: `MSc · IIT Bhubaneswar` },
  { label: "Undergraduate", value: `CGPA ${PROFILE.bscCgpa}`, sub: `BSc · VNSGU, Surat · ${PROFILE.bscPeriod}` },
  { label: "Research Paper", value: "In Preparation", sub: PROFILE.paperCitation },
  { label: "Supervisor", value: PROFILE.supervisor, sub: "Spectral Graph Theory" },
  { label: "Availability", value: "Open to Opportunities", sub: "Research · Industry · Teaching" },
];

const educationEntries = [
  {
    degree: PROFILE.mscDegree,
    institution: PROFILE.mscInstitution,
    period: PROFILE.mscPeriod,
    cgpa: `CGPA: ${PROFILE.mscCgpa}`,
    note: `Thesis: ${PROFILE.paperTitle}`,
  },
  {
    degree: PROFILE.bscDegree,
    institution: PROFILE.bscInstitution,
    period: PROFILE.bscPeriod,
    cgpa: `CGPA: ${PROFILE.bscCgpa}`,
    note: "",
  },
];

const Home = () => {
  return (
    <PageLayout title="Home">
      <section className="page-container page-section text-center">
        <h1 className="page-title mt-4">{PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground mt-3">Mathematician · IIT Bhubaneswar</p>
        <p className="page-lede mt-4 max-w-2xl mx-auto">
          MSc Mathematics at IIT Bhubaneswar with a focus on spectral graph theory, pure mathematics, and
          programming. Excited to work on applied roles through research-led projects and collaboration.
          A curious mind who enjoys exploring new ideas and intellectual conversations.
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
              Open to research discussions and collaboration. Reach out via {PROFILE.email} or
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

      {/* ── Overview / Profile Highlights ── */}
      <section className="page-container page-section">
        <p className="page-subtitle">Overview</p>
        <h2 className="text-2xl font-medium text-foreground mt-2">Profile highlights</h2>
        <p className="page-lede mt-3 max-w-2xl">
          A quick snapshot of academic standing, research status, and availability.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="border border-border rounded-sm p-5 card-hover">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{highlight.label}</p>
              <p className="mt-2 text-base font-medium text-foreground">{highlight.value}</p>
              {highlight.sub && <p className="mt-1 text-xs text-muted-foreground">{highlight.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="page-container page-section">
        <p className="page-subtitle">Education</p>
        <h2 className="text-2xl font-medium text-foreground mt-2">Academic background</h2>
        <div className="mt-8 space-y-6">
          {educationEntries.map((entry) => (
            <div key={entry.degree} className="border border-border rounded-sm p-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-medium text-foreground">{entry.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{entry.institution}</p>
                  {entry.note && (
                    <p className="text-xs text-muted-foreground mt-2 italic">{entry.note}</p>
                  )}
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="text-xs text-muted-foreground">{entry.period}</span>
                  <span className="text-xs font-medium text-foreground">{entry.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-container page-section">
        <div className="border border-border rounded-sm p-6 md:p-8 card-hover">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="page-subtitle">Focus areas</p>
              <h2 className="text-2xl font-medium text-foreground mt-2">Themes shaping the work</h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-xl">
                Rigorous mathematics, active research in spectral graph theory, and a growing interest in applied and computational directions.
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
