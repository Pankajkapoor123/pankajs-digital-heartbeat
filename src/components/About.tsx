import { Code2, Coffee, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6 card-hover">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate <span className="text-primary font-semibold">.NET Full Stack Developer</span> with 
              hands-on experience in designing and developing scalable web applications using{" "}
              <span className="text-secondary font-semibold">.NET Core</span>,{" "}
              <span className="text-secondary font-semibold">C#</span>,{" "}
              <span className="text-secondary font-semibold">Angular</span>, and{" "}
              <span className="text-secondary font-semibold">PostgreSQL</span>. I focus on writing clean, 
              efficient code and building reliable systems with secure APIs and modern front-end architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a <span className="text-primary font-semibold">Diploma in Computer</span> and am currently 
              pursuing my <span className="text-primary font-semibold">BCA from LPU</span> (Lovely Professional University). 
              My journey in software development has been driven by building impactful solutions in healthcare and 
              enterprise domains.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to work on <span className="text-accent font-semibold">scalable and impactful full-stack 
              solutions</span> that solve real-world problems. I believe in continuous learning and staying updated 
              with the latest technologies to deliver the best results.
            </p>

            <div className="relative mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-xl text-primary font-semibold italic">
                "I solve problems not because I have to, but because the bug reports are getting boring. Clean code is my superpower."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
