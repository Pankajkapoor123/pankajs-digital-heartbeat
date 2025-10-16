import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const techIcons = [
    { name: "C#", icon: "💠" },
    { name: ".NET", icon: "🔷" },
    { name: "Angular", icon: "🅰️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "🔀" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, i) => (
          <div
            key={tech.name}
            className="absolute text-4xl animate-float opacity-20 hover:opacity-100 transition-opacity cursor-default"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-primary text-lg font-medium">Hey there! 👋</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              I'm <span className="text-gradient">Pankaj Kumar</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">.NET Full Stack Developer</p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I debug the universe with <span className="text-primary font-semibold">.NET Core</span> and craft 
            UI magic with <span className="text-primary font-semibold">Angular</span>. Welcome to my full-stack lab 🧪
          </p>

          {/* Location & Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Zirakpur, India 🇮🇳</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <span>1.6+ Year Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>Pursuing BCA from LPU</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-primary gradient-pulse hover:opacity-90 transition-all glow-effect text-lg px-8 animate-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk 💬
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/Pankajkapoor123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all border border-border hover:border-primary glow-effect"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-kumar-63820b29a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all border border-border hover:border-primary glow-effect"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kp8613765@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all border border-border hover:border-primary glow-effect"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
