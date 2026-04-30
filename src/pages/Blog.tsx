import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <section className="page-container page-section">
        <p className="page-subtitle">Blog</p>
        <h1 className="page-title mt-2">Writing & notes</h1>
        <p className="page-lede mt-4 max-w-2xl">
          Placeholder introduction for essays, research notes, and reflections. Publish long-form content
          here when ready.
        </p>
        <div className="mt-10 border border-border rounded-sm p-8 text-center card-hover">
          <Badge variant="planned" />
          <h2 className="text-lg font-medium text-foreground mt-4">No posts yet</h2>
          <p className="text-sm text-muted-foreground mt-3">
            Placeholder message indicating that new articles are in progress.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
