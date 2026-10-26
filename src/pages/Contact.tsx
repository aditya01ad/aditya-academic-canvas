import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { PROFILE } from "@/lib/profile";

const channels = [
  { label: "Email", text: "Send a note", url: `mailto:${PROFILE.email}`, external: false },
  { label: "GitHub", text: "Explore the code", url: PROFILE.github, external: true },
  { label: "LinkedIn", text: "Connect professionally", url: PROFILE.linkedIn, external: true },
];

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <div className="page-container inner-page">
        <header className="page-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1 className="page-title">Say hello<span className="accent-ink">.</span></h1>
          <p className="page-lede">I’m happy to talk about research ideas, mathematical problems, technical projects, or relevant work opportunities. A thoughtful message is always welcome.</p>
        </header>

        <section className="reading-section" aria-labelledby="contact-how">
          <h2 className="reading-heading" id="contact-how">Where to find me</h2>
          <div className="detail-list">
            {channels.map(c=><div className="detail-row" key={c.label}>
              <span className="detail-term">{c.label}</span>
              <a className="detail-description flex w-fit items-center gap-2 text-primary hover:text-foreground" href={c.url} target={c.external?"_blank":undefined} rel={c.external?"noopener noreferrer":undefined}>
                {c.text} <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
              </a>
            </div>)}
          </div>
        </section>

        <section className="reading-section" aria-labelledby="contact-interests">
          <h2 className="reading-heading" id="contact-interests">Open to</h2>
          <p className="reading-copy">Entry-level opportunities in operations research, optimization, quantitative and analytical work, mathematical computing, as well as meaningful research collaborations.</p>
          <p className="mt-4 text-sm text-muted-foreground">Based in {PROFILE.location} · Open to relocation for suitable roles.</p>
        </section>
      </div>
    </PageLayout>
  );
}
