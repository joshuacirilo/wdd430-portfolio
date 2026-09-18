import Link from "next/link";
import NavLinks from "@/components/NavLinks";

type HeaderProps = {
  title?: string;
};

export default function Header({ title = "WDD 430 Portfolio" }: HeaderProps) {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav className="mx-auto flex w-full max-w-5xl flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {title}
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
