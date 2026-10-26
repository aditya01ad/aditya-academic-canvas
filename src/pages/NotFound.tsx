import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

export default function NotFound() {
  return <PageLayout title="Page not found">
    <div className="page-container inner-page">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1 className="page-title">This page isn't here<span className="accent-ink">.</span></h1>
      <p className="page-lede">Perhaps the link has changed, or this page is still a note in the margin.</p>
      <Link className="text-link mt-8" to="/">Back to the homepage →</Link>
    </div>
  </PageLayout>;
}
