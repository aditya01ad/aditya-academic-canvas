import { Link } from "react-router-dom";
import { PROFILE } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-identity">
          <p className="footer-name">{PROFILE.name}<span className="accent-ink">.</span></p>
          <p className="footer-note">A small corner of the internet for things I learn, explore, and make.</p>
        </div>
        <nav aria-label="Footer" className="footer-links">
          <Link to="/projects">Work</Link>
          <Link to="/research">Research</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Writing</Link>
          <Link to="/notes">Miscellany</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {PROFILE.name}</p>
          <div className="footer-social">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
