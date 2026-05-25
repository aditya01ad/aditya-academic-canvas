import PageLayout from "@/components/layout/PageLayout";

const plannedTopics = [
  "The spectral view of graph neural networks",
  "what is optimization mathematically and why?",
  "From IIT theorem-proving to career building — what changed",
  "Why eigenvalues matters?",
  "Engineering Advancement : the mathematician's perspective",
  "A list of interesting mathematics for all",
  "What extra a math graduate students/ scholars can have?"
];

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <section className="page-container page-section">
        <div className="max-w-2xl">
          <p className="page-subtitle">Writing</p>
          <h1 className="page-title mt-2">Thinking out loud about Math and Tech.</h1>
          <p className="page-lede mt-4">
            I write about the intersection of rigorous mathematics, science and tech applications — and the
            journey of transitioning. Posts coming June 2026.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Planned Topics</p>
            <div className="mt-4 space-y-3">
              {plannedTopics.map((topic) => (
                <div key={topic} className="border border-border rounded-sm px-4 py-3">
                  <p className="text-sm text-foreground">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
            First post arriving June 2026. Follow on{" "}
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
