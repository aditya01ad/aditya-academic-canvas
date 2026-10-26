import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn, SITE_NAME } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Research", to: "/research" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="page-container flex items-center justify-between py-3">
        <Link
          to="/"
          className="text-sm font-medium text-foreground tracking-wide transition-opacity duration-200 hover:opacity-70"
          onClick={() => setMenuOpen(false)}
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={pathname === item.to ? "page" : undefined}
                  className={cn(
                    "relative text-xs tracking-widest uppercase transition-colors duration-200 pb-0.5",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-foreground transition-all duration-300 ease-in-out",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Toggle dark mode"
            type="button"
          >
            {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            type="button"
          >
            <span className="transition-transform duration-200 inline-block">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border bg-background/95 overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={pathname === item.to ? "page" : undefined}
                  className={cn(
                    "text-xs tracking-widest uppercase transition-colors duration-200",
                    active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
