import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

type HeaderProps = {
  title?: string;
};

export default function Header({ title = "WDD 430 Portfolio" }: HeaderProps) {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {title}
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-zinc-950 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
