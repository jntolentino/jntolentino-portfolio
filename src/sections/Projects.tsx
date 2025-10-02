import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Asset Pro: Asset Management System",
      description:
        "A comprehensive asset management system designed to streamline asset monitoring, tracking and management for organizations.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
      tags: [
        "React",
        "JavaScript",
        "Tailwind",
        "Chakra UI",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
      ],
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Chatter: Real-time Chat Application",
      description:
        "A real-time chat application built with modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500",
      tags: ["React", "Framer Motion", "Firebase"],
      liveUrl: "https://chatter-j3jb.onrender.com/",
      githubUrl: "https://github.com/jntolentino/chatter",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather data visualization with interactive charts and forecasts.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500",
      tags: ["React", "API Integration", "Charts"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg mb-12 opacity-70">
            Here are some of my recent works. Each project represents a unique
            challenge and learning experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
