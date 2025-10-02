import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="link link-hover"
        >
          About
        </button>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="link link-hover"
        >
          Projects
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="link link-hover"
        >
          Contact
        </button>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="btn btn-ghost btn-circle"
          >
            <Mail size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2025 Jaime Nicolas Tolentino. All rights reserved.</p>
      </aside>
    </footer>
  );
}
