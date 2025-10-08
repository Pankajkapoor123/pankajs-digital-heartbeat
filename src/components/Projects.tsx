import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SNEVVA",
      description: "AI-based health app providing health insights, symptom checker, and lab report management with intelligent diagnostics.",
      tech: [".NET Core", "Angular", "PostgreSQL", "AI/ML"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🏥",
    },
    {
      title: "MIMS",
      description: "Medical Information Management System for hospitals - complete lab and patient management with role-based access and reporting.",
      tech: [".NET Core", "Angular", "PostgreSQL", "REST APIs"],
      gradient: "from-purple-500 to-pink-500",
      icon: "📊",
    },
    {
      title: "HMS",
      description: "Comprehensive Hospital Management System including bed management, appointments, staff modules, and patient records.",
      tech: ["C#", "Angular", "PostgreSQL", "Entity Framework"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🏨",
    },
    {
      title: "Chirayu",
      description: "Haryana state health scheme updater system - manages insurance, PPP ID, and health user workflows for government healthcare.",
      tech: [".NET Core", "Angular", "PostgreSQL", "Government APIs"],
      gradient: "from-orange-500 to-red-500",
      icon: "🏛️",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Real-world applications I've built with passion and precision
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
