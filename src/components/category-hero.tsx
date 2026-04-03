import Link from "next/link";
import type { CategorySlug } from "@/lib/categories";
import { categories } from "@/lib/categories";
import { CoverImage } from "@/components/cover-image";

type CategoryHeroProps = {
  category: CategorySlug;
  articleCount?: number;
  compact?: boolean;
};

export function CategoryHero({
  category,
  articleCount,
  compact = false
}: CategoryHeroProps) {
  const categoryInfo = categories[category];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)]">
      <CoverImage
        src={categoryInfo.theme.heroImage}
        alt={categoryInfo.name}
        className={compact ? "aspect-[16/10]" : "aspect-[16/9] md:aspect-[21/9]"}
        overlayClassName={`bg-gradient-to-br ${categoryInfo.theme.gradientClass}`}
      />
      <div className={`absolute inset-0 ${categoryInfo.theme.overlayClass}`} />
      <div className="absolute inset-0 p-6 md:p-8 lg:p-10">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-4">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${categoryInfo.theme.badgeClass}`}
            >
              {categoryInfo.englishName}
            </span>
            <div className="space-y-3 text-white">
              <h2
                className={`max-w-3xl font-semibold tracking-[-0.04em] ${
                  compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"
                }`}
              >
                {categoryInfo.name}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
                {categoryInfo.description}
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 text-white/85">
            <p className="text-sm">
              {articleCount !== undefined ? `${articleCount} 篇文章` : "分类视觉封面"}
            </p>
            <Link
              href={`/categories/${categoryInfo.slug}`}
              className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/16"
            >
              进入分类
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
