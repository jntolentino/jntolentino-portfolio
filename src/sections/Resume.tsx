export default function Resume() {
  return (
    <section id="resume" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Resume</h1>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/resume.pdf"
              download="Jaime_Tolentino_Resume.pdf"
              className="btn btn-primary"
            >
              📥 Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              🔗 Open PDF in New Tab
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2">
              <h2 className="text-4xl font-bold mb-2">
                Jaime Nicolas Tolentino
              </h2>
              <p className="text-xl opacity-70 mb-4">Frontend Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="mailto:jaimenicolastolentino@gmail.com"
                  className="hover:text-primary"
                >
                  📧 jaimenicolastolentino@gmail.com
                </a>
                <span>📍 Iloilo City, Philippines</span>
                <a
                  href="https://linkedin.com/in/jntolentino1201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  💼 linkedin.com/in/jntolentino1201
                </a>
                <a
                  href="https://github.com/jntolentino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  🔗 github.com/jntolentino
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">▸</span> Professional Summary
              </h3>
              <p className="text-base leading-relaxed">
                Passionate Frontend Developer specializing in React.js and
                TypeScript with hands-on experience building responsive,
                user-centric web applications. Proven ability to collaborate
                effectively in team environments while delivering high-quality
                code and intuitive user interfaces. Eager to contribute
                technical skills and creative problem-solving to innovative
                development projects.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> Experience
              </h3>

              <div className="mb-6 pl-4 border-l-2 border-primary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">
                      MERN Frontend Internship Trainee
                    </h4>
                    <p className="text-base opacity-70">Company Name</p>
                  </div>
                  <span className="text-sm font-mono opacity-70 bg-base-200 px-3 py-1 rounded mt-2 md:mt-0">
                    Feb 2025 - May 2025
                  </span>
                </div>
                <ul className="list-disc list-outside space-y-2 ml-5 mt-3">
                  <li>
                    Developed and implemented responsive UI components using
                    React.js and Chakra UI, creating intuitive user experiences
                    for asset tracking systems
                  </li>
                  <li>
                    Collaborated with backend developers to integrate RESTful
                    APIs, ensuring seamless data flow between frontend and
                    backend services
                  </li>
                  <li>
                    Optimized application performance through code refactoring
                    and implementation of best practices, resulting in improved
                    load times
                  </li>
                  <li>
                    Participated in agile development processes including daily
                    standups, sprint planning, and code reviews
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> Education
              </h3>

              <div className="pl-4 border-l-2 border-primary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="text-xl font-bold">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-base opacity-70">
                      Central Philippine University
                    </p>
                  </div>
                  <span className="text-sm font-mono opacity-70 bg-base-200 px-3 py-1 rounded mt-2 md:mt-0">
                    2021 - 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> Technical Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-base-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-primary">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-sm">React.js</span>
                    <span className="badge badge-sm">TypeScript</span>
                    <span className="badge badge-sm">JavaScript (ES6+)</span>
                    <span className="badge badge-sm">HTML5</span>
                    <span className="badge badge-sm">CSS3</span>
                    <span className="badge badge-sm">Tailwind CSS</span>
                    <span className="badge badge-sm">Chakra UI</span>
                    <span className="badge badge-sm">DaisyUI</span>
                  </div>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-primary">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-sm">Git / GitHub</span>
                    <span className="badge badge-sm">Vite</span>
                    <span className="badge badge-sm">npm</span>
                    <span className="badge badge-sm">REST APIs</span>
                    <span className="badge badge-sm">Figma</span>
                    <span className="badge badge-sm">VS Code</span>
                  </div>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-primary">
                    Concepts & Practices
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-sm">Responsive Design</span>
                    <span className="badge badge-sm">
                      Component-Based Architecture
                    </span>
                    <span className="badge badge-sm">Agile Development</span>
                    <span className="badge badge-sm">Version Control</span>
                    <span className="badge badge-sm">UI/UX Best Practices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section (Optional) */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> Featured Projects
              </h3>
              <p className="text-base opacity-70">
                View my complete project portfolio in the{" "}
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary hover:underline font-semibold"
                >
                  Projects section
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
