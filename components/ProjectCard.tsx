interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-l-4 border-zinc-200 border-l-blue-600 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:border-l-blue-500 dark:bg-zinc-950">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
            Technologies:
          </strong>{" "}
          {technologies.join(", ")}
        </p>
        {link && (
          <p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
            >
              View Project
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
