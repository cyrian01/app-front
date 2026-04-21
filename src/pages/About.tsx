import { useEffect } from "react";
import Container from "../components/Container";

export default function About() {
  useEffect(() => {
    document.title = "About - E-Learning";
  }, []);

  return (
    <Container>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a team of passionate developers and educators dedicated to
            teaching modern web development technologies. Our mission is to make
            learning accessible and enjoyable for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To empower developers with the knowledge and skills needed to build
            amazing web applications using React, TypeScript, and modern
            JavaScript. We believe in hands-on learning and real-world
            projects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <ul className="text-gray-600 leading-relaxed list-disc list-inside">
            <li>Expert instructors with industry experience</li>
            <li>Hands-on project-based learning</li>
            <li>Modern technologies and best practices</li>
            <li>Community support and mentorship</li>
            <li>Flexible learning paths for all levels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in everything we do.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace new technologies and ideas.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We believe in building a supportive community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
