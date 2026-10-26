import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { PROFILE } from "@/lib/profile";

const themes = [
  { title: "What a graph's eigenvalues can tell us", note: "Notes from spectral graph theory" },
  { title: "Optimization, from the ground up", note: "Working through models and algorithms" },
  { title: "Small computational experiments", note: "Things I discover while learning and coding" },
];

export default function Blog() {
  return (
    <PageLayout title="Writing">
      <div className="page-container inner-page">
        <header className="page-intro">
          <p className="eyebrow">NOTES / WRITING</p>
          <h1 className="page-title">Notes, eventually<span className="accent-ink">.</span></h1>
          <p className="page-lede">A place for ideas that deserve more than a margin note. I haven't published full articles here yet, but these are a few subjects I want to write about.</p>
        </header>
        <div className="work-list">
          {themes.map((theme,i)=><div className="work-entry" key={theme.title}>
            <span className="work-number">{String(i+1).padStart(2,"0")}</span>
            <div><h2 className="work-title">{theme.title}</h2><p className="mt-2 text-sm text-muted-foreground">{theme.note} · Planned</p></div>
          </div>)}
        </div>
        <p className="mt-9 text-sm text-muted-foreground">For now, my more active notes and experiments live on GitHub.</p>
        <a className="text-link mt-3" href={PROFILE.github} target="_blank" rel="noopener noreferrer">See the repositories <ArrowUpRight className="h-4 w-4" aria-hidden="true"/></a>
      </div>
    </PageLayout>
  );
}
