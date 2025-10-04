import { FileText, Briefcase } from "lucide-react";
import TextType from "../components/TextType";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-5 py-5 max-w-5xl">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-base-content mb-4">
                <TextType
                  text={["Hi, I'm Nico."]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>

              <p className="py-6 text-xl md:text-2xl">
                Frontend Developer | UI/UX Enthusiast | Problem Solver
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                I create beautiful, responsive web applications that provide
                exceptional user experiences. Specialized in React, TypeScript,
                and modern web technologies.
              </p>

              {/* Main CTA Buttons */}
              <div className="flex gap-4 justify-center flex-wrap mb-6">
                <button
                  onClick={scrollToProjects}
                  className="btn btn-primary btn-lg gap-2"
                >
                  <Briefcase size={20} />
                  View Projects
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("resume")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-outline btn-lg gap-2"
                >
                  <FileText size={20} />
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Figma",
              "Next.js",
              "Vite",
            ].map((skill) => (
              <div
                key={skill}
                className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body items-center text-center p-6">
                  <h3 className="card-title text-base">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
