import ProjectResults from "@/components/ProjectResults";

export default function OpenSourceProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Open Source Projects
        </h2>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          Contributions, experiments, and public code that can be shared
          outside of class.
        </p>
      </div>
      <ProjectResults endpoint="/api/projects?type=opensource" />
    </div>
  );
}
