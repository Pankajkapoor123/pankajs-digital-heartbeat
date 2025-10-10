import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: ".NET Full Stack Developer",
      company: "Healthcare Tech Solutions",
      period: "2024 - Present",
      description: "Developing enterprise-level healthcare applications using .NET Core, Angular, and PostgreSQL. Focus on building scalable, secure systems with modern architecture patterns.",
      achievements: [
        "Designed and developed Hospital Management System (HIMS) with complete patient, staff, and lab modules",
        "Built AI-based health app (SNEVVA) with symptom checker and health analysis features",
        "Implemented JWT authentication and role-based access control across multiple projects",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Enterprise Solutions",
      period: "2023 - 2024",
      description: "Developed CRM platform and portfolio websites with focus on clean code and user experience. Worked extensively with .NET Core backend and Angular frontend.",
      achievements: [
        "Created role-based CRM system for managing users, leads, and analytics",
        "Built responsive portfolio websites with modern UI/UX principles",
        "Integrated RESTful APIs and SOAP web services for seamless data flow",
      ],
    },
    {
      role: "Backend Developer",
      company: "Healthcare Projects",
      period: "2023",
      description: "Specialized in healthcare domain projects with emphasis on NDHM/ABHA integration and secure data handling. Worked with Entity Framework Core and PostgreSQL.",
      achievements: [
        "Successfully integrated NDHM/ABHA APIs for healthcare data exchange",
        "Implemented encryption and secure authentication mechanisms",
        "Optimized database queries and improved application performance",
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
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>

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
