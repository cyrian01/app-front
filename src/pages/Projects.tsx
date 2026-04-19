import Container from "../components/Container";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description: "A comprehensive online learning platform built with React",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Todo Application",
      description: "Interactive todo list with state management",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Professional portfolio showcasing web development skills",
      technologies: ["React", "Vite", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Full-stack task management application",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <Container>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
      <p className="text-gray-600 mb-12">
        Check out some of the amazing projects we've created.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
