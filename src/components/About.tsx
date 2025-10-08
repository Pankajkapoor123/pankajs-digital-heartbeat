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
              Hey! I'm a <span className="text-primary font-semibold">24-year-old software developer</span> from
              Zirakpur, India, with a genuine passion for building things that make a difference. I've spent
              the past year working with <span className="text-secondary font-semibold">C# (.NET Core)</span>,{" "}
              <span className="text-secondary font-semibold">Angular</span>, and{" "}
              <span className="text-secondary font-semibold">PostgreSQL</span> — crafting applications that
              are not just functional but also delightful to use.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I graduated with a <span className="text-primary font-semibold">BCA from LPU</span>, but my
              real education has been in the trenches — building healthcare systems, hospital management
              platforms, and AI-powered health apps. I love the challenge of turning complex problems into
              clean, scalable solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, sipping coffee, and dreaming up the
              next project. My approach is simple: <span className="text-accent font-semibold">write clean code,
              stay curious, and always ship with love</span> ✨
            </p>

            {/* Quote */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="h-6 w-6 text-primary" />
                <Coffee className="h-6 w-6 text-secondary" />
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <p className="text-xl font-semibold text-gradient italic">
                "Code, coffee, and curiosity — that's me ☕💻"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
