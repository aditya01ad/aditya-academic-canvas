import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-sm font-medium text-foreground tracking-wide">Aditya</p>
        <nav aria-label="Footer navigation" className="flex items-center justify-center flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">About</a>
          <a href="#research" className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">Research</a>
          <a href="#projects" className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">Projects</a>
          <a href="#skills" className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">Skills</a>
          <a href="#contact" className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">Contact</a>
        </nav>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/aditya01ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
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
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:24MA05020@iitbbs.ac.in"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="Send email to 24MA05020@iitbbs.ac.in"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aditya · Built with purpose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
