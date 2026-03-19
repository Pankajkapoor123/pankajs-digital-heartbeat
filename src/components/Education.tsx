import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lovely Professional University",
      period: "2025 – Present",
      location: "Jalandhar, Punjab",
      mode: "Distance/Online Program",
      icon: "🎓",
    },
    {
      degree: "Diploma in Computer",
      institution: "Sejal Education Center",
      period: "2020",
      location: "Baijnath, Himachal Pradesh",
      icon: "📜",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group glass-card neon-border rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{edu.icon}</div>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>{edu.institution}</span>
                </div>
                <p className="text-sm text-muted-foreground">📍 {edu.location}</p>
                {edu.mode && (
                  <span className="mt-2 inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                    {edu.mode}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
