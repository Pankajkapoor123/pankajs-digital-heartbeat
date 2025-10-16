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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10" />
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, i) => (
          <div
            key={tech.name}
            className="absolute text-5xl animate-float opacity-10 hover:opacity-60 transition-all duration-500 cursor-default hover:scale-125"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.5))',
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center md:text-left order-2 md:order-1">
              {/* Greeting */}
              <div className="space-y-4 animate-fade-in">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                  <p className="text-primary text-sm font-medium flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Available for opportunities
                  </p>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="block text-foreground">Hey, I'm</span>
                  <span className="block text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                    Pankaj Kumar
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-primary/90">
                  .NET Full Stack Developer
                </p>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                I debug the universe with <span className="text-primary font-semibold">⚡ .NET Core</span> and craft 
                UI magic with <span className="text-secondary font-semibold">🎨 Angular</span>. Welcome to my full-stack lab 🧪
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                  <span className="text-xl">📍</span>
                  <span className="text-foreground">Zirakpur, India</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                  <span className="text-xl">💼</span>
                  <span className="text-foreground">1.6+ Years</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                  <span className="text-xl">🎓</span>
                  <span className="text-foreground">BCA @ LPU</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-lg px-8 py-6 shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-300 group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Talk 💬
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://github.com/pankajkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card/50 hover:bg-primary/20 transition-all border border-border hover:border-primary backdrop-blur-sm group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/pankajkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card/50 hover:bg-primary/20 transition-all border border-border hover:border-primary backdrop-blur-sm group"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:pankaj@example.com"
                  className="p-3 rounded-lg bg-card/50 hover:bg-primary/20 transition-all border border-border hover:border-primary backdrop-blur-sm group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right side - Professional Image */}
            <div className="flex justify-center animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                <div className="absolute -inset-8 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" style={{ animationDelay: '1s' }} />
                
                {/* Image container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_60px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_80px_rgba(0,212,255,0.6)] transition-all duration-500 group-hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                    alt="Pankaj Kumar - Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
