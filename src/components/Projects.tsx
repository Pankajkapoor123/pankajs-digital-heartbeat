import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System (HIMS)",
      description: "Comprehensive healthcare solution built with .NET Core and Angular. Features bed management, lab systems, patient and staff modules, doctor assignment, and NDHM/ABHA integration for seamless healthcare operations.",
      tech: [".NET Core", "Angular", "PostgreSQL", "NDHM API"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🏥",
    },
    {
      title: "AI-based Health App (SNEVVA)",
      description: "Intelligent health application featuring symptom checker, comprehensive health history analysis, and AI-powered lab report guidance to provide actionable health insights.",
      tech: [".NET Core", "Angular", "AI/ML", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
    },
    {
      title: "CRM System",
      description: "Enterprise-grade Customer Relationship Management platform with role-based access control. Built with Angular frontend and .NET Core backend for efficient user, lead, and analytics management.",
      tech: ["C#", ".NET Core", "Angular", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500",
      icon: "📊",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive developer portfolio showcasing projects and skills. Features Bootstrap-based design with integrated contact form, skills visualization, and interactive map sections.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      gradient: "from-orange-500 to-red-500",
      icon: "💼",
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
