import { Github, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground mb-4">
          Aditya
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground italic mb-10">
          A curious mathematician
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/aditya01ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:24MA05020@iitbbs.ac.in"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-2 rounded-sm"
          >
            <FileDown className="w-4 h-4" />
            CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
