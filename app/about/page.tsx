export default function AboutPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Building a practical web portfolio
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This site highlights projects and practice work from WDD 430. It is
            organized with reusable components, app router pages, and a simple
            API route so the project can grow throughout the course.
          </p>
        </div>
      </section>
    </div>
  );
}
