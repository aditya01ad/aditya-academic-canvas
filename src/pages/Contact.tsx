import PageLayout from "@/components/layout/PageLayout";
import Tag from "@/components/ui/Tag";
import { PROFILE } from "@/lib/profile";

const contactItems = [
  {
    label: "Email",
    value: PROFILE.email,
    href: "mailto:" + PROFILE.email,
    cta: "Write to me →",
    isExternal: false,
  },
  {
    label: "GitHub",
    value: "github.com/aditya01ad",
    href: PROFILE.github,
    cta: "See what I'm making →",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    value: "in/aditya01ad",
    href: PROFILE.linkedIn,
    cta: "Find me there →",
    isExternal: true,
  },
];

const topics = [
  "Interesting math questions",
  "Research & code",
  "Small projects",
  "Ideas across subjects",
  "Music recommendations",
  "Coffee experiments",
  "Anything genuinely interesting",
];

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <section className="page-container page-section">
        <div className="max-w-3xl">
          <p className="page-subtitle">Contact</p>
          <h1 className="page-title mt-2">Say hello</h1>
          <p className="page-lede mt-4">
            Found something interesting here? Working on a problem I might enjoy?
            Or just want to share an idea, a recommendation, or say hi? Feel free to reach out.
            It doesn't have to be formal.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label} className="border border-border rounded-sm p-6 card-hover">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</h2>
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
            <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Things we could talk about</h2>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => <Tag key={topic} label={topic} />)}
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              I'm based in {PROFILE.location}. I also enjoy connecting with people who see things a little differently.
            </p>
            <p className="text-sm text-muted-foreground">
              And if you've spotted a broken link or a mistake on the website, please tell me.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
