import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Tabs, { Tab } from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "SageMath", "C (basics)", "Bash"],
  },
  {
    title: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch (learning)"],
  },
  {
    title: "Tools",
    items: ["LaTeX", "Git", "Linux (Ubuntu)", "VS Code", "Docker (learning)"],
  },
  {
    title: "Mathematics",
    items: [
      "Spectral Graph Theory",
      "Linear Algebra",
      "Convex Optimization",
      "Numerical Analysis",
      "Functional Analysis",
      "Probability & Statistics",
      "Topology",
      "Abstract Algebra",
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
              {PROFILE.name} is an M.Sc. Mathematics graduate from IIT Bhubaneswar (May 2026),
              specialising in spectral graph theory. His thesis, supervised by {PROFILE.supervisor},
              investigates the spectral determination of graphs with pendant attachments — a problem
              sitting at the intersection of combinatorics, linear algebra, and graph theory.
            </p>
          </article>

          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Current focus</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Finalising the manuscript on {PROFILE.paperTitle} alongside independent study in
              convex optimization, numerical methods, and applied ML — actively exploring
              industry, research, and teaching roles.
            </p>
          </div>

          <div className="accent-left space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Background</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Completed B.Sc. Mathematics from VNSGU, Surat (CGPA 8.63), then qualified IIT JAM 2024
              to join IIT Bhubaneswar. Also qualified GATE 2026 (MA) and JEE Advanced 2020.
              A fast learner with genuine curiosity across mathematics, physics, economics, and computing.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education & Exams",
      content: (
        <div className="space-y-8">
          <div className="space-y-5">
            <h3 className="text-lg font-medium text-foreground">Education</h3>

            <div className="accent-left">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="text-sm font-medium text-foreground">M.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground">2024 – 2026</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">IIT Bhubaneswar &nbsp;·&nbsp; CGPA {PROFILE.mscCgpa}</p>
              <p className="text-xs text-muted-foreground mt-2">Supervisor: {PROFILE.supervisor}</p>
              <p className="text-xs text-muted-foreground mt-1 italic">Thesis: {PROFILE.paperTitle}</p>
            </div>

            <div className="accent-left">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="text-sm font-medium text-foreground">B.Sc. Mathematics</p>
                <p className="text-xs text-muted-foreground">2021 – 2024</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">VNSGU, Surat &nbsp;·&nbsp; CGPA {PROFILE.bscCgpa}</p>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-medium text-foreground">Competitive Exams</h3>

            <div className="accent-left">
              <p className="text-sm font-medium text-foreground">GATE 2026 — Mathematics (MA)</p>
              <p className="text-xs text-muted-foreground mt-1">Qualified &nbsp;·&nbsp; IIT Roorkee</p>
            </div>

            <div className="accent-left">
              <p className="text-sm font-medium text-foreground">IIT JAM 2024 — Mathematics</p>
              <p className="text-xs text-muted-foreground mt-1">Qualified &nbsp;·&nbsp; IIT Bhubaneswar (admitted)</p>
            </div>

            <div className="accent-left">
              <p className="text-sm font-medium text-foreground">JEE Advanced 2020</p>
              <p className="text-xs text-muted-foreground mt-1">Qualified</p>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-medium text-foreground">Conferences</h3>

            <div className="accent-left">
              <p className="text-sm font-medium text-foreground">IWSMGA 2025</p>
              <p className="text-xs text-muted-foreground mt-1">International Workshop on Spectral Methods in Graph Algorithms</p>
            </div>

            <div className="accent-left">
              <p className="text-sm font-medium text-foreground">ICLAA 2025</p>
              <p className="text-xs text-muted-foreground mt-1">International Conference on Linear Algebra and its Applications</p>
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
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{group.title}</p>
              <div className="flex flex-wrap gap-2">
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

  const defaultTab = tabParam && tabs.some((t) => t.id === tabParam) ? tabParam : "story";

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
