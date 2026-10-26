import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { PROFILE } from "@/lib/profile";

const skills = [
  { label: "Mathematics", value: "Spectral graph theory, linear algebra, combinatorics, numerical analysis, optimization, probability and statistics" },
  { label: "Programming", value: "Python, MATLAB, SageMath; some Java, C, TypeScript and React experience" },
  { label: "Libraries & tools", value: "NetworkX, NumPy, pandas, SciPy, PuLP, SymPy, Git, Jupyter, LaTeX" },
];

export default function About() {
  return (
    <PageLayout title="About">
      <div className="page-container inner-page">
        <header className="page-intro">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1 className="page-title">Curious by nature<span className="accent-ink">.</span></h1>
          <p className="page-lede">I studied mathematics because I liked asking questions. I stayed interested because there's always another one.</p>
        </header>

        <section className="reading-section" aria-labelledby="about-story">
          <h2 className="reading-heading" id="about-story">The short version</h2>
          <p className="reading-copy">I’m {PROFILE.name}, a mathematics graduate from IIT Bhubaneswar. For my M.Sc. thesis, I worked with {PROFILE.supervisor} on spectral graph theory—particularly the spectral determination of graphs with pendant attachments.</p>
          <p className="reading-copy">I enjoy abstract ideas, but I also like seeing what they do on a computer. That has led me to graph algorithms, numerical experiments, and, more recently, operations research and optimization. I'm developing the practical side through Python and mathematical modeling.</p>
          <p className="reading-copy">Outside those topics, I'm drawn to science, physics, technology, and interesting problems in general. I like learning across subjects rather than keeping everything in separate boxes.</p>
        </section>

        <section className="reading-section" aria-labelledby="about-education">
          <h2 className="reading-heading" id="about-education">Education</h2>
          <dl className="detail-list">
            <div className="detail-row">
              <dt className="detail-term">2024 – 2026</dt>
              <dd className="detail-description">
                <strong>M.Sc. Mathematics</strong><span className="block text-sm text-muted-foreground">Indian Institute of Technology Bhubaneswar</span>
                <span className="block text-sm text-muted-foreground">Final CGPA: {PROFILE.mscCgpa}</span>
                <span className="block pt-2 text-sm text-muted-foreground">Thesis: <em>{PROFILE.paperTitle}</em></span>
              </dd>
            </div>
            <div className="detail-row">
              <dt className="detail-term">2021 – 2024</dt>
              <dd className="detail-description">
                <strong>B.Sc. Mathematics</strong><span className="block text-sm text-muted-foreground">Veer Narmad South Gujarat University, Surat</span>
                <span className="block text-sm text-muted-foreground">CGPA: {PROFILE.bscCgpa}</span>
              </dd>
            </div>
          </dl>
        </section>

        <section className="reading-section" aria-labelledby="about-skills">
          <h2 className="reading-heading" id="about-skills">What I work with</h2>
          <p className="reading-copy mb-5">A mix of studied mathematics and computational tools. The list includes tools I have practiced; it isn't a claim of equal expertise in everything.</p>
          <dl className="detail-list">{skills.map(s=><div className="detail-row" key={s.label}><dt className="detail-term">{s.label}</dt><dd className="detail-description text-muted-foreground">{s.value}</dd></div>)}</dl>
        </section>

        <section className="reading-section" aria-labelledby="about-exams">
          <h2 className="reading-heading" id="about-exams">A few academic milestones</h2>
          <p className="reading-copy">Qualified IIT JAM Mathematics (2024), GATE Mathematics (2026), and JEE Advanced (2020). My academic interests have also taken me toward conversations around spectral methods and linear algebra.</p>
        </section>

        <div className="mt-8">
          <a className="text-link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true"/></a>
        </div>
      </div>
    </PageLayout>
  );
}
