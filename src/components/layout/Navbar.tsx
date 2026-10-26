import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/lib/profile";
const nav = [{label:"Work",to:"/projects"},{label:"Research",to:"/research"},{label:"About",to:"/about"},{label:"Writing",to:"/blog"},{label:"Contact",to:"/contact"}];
export default function Navbar() {
  const { resolvedTheme, setTheme }=useTheme();
  const [open,setOpen]=useState(false);
  const {pathname}=useLocation();
  useEffect(()=>setOpen(false),[pathname]);
  return <header className="site-header">
    <div className="page-container flex h-[76px] items-center justify-between gap-5">
      <Link to="/" className="brand-mark" aria-label={`${PROFILE.name}, home`}><span className="brand-symbol">A<span className="accent-ink">.</span></span><span className="hidden text-[12px] font-semibold tracking-tight sm:block">{PROFILE.name}</span></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">{nav.map(n=><NavLink key={n.to} to={n.to} className={({isActive})=>cn("nav-link",isActive&&"nav-link-active")}>{n.label}</NavLink>)}</nav>
      <div className="flex items-center gap-3">
        <button type="button" className="icon-button" onClick={()=>setTheme(resolvedTheme==="dark"?"light":"dark")} aria-label={resolvedTheme==="dark"?"Use light theme":"Use dark theme"}>{resolvedTheme==="dark"?<Sun className="h-[18px] w-[18px]"/>:<Moon className="h-[18px] w-[18px]"/>}</button>
        <a className="header-cta hidden sm:inline-flex" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-4 w-4"/></a>
        <button type="button" className="icon-button md:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(x=>!x)}>{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
      </div>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="mobile-navigation md:hidden"><div className="page-container flex flex-col py-4">{nav.map(n=><NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive})=>cn("mobile-nav-link",isActive&&"accent-ink")}>{n.label}<ArrowUpRight className="h-4 w-4"/></NavLink>)}</div></nav>
  </header>;
}
