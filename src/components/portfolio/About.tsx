const About = () => {
  const interests = [
    "Spectral Graph Theory",
    "Convex Optimization",
    "Numerical Linear Algebra",
    "Machine Learning Theory",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-6 text-center">About</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-8">
          I am an M.Sc. Mathematics student at the Indian Institute of Technology
          Bhubaneswar. My work sits at the intersection of pure mathematics and
          computation, with a focus on understanding structural properties of
          graphs through their spectra and developing efficient optimization
          algorithms.
        </p>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-xs px-3 py-1.5 border border-border text-foreground rounded-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
