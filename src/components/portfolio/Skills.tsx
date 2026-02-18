const Skills = () => {
  const categories = [
    {
      title: "Languages",
      items: ["Python", "C++", "Java", "MATLAB", "R"],
    },
    {
      title: "Tools & Libraries",
      items: ["NumPy", "Pandas", "LaTeX", "Git", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 border border-border text-foreground rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
