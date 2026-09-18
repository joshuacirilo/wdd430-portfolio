import ProjectResults from "@/components/ProjectResults";

export default function SchoolProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          School Projects
        </h2>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          Coursework projects and practice assignments from WDD 430.
        </p>
      </div>
      <ProjectResults endpoint="/api/projects?type=school" />
    </div>
  );
}
