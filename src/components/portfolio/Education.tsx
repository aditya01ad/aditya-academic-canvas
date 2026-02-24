import { useScrollReveal } from "@/hooks/useScrollReveal";

const Education = () => {
  const ref = useScrollReveal();
  const entries = [
    {
      degree: "M.Sc. Mathematics",
      institution: "Indian Institute of Technology Bhubaneswar",
      detail: "CGPA: 8.42",
    },
    {
      degree: "B.Sc. Mathematics",
      institution: "",
      detail: "CGPA: 8.63",
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div ref={ref} className="max-w-2xl mx-auto reveal">
        <div className="section-divider" />
        <h2 className="text-2xl font-medium text-foreground mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {entries.map((entry) => (
            <div key={entry.degree} className="border-l-2 border-border pl-5">
              <h3 className="text-base font-medium text-foreground">{entry.degree}</h3>
              {entry.institution && (
                <p className="text-sm text-muted-foreground mt-1">{entry.institution}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">{entry.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
