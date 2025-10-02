import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="flex flex-wrap gap-2 my-2">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-primary">
              {tag}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
