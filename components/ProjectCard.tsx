type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          className="inline-flex text-sm font-semibold text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          View project
        </a>
      </div>
    </article>
  );
}
