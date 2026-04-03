import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { CategoryBadge } from "@/components/category-badge";
import { CoverImage } from "@/components/cover-image";
import { categories } from "@/lib/categories";
import { getResolvedPostImage } from "@/lib/posts";

type SectionPostCardProps = {
  post: PostMeta;
  compact?: boolean;
};

export function SectionPostCard({
  post,
  compact = false
}: SectionPostCardProps) {
  const categoryInfo = categories[post.category];

  return (
    <article
      className={`surface-card overflow-hidden rounded-[1.75rem] ${categoryInfo.theme.cardClass} ${categoryInfo.theme.spotlightClass} transition hover:-translate-y-0.5 ${
        compact ? "h-full" : ""
      }`}
    >
      <CoverImage
        src={getResolvedPostImage(post)}
        alt={post.title}
        className={compact ? "aspect-[4/3]" : "aspect-[16/10]"}
        overlayClassName="bg-gradient-to-t from-black/18 via-black/0 to-transparent"
      />

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          <CategoryBadge category={post.category} />
          <span>{post.date}</span>
        </div>
        <div className="space-y-3">
          <h3
            className={`font-semibold tracking-tight text-[var(--foreground)] ${
              compact ? "text-2xl" : "text-3xl md:text-4xl"
            }`}
          >
            <Link href={`/posts/${post.slug}`} className="transition hover:opacity-70">
              {post.title}
            </Link>
          </h3>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            {post.excerpt}
          </p>
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex text-sm font-medium text-[var(--foreground)] transition hover:opacity-70"
        >
          阅读文章
        </Link>
      </div>
    </article>
  );
}
