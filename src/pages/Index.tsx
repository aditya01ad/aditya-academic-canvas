import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Research from "@/components/portfolio/Research";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";
import Nav from "@/components/portfolio/Nav";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
};

export default Index;
