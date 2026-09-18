import Link from "next/link";
import type { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Projects Area
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Project workspace
          </h1>
          <nav
            aria-label="Projects navigation"
            className="mt-5 flex flex-wrap gap-3 text-sm font-medium"
          >
            <Link
              href="/projects"
              className="rounded-md border border-zinc-300 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
            >
              All Projects
            </Link>
            <Link
              href="/projects/settings"
              className="rounded-md border border-zinc-300 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
            >
              Settings
            </Link>
          </nav>
        </div>
        {children}
      </section>
    </div>
  );
}
