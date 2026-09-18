import Link from "next/link";
import ProjectResults from "@/components/ProjectResults";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Projects
        </h2>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          Browse the project categories in this portfolio. The project
          navigation above comes from the nested projects layout.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects/opensource"
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          Open Source Projects
        </Link>
        <Link
          href="/projects/school"
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          School Projects
        </Link>
      </div>
      <ProjectResults endpoint="/api/projects" />
    </div>
  );
}
