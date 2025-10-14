import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
      {
      title: "Medicine Inventory Management System (MIMS)",
      description: "Enterprise inventory management system built with ASP.NET MVC and .NET Core. Features automated tracking workflows, multi-level approval processes, and role-based access controls. Uses SQL Server and Entity Framework Core for data integrity.",
      tech: ["ASP.NET MVC", ".NET Core", "SQL Server", "Entity Framework"],
      gradient: "from-green-500 to-emerald-500",
      icon: "💊",
    },
    {
      title: "Hospital Management System (HIMS)",
      description: "Comprehensive hospital management system with .NET Core backend and Angular frontend. Handles patient records, prescriptions, vitals, diagnosis, and staff management. Features ABHA-compliant solutions (M1, M2, M3) for efficient workflows and inter-department communication.",
      tech: [".NET Core", "Angular", "Entity Framework", "ABHA API"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🏥",
    },
    {
      title: "SNEVVA (Healthcare Application)",
      description: "AI-assisted healthcare app with .NET Core backend and REST APIs. Integrated AWS S3 for secure report storage and CloudFront for content delivery. Event-driven processing with SQS for notifications, ensuring scalability and security.",
      tech: [".NET Core", "REST APIs", "AWS S3", "SQS"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
    },
  
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce website using ASP.NET Core MVC and Entity Framework. Integrated payment gateways, product management, user authentication, and order management with optimized database queries for improved performance.",
      tech: ["ASP.NET Core", "MVC", "Entity Framework", "Payment Gateway"],
      gradient: "from-orange-500 to-red-500",
      icon: "🛒",
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
                className="group project-card-3d glass-card neon-border rounded-2xl overflow-hidden transition-all duration-500"
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
