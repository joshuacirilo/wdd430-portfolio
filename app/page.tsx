import ProjectList from "@/components/ProjectList";

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
        <ProjectList />
      </section>
    </div>
  );
}
