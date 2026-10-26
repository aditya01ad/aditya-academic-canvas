import { type ReactNode, useEffect } from "react";
import { SITE_NAME } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageLayout({children,title}:{children:ReactNode;title?:string}){
 useEffect(()=>{document.title=title?`${title} — ${SITE_NAME}`:SITE_NAME;},[title]);
 return <div className="flex min-h-screen flex-col"><a href="#main-content" className="skip-link">Skip to content</a><Navbar/><main id="main-content" className="flex-1">{children}</main><Footer/></div>;
}
