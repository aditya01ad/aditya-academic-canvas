import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROFILE } from "@/lib/profile";
const links=[{to:"/projects",label:"Projects"},{to:"/research",label:"Research"},{to:"/about",label:"About"},{to:"/blog",label:"Writing"},{to:"/notes",label:"Notes"},{to:"/contact",label:"Contact"}];
export default function Footer(){
 return <footer className="site-footer"><div className="page-container grid gap-10 py-12 md:grid-cols-[1fr_auto]">
 <div><Link to="/" className="font-display text-2xl tracking-tight">{PROFILE.name}<span className="accent-ink">.</span></Link><p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">Mathematics, research, and computation. Exploring structure in complex systems.</p><p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p></div>
 <div className="grid gap-8 sm:grid-cols-2"><div><p className="eyebrow mb-4">EXPLORE</p><nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3">{links.map(l=><Link className="footer-link" key={l.to} to={l.to}>{l.label}</Link>)}</nav></div><div><p className="eyebrow mb-4">CONNECT</p><div className="flex flex-col gap-3"><a className="footer-link inline-flex items-center gap-1" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-3 w-3"/></a><a className="footer-link inline-flex items-center gap-1" href={PROFILE.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="h-3 w-3"/></a><a className="footer-link" href={`mailto:${PROFILE.email}`}>Email</a></div></div></div>
 </div></footer>
}
