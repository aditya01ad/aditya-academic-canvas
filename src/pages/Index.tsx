import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Research from "@/components/portfolio/Research";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";
import Nav from "@/components/portfolio/Nav";
import Contact from "@/components/portfolio/Contact";
import CurrentWork from "@/components/portfolio/CurrentWork";

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-ring focus:rounded-sm focus:text-sm focus:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Skip to content
      </a>
      <main id="main-content" className="min-h-screen">
        <Nav />
        <Hero />
        <About />
        <CurrentWork />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
