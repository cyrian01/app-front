import { useEffect } from "react";
import Container from "../components/Container";

export default function Services() {
  useEffect(() => {
    document.title = "Services - E-Learning";
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build modern, responsive web applications using React and TypeScript",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly interfaces with Tailwind CSS",
    },
    {
      id: 3,
      title: "JavaScript Training",
      description: "Learn JavaScript ES6+ fundamentals and advanced concepts",
    },
    {
      id: 4,
      title: "React Development",
      description: "Master React with hooks, state management, and routing",
    },
    {
      id: 5,
      title: "TypeScript Consulting",
      description: "Implement type-safe solutions for your projects",
    },
    {
      id: 6,
      title: "Full Stack Development",
      description: "Build complete applications from frontend to backend",
    },
  ];

  return (
    <Container>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
      <p className="text-gray-600 mb-12">
        We provide professional services to help you build amazing web
        applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
