import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { categoryOrder, categories } from "@/lib/categories";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/94 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              明博客
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/"
                className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                首页
              </Link>
              <Link
                href="/about"
                className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                视觉系统
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1">
          {categoryOrder.map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
            >
              {categories[category].name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
