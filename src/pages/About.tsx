import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "MATLAB", "R", "LaTeX"],
  },
  {
    title: "Tools & Platforms",
    items: ["Jupyter", "Git", "Linux", "Overleaf", "Obsidian"],
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
            <h3 className="text-lg font-medium text-foreground">Narrative</h3>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Placeholder biography describing academic background, motivations, and the personal journey
              shaping the research portfolio.
            </p>
          </article>
          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Guiding values</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Placeholder values statement covering curiosity, rigor, mentorship, and collaborative impact.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "education-awards",
      label: "Education & Awards",
      content: (
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">Education</h3>
            <div className="space-y-4">
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">M.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">Indian Institute of Technology Bhubaneswar</p>
                <p className="text-xs text-muted-foreground">Placeholder: 2024 – Present</p>
              </div>
              <div className="accent-left">
                <p className="text-sm font-medium text-foreground">B.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground mt-1">Placeholder University</p>
                <p className="text-xs text-muted-foreground">Placeholder: 2021 – 2024</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Awards</h3>
              <Badge variant="planned" />
            </div>
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
        <h1 className="page-title mt-2">Personal profile</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Placeholder summary of personal story, education highlights, and professional skills. Replace with
          the finalized narrative and achievements.
        </p>
        <div className="mt-10">
          <Tabs tabs={tabs} defaultTab={defaultTab} />
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
