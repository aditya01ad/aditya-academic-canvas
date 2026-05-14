import { Github, Mail, FileDown } from "lucide-react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl w-full text-center">
        <h1 className="fade-in stagger-1 text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground mb-4">
          Aditya
        </h1>
        <p className="fade-in stagger-2 text-lg sm:text-xl text-muted-foreground italic mb-10">
          A curious mathematician
        </p>
        <p className="fade-in stagger-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about abstract algebra, topology, and mathematical problem-solving.
          Currently pursuing my studies at IIT Bhubaneswar.
        </p>
        <div className="fade-in stagger-4 flex items-center justify-center gap-5">
          <a
            href="https://github.com/aditya01ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="GitHub profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya01ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="LinkedIn profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:24MA05020@iitbbs.ac.in"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/Aditya_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border hover:border-foreground px-4 py-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Download CV (PDF)"
          >
            <FileDown className="w-4 h-4" />
            CV
          </a>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
