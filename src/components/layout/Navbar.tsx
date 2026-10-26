import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/lib/profile";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <Link to="/" className="site-wordmark" onClick={() => setOpen(false)} aria-label="Aditya Chauhan, home">
          {PROFILE.name}<span className="accent-ink">.</span>
        </Link>
        <nav aria-label="Primary" className="desktop-nav">
          {links.map(link => <NavLink key={link.to} to={link.to} className={({isActive})=>cn("nav-link",isActive&&"nav-active")}>{link.label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button className="header-icon" type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {resolvedTheme === "dark" ? <Sun className="h-[17px] w-[17px]"/> : <Moon className="h-[17px] w-[17px]"/>}
          </button>
          <button className="header-icon mobile-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)}>
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile" className="mobile-navigation" hidden={!open}>
        <div className="page-container mobile-navigation-inner">
          {links.map(link=><NavLink key={link.to} to={link.to} onClick={()=>setOpen(false)} className={({isActive})=>cn("mobile-link",isActive&&"nav-active")}>{link.label}</NavLink>)}
        </div>
      </nav>
    </header>
  );
}
