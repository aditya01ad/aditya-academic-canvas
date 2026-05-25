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
  "Applied Mathematics",
  "Data Science & ML",
  "Research Collaboration",
  "Mathematical Problem Solving",
  "Teaching & Mentoring",
];

const openTo = [
  "Research roles & PhD opportunities",
  "Data Science / ML Engineering",
  "Quantitative & analytical roles",
  "Teaching & academic positions",
  "Open source collaboration",
];

const Contact = () => {
  return (
    <PageLayout title="Contact">
      <section className="page-container page-section">
        <div className="max-w-3xl">
          <p className="page-subtitle">Contact</p>
          <h1 className="page-title mt-2">Let’s talk.</h1>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Open to collaboration, research discussion, and new opportunities.
            M.Sc. Mathematics graduate from IIT Bhubaneswar — available immediately.
            I typically respond within 24 hours.
          </p>

          {/* Contact cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
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

          {/* Open to */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Open to</p>
            <ul className="space-y-2">
              {openTo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-foreground">&#8594;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Happy to discuss */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Happy to discuss</p>
            <div className="flex flex-wrap gap-2">
              {preferredTopics.map((topic) => (
                <Tag key={topic} label={topic} />
              ))}
            </div>
          </div>

          {/* Status footer */}
          <div className="mt-8 border-t border-border pt-6 space-y-1">
            <p className="text-sm text-muted-foreground">📍 Bhubaneswar, Odisha, India</p>
            <p className="text-sm text-muted-foreground">
              M.Sc. Mathematics · IIT Bhubaneswar · Graduated May 2026
            </p>
            <p className="text-sm text-muted-foreground">Available immediately · Open to relocation</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
