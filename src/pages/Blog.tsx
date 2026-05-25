import PageLayout from "@/components/layout/PageLayout";

const plannedTopics = [
  "The spectral view of graph neural networks",
  "What is optimization, mathematically?",
  "From theorem-proving at IIT to career building — what changed",
  "Why eigenvalues matter more than you think",
  "The mathematician’s perspective on engineering problems",
  "Interesting mathematics everyone should know",
  "What an M.Sc. Mathematics graduate can offer beyond academia",
];

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <section className="page-container page-section">
        <div className="max-w-2xl">
          <p className="page-subtitle">Writing</p>
          <h1 className="page-title mt-2">Thinking out loud about Math and Tech.</h1>
          <p className="page-lede mt-4">
            Writing about rigorous mathematics, its applications in science and technology,
            and the journey from pure research to the real world.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Planned Topics</p>
            <div className="mt-4 space-y-3">
              {plannedTopics.map((topic) => (
                <div key={topic} className="border border-border rounded-sm px-4 py-3 card-hover">
                  <p className="text-sm text-foreground">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
            First posts coming soon. Follow on{" "}
            <a
              href="https://linkedin.com/in/aditya01ad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>{" "}
            for updates.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
