import { ReactNode, useEffect } from "react";
import { SITE_NAME } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  useEffect(() => {
    if (!title) return;
    document.title = `${title} — ${SITE_NAME}`;
    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:border focus:rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-20">
        {children}
      </main>
      <ScrollIndicator />
      <Footer />
    </div>
  );
}
