export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-base-200">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Image + Title Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <div className="flex-shrink-0">
            <img
              src="src/assets/jnt.jpg"
              alt="Jaime Nicolas Tolentino"
              className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover shadow-xl"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with a love for creating
              intuitive and engaging user experiences. With expertise in modern
              web technologies, I transform ideas into functional, beautiful
              applications.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Experience Timeline */}
        <h2 className="text-3xl font-bold mt-12 mb-8 text-center">
          Experience & Education
        </h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-sm opacity-70">
                Feb 2025 - May 2025
              </time>
              <div className="text-lg font-bold mt-1">
                MERN Frontend Internship Trainee
              </div>
              <p className="mt-2">
                Frontend Developer - Developed and implemented responsive,
                modern UI components using React.js and Chakra UI, creating an
                intuitive user experience for efficient asset tracking and life
                cycle management.
              </p>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-sm opacity-70">
                2021 - 2025
              </time>
              <div className="text-lg font-bold mt-1">
                Central Philippine University
              </div>
              <p className="mt-2">Bachelor of Science in Computer Science</p>
            </div>
            <hr />
          </li>
        </ul>

        <div className="divider"></div>

        {/* Skills */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100">
            <div className="card-body">
              <h4 className="card-title text-lg">Frontend</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>React / TypeScript</li>
                <li>Tailwind CSS / Chakra UI</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <h4 className="card-title text-lg">Tools</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Git / GitHub</li>
                <li>Vite / Webpack</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
