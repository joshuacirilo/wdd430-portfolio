interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
