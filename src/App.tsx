import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// The recipe book is independent of the professional portfolio. Load only when requested.
const Miscellany = lazy(() => import("./pages/Miscellany"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="page-container py-12 text-sm text-muted-foreground">Opening notes…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notes" element={<Miscellany />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
