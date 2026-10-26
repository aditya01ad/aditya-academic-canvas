import { Link, useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Tabs, { type Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const skillGroups = [
  {
    title: "Mathematics I've studied",
    items: ["Spectral Graph Theory", "Linear Algebra", "Graph Theory", "Combinatorics", "Abstract Algebra", "Numerical Analysis", "Optimization", "Probability & Statistics"],
  },
  {
    title: "Coding & computation",
    items: ["Python", "SageMath", "MATLAB", "NumPy", "pandas", "NetworkX", "SciPy", "PuLP"],
  },
  {
    title: "Tools I've worked with",
    items: ["Jupyter / Google Colab", "LaTeX", "Git & GitHub", "VS Code", "React / TypeScript (for this website)"],
  },
  {
    title: "Still learning, always",
    items: ["Mathematical modelling", "Building better software", "Algorithms", "Data analysis", "Whatever looks interesting next"],
  },
];

export default function About() {
  const [searchParams] = useSearchParams();
  const requestedTab = searchParams.get("tab");

  const tabs: Tab[] = [
    {
      id: "story",
      label: "My story",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">A little about me</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Hi, I'm {PROFILE.name}, from Surat, Gujarat. I completed my M.Sc. in Mathematics
              at IIT Bhubaneswar in May 2026. I like solving problems, but I probably like
              discovering a new question just as much.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              During my master's, I spent a lot of time thinking about graphs and their eigenvalues.
              That became my thesis work with {PROFILE.supervisor}. Along the way I found myself
              writing code to test examples, exploring mathematical tools, and getting curious
              about what these ideas can do outside a textbook.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">What interests me these days</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Graph theory is still close to my heart. I'm also getting more into optimization,
              operations research, algorithms and hands-on programming. I like being able to move
              between an idea on paper and something I can actually experiment with.
            </p>
          </div>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Not just the math</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Physics, technology, music, trying things in the kitchen, finding new places,
              and getting distracted by a perfectly good side project—there's usually something
              else on my mind. I don't want this site to pretend I only exist at a desk.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            You can explore the <Link to="/research" className="text-accent hover:text-foreground">research</Link>,
            browse the <Link to="/projects" className="text-accent hover:text-foreground">code</Link>,
            or just wander into the <Link to="/notes" className="text-accent hover:text-foreground">coffee notes</Link>.
          </p>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education",
      content: (
        <div className="space-y-8">
          <div className="space-y-5">
            <h2 className="text-lg font-medium text-foreground">My academic path</h2>
            <div className="accent-left">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <h3 className="text-sm font-medium text-foreground">{PROFILE.mscDegree}</h3>
                <span className="text-xs text-muted-foreground">{PROFILE.mscPeriod}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{PROFILE.mscInstitution} · Final CGPA {PROFILE.mscCgpa}</p>
              <p className="mt-2 text-xs text-muted-foreground">Thesis: <em>{PROFILE.paperTitle}</em></p>
              <p className="mt-1 text-xs text-muted-foreground">Supervisor: {PROFILE.supervisor}</p>
            </div>
            <div className="accent-left">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <h3 className="text-sm font-medium text-foreground">{PROFILE.bscDegree}</h3>
                <span className="text-xs text-muted-foreground">{PROFILE.bscPeriod}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Veer Narmad South Gujarat University, Surat · CGPA {PROFILE.bscCgpa}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground">A few milestones along the way</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I qualified IIT JAM Mathematics in 2024, which took me to IIT Bhubaneswar.
              I've also qualified GATE Mathematics (2026) and JEE Advanced (2020).
              They're part of the journey, but there's more to learning than exam results.
            </p>
          </div>
          <div className="accent-left">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">What I enjoyed studying</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Linear algebra and graph theory in particular; also algebra, analysis, numerical
              methods and the way different topics unexpectedly connect.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      label: "Skills & tools",
      content: (
        <div className="space-y-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            This isn't a checklist of things I've mastered. It's a mix of subjects I've studied,
            tools I've used, and things I'm still figuring out.
          </p>
          {skillGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => <Tag key={item} label={item} />)}
              </div>
            </section>
          ))}
        </div>
      ),
    },
    {
      id: "elsewhere",
      label: "Away from the desk",
      content: (
        <div className="space-y-6">
          <article className="border border-border rounded-sm p-6 card-hover">
            <h2 className="text-lg font-medium text-foreground">The other side of this website</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I like discovering music, finding things to cook, experimenting with coffee,
              exploring places when I get the chance, and tinkering with everyday technology.
              Some of those interests make it onto this website. Most are just part of life.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Coffee notes</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              There's already a little interactive recipe book here, mostly for coffee.
              It's not exactly related to spectral graph theory, which is part of the fun.
            </p>
            <Link to="/notes" className="inline-flex text-sm text-accent hover:text-foreground">Take a look →</Link>
          </div>
          <div className="accent-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Why I made this place</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I wanted somewhere that's mine, where the serious work and the random interests
              can sit together. It'll probably stay a work in progress. I'm okay with that.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const defaultTab = requestedTab && tabs.some((tab) => tab.id === requestedTab) ? requestedTab : "story";

  return (
    <PageLayout title="About">
      <section className="page-container page-section">
        <p className="page-subtitle">A little introduction</p>
        <h1 className="page-title mt-2">About me</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Mathematics is a big part of my life, but it's not all of it.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab={defaultTab} />
        </div>
      </section>
    </PageLayout>
  );
}
