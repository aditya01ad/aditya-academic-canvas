import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import MathVisual from "@/components/visual/MathVisual";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { PROFILE } from "@/lib/profile";

const interests = ["Spectral graph theory", "Operations research", "Optimization", "Scientific computing"];
const featured = projects.filter(p => p.featured);

export default function Home() {
  return <PageLayout title="Mathematics, research & computation">
    <section className="hero-shell relative overflow-hidden">
      <div className="page-container relative grid min-h-[620px] items-center gap-8 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="relative z-10">
          <div className="eyebrow hero-kicker"><span className="accent-dot" /> MATHEMATICS / RESEARCH / COMPUTATION</div>
          <h1 className="hero-heading mt-7">Finding structure <span className="italic accent-ink">in complexity.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            I'm {PROFILE.name}, a mathematics graduate from IIT Bhubaneswar. I explore graph theory, optimization, and computation—connecting rigorous ideas with practical problems.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">Explore my work <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/about" className="btn-secondary">More about me <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="hero-detail">{PROFILE.mscDegree}</span><span aria-hidden="true">·</span>
            <span className="hero-detail">{PROFILE.mscInstitution}</span><span aria-hidden="true">·</span>
            <span className="hero-detail">Class of 2026</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none"><MathVisual /></div>
      </div>
      <div className="page-container"><div className="hero-rule" /></div>
    </section>

    <section className="page-container section-space">
      <SectionHeading eyebrow="01 — SELECTED WORK" title="Ideas, explored in code." description="A selection of research and applied mathematical work. Each project links to its source repository." action={<Link to="/projects" className="text-link">All projects <ArrowUpRight className="h-4 w-4"/></Link>} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{featured.map((project,i)=><ProjectCard key={project.id} project={project} index={i}/>)}</div>
    </section>

    <section className="section-band">
      <div className="page-container section-space grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow mb-5">02 — AREAS OF INTEREST</p>
          <h2 className="section-title">Theory meets <span className="italic accent-ink">application.</span></h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            My foundation is in mathematical reasoning: graph spectra, linear algebra, and discrete structures. I’m extending that foundation into operations research, computational tools, and optimization models.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">{interests.map((item, i)=><span className="interest-pill" key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</span>)}</div>
          <Link className="text-link mt-9" to="/research">Read about my research <ArrowUpRight className="h-4 w-4"/></Link>
        </div>
      </div>
    </section>

    <section className="page-container section-space">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="eyebrow mb-5">03 — BACKGROUND</p>
          <h2 className="section-title">Built on curiosity. <br/><span className="italic accent-ink">Driven by questions.</span></h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-8">I completed my M.Sc. in Mathematics at IIT Bhubaneswar in May 2026, with thesis research under {PROFILE.supervisor}. Today I’m developing more applied skills alongside my interest in spectral and discrete mathematics.</p>
          <Link to="/about" className="text-link mt-7">My background <ArrowRight className="h-4 w-4"/></Link>
        </div>
        <div className="credential-panel">
          <span className="eyebrow">ACADEMIC FOUNDATION</span>
          <div className="mt-7 border-b border-border pb-6">
            <p className="text-xs text-muted-foreground">2024 — 2026</p>
            <h3 className="mt-2 font-display text-2xl">M.Sc. Mathematics</h3>
            <p className="mt-2 text-sm text-muted-foreground">Indian Institute of Technology Bhubaneswar</p>
          </div>
          <div className="py-6">
            <p className="text-xs text-muted-foreground">2021 — 2024</p>
            <h3 className="mt-2 font-display text-2xl">B.Sc. Mathematics</h3>
            <p className="mt-2 text-sm text-muted-foreground">VNSGU, Surat</p>
          </div>
        </div>
      </div>
    </section>

    <section className="page-container pb-20 md:pb-28">
      <div className="contact-banner">
        <div><span className="eyebrow !text-white/60">LET'S CONNECT</span><h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Interesting problem? Let's talk.</h2><p className="mt-3 text-sm leading-7 text-white/70">Research collaboration, technical projects, and analytical opportunities.</p></div>
        <div className="flex flex-wrap gap-3"><Link className="btn-on-dark" to="/contact">Get in touch <ArrowUpRight className="h-4 w-4"/></Link><a className="btn-on-dark-outline" href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4"/> GitHub</a></div>
      </div>
    </section>
  </PageLayout>;
}
