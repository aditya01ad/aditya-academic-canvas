import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";

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
            <h3 className="text-lg font-medium text-foreground">Mathematics, research, and ML</h3>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Placeholder narrative for Aditya&apos;s academic journey, current research direction, and the
              motivation behind the shift toward machine learning engineering.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Exploring spectral graph methods, convex optimization, and the applied side of machine learning
              theory through coursework, reading groups, and independent projects.
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
                <p className="text-xs text-muted-foreground mt-1">Indian Institute of Technology Bhubaneswar</p>
                <p className="text-xs text-muted-foreground">2024 – 2026 (expected)</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">B.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">Placeholder University</p>
                <p className="text-xs text-muted-foreground">2021 – 2024</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Awards</h3>
            <div className="space-y-4">
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">Academic Excellence Award</p>
                <p className="text-xs text-muted-foreground mt-1">Placeholder award description and year.</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">Research Travel Grant</p>
                <p className="text-xs text-muted-foreground mt-1">Placeholder award description and year.</p>
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
        <h1 className="page-title mt-2">Aditya Chauhan</h1>
        <p className="text-sm text-muted-foreground mt-3">
          MSc Mathematics · IIT Bhubaneswar · Graduating May 2026
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab={defaultTab} />
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
