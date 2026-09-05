import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Portfolio Foundation",
    description:
      "A Next.js app structure with reusable components, shared layout, and Tailwind CSS styling.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Hello API Route",
    description:
      "A simple route handler that returns JSON from the app router API folder.",
    technologies: ["Next.js App Router", "Route Handler", "JSON"],
    link: "/api/hello",
  },
  {
    title: "About Page",
    description:
      "A dedicated route for introducing the developer and the purpose of the portfolio.",
    technologies: ["React", "File-based Routing", "Tailwind CSS"],
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            WDD 430 project portfolio
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A growing collection of course projects built with Next.js,
            TypeScript, Tailwind CSS, and practical web development patterns.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
