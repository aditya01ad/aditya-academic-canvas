import PageLayout from "@/components/layout/PageLayout";
import Tag from "@/components/ui/Tag";

const contactItems = [
  {
    label: "Email",
    value: "aditya1512me@gmail.com",
    href: "mailto:aditya1512me@gmail.com",
    cta: "Send email →",
    isExternal: false,
  },
  {
    label: "LinkedIn",
    value: "in/aditya01ad",
    href: "https://linkedin.com/in/aditya01ad",
    cta: "Connect →",
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "github.com/aditya01ad",
    href: "https://github.com/aditya01ad",
    cta: "View work →",
    isExternal: true,
  },
];

const preferredTopics = [
  "Spectral Graph Theory",
  "Machine Learning Theory",
  "Graph Neural Networks",
  "Mathematical Problem Solving",
];

const Contact = () => {
  return (
    <PageLayout title="Contact">
      <section className="page-container page-section">
        <div className="max-w-3xl">
          <p className="page-subtitle">Contact</p>
          <h1 className="page-title mt-2">Let’s talk.</h1>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Open to collaboration, ML engineering roles, and research discussion. I typically respond within
            24 hours.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label} className="border border-border rounded-sm p-6 card-hover">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground break-all">{item.value}</p>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Happy to discuss</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {preferredTopics.map((topic) => (
                <Tag key={topic} label={topic} />
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">📍 Bhubaneswar, Odisha, India</p>
            <p className="text-sm text-muted-foreground mt-2">
              Open to ML Engineering &amp; Applied Scientist roles · Graduating May 2026
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
