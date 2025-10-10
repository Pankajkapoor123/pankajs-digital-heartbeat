import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: ".NET Full Stack Developer",
      company: "Coretegra Technologies Pvt Ltd",
      period: "April 2024 - Present",
      location: "Zirakpur, Punjab",
      description: "Developing enterprise healthcare and inventory management systems using ASP.NET MVC, .NET Core, Angular, and SQL Server. Leading multiple projects with focus on automation, scalability, and ABHA compliance.",
      achievements: [
        "Developed MIMS using ASP.NET MVC and .NET Core with SQL Server, automating inventory tracking workflows and reducing manual errors",
        "Built comprehensive HIMS with .NET Core backend and Angular frontend, managing patient records, prescriptions, and staff operations",
        "Integrated ABHA-compliant solutions (M1, M2, M3) for efficient hospital workflows and inter-department communication",
        "Developed backend for SNEVVA healthcare app with REST APIs, AWS S3, CloudFront, and SQS for event-driven processing",
      ],
    },
    {
      role: ".NET Full Stack Trainee",
      company: "CSInfotech",
      period: "September 2023 - March 2024",
      location: "Chandigarh",
      description: "Trained in full-stack development with ASP.NET Core MVC, Entity Framework, and Angular. Built e-commerce platforms and information portals with focus on performance optimization and user experience.",
      achievements: [
        "Developed E-commerce platform using ASP.NET Core MVC and Entity Framework with payment gateway integration",
        "Optimized database queries, improving load times and reducing server load significantly",
        "Created National Park Information Portal with ASP.NET Core and Angular, featuring search functionality and interactive maps",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              My professional journey building impactful solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 animate-pulse" />

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card border border-border rounded-xl p-6 card-hover">
                      {/* Period */}
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      {exp.location && (
                        <div className="text-sm text-muted-foreground mb-4">
                          📍 {exp.location}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
