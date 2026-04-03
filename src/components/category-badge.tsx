import Link from "next/link";
import { categories, type CategorySlug } from "@/lib/categories";

type CategoryBadgeProps = {
  category: CategorySlug;
  inverted?: boolean;
};

export function CategoryBadge({
  category,
  inverted = false
}: CategoryBadgeProps) {
  const categoryInfo = categories[category];

  return (
    <Link
      href={`/categories/${categoryInfo.slug}`}
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium transition ${
        inverted
          ? "border-white/20 bg-white/10 text-white hover:bg-white/16"
          : "border-[var(--border-strong)] text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
      }`}
    >
      {categoryInfo.name}
    </Link>
  );
}
