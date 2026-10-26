import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import GraphMark from "@/components/visual/GraphMark";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { PROFILE } from "@/lib/profile";

const featured = projects.filter(p => p.featured);

export default function Home() {
  return (
    <PageLayout title="Home">
      <div className="page-container">
        <section className="home-intro">
          <div className="home-intro-text">
            <p className="eyebrow">Hello, I'm</p>
            <h1 className="home-name">{PROFILE.name}<span className="accent-ink">.</span></h1>
            <p className="home-subtitle">Mathematics graduate · Research & computation</p>
            <p className="intro-lead">
              I like understanding <em>why</em> things work—and then trying to make them work in code.
            </p>
            <p className="intro-copy">
              My M.Sc. at IIT Bhubaneswar took me into spectral graph theory and questions about
              what a graph’s eigenvalues can reveal. These days, I’m also exploring operations
              research, optimization, and ways to apply mathematics to practical problems.
            </p>
            <div className="intro-links">
              <Link className="text-link" to="/projects">See my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link className="text-link" to="/about">A little about me <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
          <GraphMark />
        </section>

        <div className="hairline" aria-hidden="true" />

        <section className="home-section">
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            title="Things I've worked on"
            description="A few projects at the intersection of mathematics and computation. Some are finished; others are very much a work in progress."
            action={<Link className="text-link" to="/projects">All projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>}
          />
          <div className="work-list">{featured.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}</div>
        </section>

        <section className="home-section section-columns" aria-labelledby="interests-heading">
          <div>
            <p className="section-label">02 / ON MY DESK</p>
            <h2 className="section-title" id="interests-heading">What I'm exploring now</h2>
          </div>
          <div className="prose-column">
            <p>Learning more about linear and integer programming, building Python notebooks, and looking for useful connections between graph theory and optimization.</p>
            <p>I enjoy both the proof on paper and the experiment that follows it. A good question is usually enough to get me started.</p>
            <Link className="text-link" to="/research">More on the research side <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="home-section section-columns last-section" aria-labelledby="background-heading">
          <div>
            <p className="section-label">03 / A LITTLE BACKGROUND</p>
            <h2 className="section-title" id="background-heading">From the notebook</h2>
          </div>
          <div className="prose-column">
            <p>I completed my M.Sc. in Mathematics at IIT Bhubaneswar in May 2026. My thesis, supervised by {PROFILE.supervisor}, was on <em>{PROFILE.paperTitle}</em>.</p>
            <p>I'm interested in opportunities involving mathematical reasoning, analytical work, optimization, or research—and always happy to exchange ideas.</p>
            <Link className="text-link" to="/contact">Say hello <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
