const Nav = () => {
  const links = ["About", "Research", "Projects", "Skills", "Education"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-foreground tracking-wide">
          Aditya
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
