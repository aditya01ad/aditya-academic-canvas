import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const notes = [
  {
    title: "The odd thing about graph spectra",
    paragraphs: [
      "If you turn a graph into an adjacency matrix and compute its eigenvalues, you get a kind of numerical fingerprint. Certain things about the graph are reflected in those numbers.",
      "But two genuinely different graphs can sometimes share that fingerprint. That's what makes cospectral graphs such an interesting puzzle: the spectrum contains information, but how much?",
    ],
    href: "/research",
    linkText: "More about the graph questions →",
  },
  {
    title: "Why I like checking things with code",
    paragraphs: [
      "A neat formula on paper is one kind of satisfaction. Writing a few lines of code and watching the examples behave as expected is another.",
      "Of course, a computer finding ten thousand examples doesn't prove a theorem. But trying examples can make a difficult idea easier to see, and occasionally show you where your intuition went wrong.",
    ],
    href: "/projects",
    linkText: "A few experiments →",
  },
  {
    title: "And the less mathematical stuff",
    paragraphs: [
      "Not every interesting experiment needs to involve a matrix. Sometimes it's a small app, figuring out how something works, or trying to make a better cup of coffee.",
      "I've started keeping a few of those everyday experiments here as well. The coffee notebook is the first one.",
    ],
    href: "/notes",
    linkText: "Open the coffee notebook →",
  },
];

export default function Blog() {
  return (
    <PageLayout title="Notes & thoughts">
      <section className="page-container page-section">
        <div className="max-w-2xl">
          <p className="page-subtitle">A few notes</p>
          <h1 className="page-title mt-2">Things on my mind</h1>
          <p className="page-lede mt-4">
            Not a formal blog, or a regularly scheduled one. Just some thoughts about mathematics,
            learning, making things, and whatever else I feel like writing down.
          </p>
          <div className="mt-10 space-y-5">
            {notes.map((note) => (
              <article key={note.title} className="border border-border rounded-sm p-6">
                <h2 className="text-lg font-medium text-foreground">{note.title}</h2>
                {note.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
                ))}
                <Link to={note.href} className="mt-4 inline-flex text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors">
                  {note.linkText}
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Longer posts might show up here someday. For now, this is enough.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
