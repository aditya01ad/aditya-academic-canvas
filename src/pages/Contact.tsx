import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";

const conversationTopics = ["Research collaboration", "Speaking", "Teaching", "Writing"];

const Contact = () => {
  return (
    <PageLayout>
      <section className="page-container page-section">
        <p className="page-subtitle">Contact</p>
        <h1 className="page-title mt-2">Let’s connect</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Placeholder contact section with preferred channels, response expectations, and collaboration
          prompts.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="accent-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Primary email</p>
              <p className="text-sm text-foreground mt-2">24MA05020@iitbbs.ac.in</p>
              <p className="text-xs text-muted-foreground mt-2">Placeholder note for response time.</p>
            </div>
            <div className="accent-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Availability</p>
              <p className="text-sm text-foreground mt-2">Open to research and academic collaborations.</p>
              <p className="text-xs text-muted-foreground mt-2">Placeholder for office hours or booking link.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Conversation topics</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {conversationTopics.map((topic) => (
                  <Tag key={topic}>{topic}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-border rounded-sm p-6 card-hover">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-foreground">Send a note</h2>
              <Badge tone="accent">Placeholder</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Placeholder text for a future contact form or scheduling widget. Replace with real fields or
              embed instructions.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>• Preferred subject line format.</p>
              <p>• Suggested details to include for collaborations.</p>
              <p>• Optional social links or alternative channels.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
