import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className={cn("pt-20", className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
