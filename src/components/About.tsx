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
              experience in building web apps, RESTful APIs using{" "}
              <span className="text-secondary font-semibold">ASP.NET Core</span>,{" "}
              <span className="text-secondary font-semibold">Angular</span>,{" "}
              <span className="text-secondary font-semibold">SQL Server</span>, and{" "}
              <span className="text-secondary font-semibold">PostgreSQL</span>. Strong in problem-solving and agile collaboration.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a <span className="text-primary font-semibold">Diploma in Computer</span> from Sejal Education Center 
              and am currently pursuing my <span className="text-primary font-semibold">BCA from LPU</span> (Lovely Professional University) 
              through Distance/Online Program. My journey has been driven by building impactful solutions in healthcare, 
              security, and enterprise domains.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to work on <span className="text-accent font-semibold">scalable and impactful full-stack 
              solutions</span> that solve real-world problems. I believe in continuous learning and staying updated 
              with the latest technologies.
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
