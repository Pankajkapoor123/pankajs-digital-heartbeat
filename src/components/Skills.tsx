const Skills = () => {
  const skills = [
    { name: "C#", icon: "🔷", color: "from-blue-500 to-cyan-500" },
    { name: ".NET Core", icon: "💠", color: "from-purple-500 to-blue-500" },
    { name: "ASP.NET MVC", icon: "🏗️", color: "from-indigo-500 to-blue-500" },
    { name: "Entity Framework", icon: "🔗", color: "from-purple-600 to-indigo-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-pink-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" },
    { name: "HTML/CSS", icon: "🎨", color: "from-orange-500 to-pink-500" },
    { name: "SQL Server", icon: "🗄️", color: "from-red-600 to-orange-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-blue-600" },
    { name: "REST APIs", icon: "🔌", color: "from-green-500 to-emerald-500" },
    { name: "AWS S3", icon: "☁️", color: "from-yellow-500 to-orange-500" },
    { name: "Git", icon: "🔀", color: "from-orange-500 to-red-500" },
    { name: "Swagger", icon: "📋", color: "from-green-400 to-green-600" },
    { name: "Postman", icon: "📮", color: "from-orange-400 to-orange-600" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Neon Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative skill-card-3d glass-card professional-border rounded-xl p-6 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add('plasma-pulse');
                  setTimeout(() => e.currentTarget.classList.remove('plasma-pulse'), 1000);
                }}
              >
                {/* Neon glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10 text-center space-y-3">
                  {/* Icon */}
                  <div className="text-5xl group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] transition-all duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </div>

                {/* Holographic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Also familiar with:{" "}
              <span className="text-primary font-semibold">
                ASP.NET MVC, SQL Server, JWT Authentication, SOAP Web Services, Role-based Access, ABHA/NDHM API Integration
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
