export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} WDD 430 Portfolio</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
