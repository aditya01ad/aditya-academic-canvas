import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const skillGroups = [
  {
    title: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch (learning)"],
  },
  {
    title: "Tools",
    items: ["LaTeX", "Git", "Linux (Ubuntu)", "Docker (learning)", "FastAPI (learning)"],
  },
  {
    title: "Mathematics",
    items: [
      "Spectral Methods",
      "Convex Optimization",
      "Numerical Analysis",
      "Functional Analysis",
      "Probability Theory",
      "Topology",
    ],
  },
];

const About = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const tabs: Tab[] = [
    {
      id: "story",
      label: "Story",
      content: (
        <div className="space-y-6">
            <article className="border border-border rounded-sm p-6 card-hover">
              <h3 className="text-lg font-medium text-foreground">Mathematics and research</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {PROFILE.name} is an MSc Mathematics student at IIT Bhubaneswar, focusing on spectral graph
                theory and its applications. The long-term goal is to translate rigorous mathematical
                theory into meaningful research contributions and applied work.
              </p>
            </article>
            <div className="accent-left space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thesis work on {PROFILE.paperTitle} under {PROFILE.supervisor}, alongside independent study in
                convex optimization and numerical analysis.
              </p>
            </div>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education & Awards",
      content: (
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Education</h3>
            <div className="space-y-4">
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">M.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">{PROFILE.msc}</p>
                <p className="text-xs text-muted-foreground mt-2">Supervisor: {PROFILE.supervisor}</p>
                <p className="text-xs text-muted-foreground mt-1">{PROFILE.paperTitle}</p>
                <p className="text-xs text-muted-foreground">{PROFILE.paperCitation}</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">B.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">{PROFILE.bsc}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Competitive Exams</h3>
            <div className="space-y-4">
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">GATE 2026 — Mathematics (MA)</p>
                <p className="text-xs text-muted-foreground mt-1">Qualified</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">IIT JAM 2024 — Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">Qualified</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">JEE Advanced 2020</p>
                <p className="text-xs text-muted-foreground mt-1">Qualified</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      content: (
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];
  const defaultTab = tabParam && tabs.some((tab) => tab.id === tabParam) ? tabParam : "story";

  return (
    <PageLayout title="About">
      <section className="page-container page-section">
        <p className="page-subtitle">About</p>
        <h1 className="page-title mt-2">{PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground mt-3">{PROFILE.msc}</p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab={defaultTab} />
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
