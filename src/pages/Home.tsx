import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";
import { projects } from "@/data/projects";

const interests = [
  "Graph theory",
  "Physics",
  "Coding little tools",
  "Optimization",
  "Music",
  "Coffee & cooking",
  "Questions without neat answers",
];

const featured = projects.filter((project) => project.featured).slice(0, 4);

export default function Home() {
  return (
    <PageLayout title="Home">
      <section className="page-container page-section text-center">
        <p className="page-subtitle">Hello, and welcome</p>
        <h1 className="page-title mt-4">{PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground mt-3">Mathematics, code, and whatever catches my curiosity.</p>
        <p className="page-lede mt-5 max-w-2xl mx-auto">
          I studied mathematics at IIT Bhubaneswar, where I got interested in spectral graph theory.
          I also like programming, physics, exploring new ideas, and making small things just to see
          if I can. This website is a place to keep some of that together—not just the academic parts.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/about" className="inline-flex items-center justify-center border border-border px-5 py-2 rounded-sm text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-200">
            A little about me
          </Link>
          <Link to="/projects" className="inline-flex items-center justify-center border border-foreground bg-foreground text-background px-5 py-2 rounded-sm text-xs uppercase tracking-widest hover:opacity-90 transition-opacity duration-200">
            Things I've made
          </Link>
        </div>
      </section>

      <section className="page-container page-section">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">The mathematics</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Graph spectra, cospectral graphs, and the questions I explored during my master's thesis.
            </p>
            <Link to="/research" className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Read about the research →
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">The experiments</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Code, notebooks, mathematical models, half-finished ideas, and the occasional useful little tool.
            </p>
            <Link to="/projects" className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Browse projects →
            </Link>
          </article>
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">The other bits</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Music, coffee experiments, recipes, and other things that don't quite fit under a subject heading.
            </p>
            <Link to="/notes" className="mt-4 inline-flex text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Visit the kitchen notebook →
            </Link>
          </article>
        </div>
      </section>

      <section className="page-container page-section">
        <p className="page-subtitle">From the folders</p>
        <h2 className="text-2xl font-medium text-foreground mt-2">A few things I've worked on</h2>
        <p className="page-lede mt-3 max-w-2xl">
          Some are research projects, some are learning exercises, and some exist because an idea sounded fun.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <article key={project.id} className="border border-border rounded-sm p-5 card-hover">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{project.kind}</p>
              <h3 className="mt-2 text-base font-medium text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors">
                View repository ↗
              </a>
            </article>
          ))}
        </div>
        <Link to="/projects" className="mt-6 inline-flex text-sm text-accent hover:text-foreground transition-colors">
          See everything I've put on GitHub →
        </Link>
      </section>

      <section className="page-container page-section">
        <p className="page-subtitle">A little background</p>
        <h2 className="text-2xl font-medium text-foreground mt-2">How I got here</h2>
        <div className="mt-8 space-y-5">
          <div className="border border-border rounded-sm p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-foreground">{PROFILE.mscDegree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{PROFILE.mscInstitution}</p>
                <p className="mt-2 text-xs text-muted-foreground">Thesis: <em>{PROFILE.paperTitle}</em></p>
              </div>
              <span className="text-xs text-muted-foreground">{PROFILE.mscPeriod}</span>
            </div>
          </div>
          <div className="border border-border rounded-sm p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-foreground">{PROFILE.bscDegree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{PROFILE.bscInstitution}</p>
              </div>
              <span className="text-xs text-muted-foreground">{PROFILE.bscPeriod}</span>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          There's more to the story, including everything I still don't know. <Link className="text-accent hover:text-foreground" to="/about">That's on the About page →</Link>
        </p>
      </section>

      <section className="page-container page-section">
        <div className="border border-border rounded-sm p-6 md:p-8">
          <p className="page-subtitle">Beyond a subject list</p>
          <h2 className="text-2xl font-medium text-foreground mt-2">Things I keep coming back to</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            I don't really separate academic interests from everything else. One day it's a graph problem,
            another day it's a new piece of tech, a playlist, or trying to make a better cup of coffee.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {interests.map((interest) => <Tag key={interest} label={interest} />)}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Have something interesting to share? <Link className="text-accent hover:text-foreground" to="/contact">Say hello →</Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
