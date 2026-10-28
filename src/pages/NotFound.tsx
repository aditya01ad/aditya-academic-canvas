import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout title="Page not found">
      <section className="page-container page-section">
        <p className="page-subtitle">404</p>
        <h1 className="page-title mt-2">Nothing here, apparently.</h1>
        <p className="page-lede mt-4">
          This page doesn't exist. It might have moved, or the link might be wrong.
        </p>
        <Link to="/" className="mt-6 inline-flex text-sm text-accent hover:text-foreground">
          Back to the homepage →
        </Link>
      </section>
    </PageLayout>
  );
}
