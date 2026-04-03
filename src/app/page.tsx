import Link from "next/link";
import { CategoryHero } from "@/components/category-hero";
import { CategorySection } from "@/components/category-section";
import { categoryOrder } from "@/lib/categories";
import { getPostsGroupedByCategory } from "@/lib/posts";

export default function HomePage() {
  const groupedPosts = getPostsGroupedByCategory();
  const totalPosts = groupedPosts.reduce((sum, item) => sum + item.posts.length, 0);
  const heroCategory = groupedPosts.find((group) => group.posts.length > 0) ?? groupedPosts[0];

  return (
    <div className="space-y-18 md:space-y-24">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
        <div className="space-y-7 border-b border-[var(--border)] pb-12 lg:border-b-0 lg:pb-0">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Journal / Essays / Notes
          </p>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              为五种不同主题，建立一套可持续扩展的分类视觉系统。
            </h1>
            <p className="max-w-3xl text-lg leading-9 text-[var(--muted)] md:text-xl">
              每个分类都有独立的配色、默认封面图和卡片气质。首页像一本杂志，
              分类页像视觉归档，文章页则保持安静、舒适的阅读优先体验。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#categories"
              className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-85"
            >
              浏览全部分类
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--surface-soft)]"
            >
              查看系统说明
            </Link>
          </div>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="text-sm text-[var(--muted)]">分类数量</p>
              <p className="mt-2 text-3xl font-semibold">{categoryOrder.length}</p>
            </div>
            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="text-sm text-[var(--muted)]">当前文章</p>
              <p className="mt-2 text-3xl font-semibold">{totalPosts}</p>
            </div>
            <div className="surface-card rounded-[1.5rem] p-5">
              <p className="text-sm text-[var(--muted)]">图片系统</p>
              <p className="mt-2 text-lg font-semibold">分类图 + 文章图</p>
            </div>
          </div>
        </div>

        <CategoryHero
          category={heroCategory.category.slug}
          articleCount={heroCategory.posts.length}
        />
      </section>

      <div id="categories" className="space-y-18 md:space-y-24">
        {groupedPosts.map((group) => (
          <CategorySection
            key={group.category.slug}
            category={group.category.slug}
            posts={group.posts}
          />
        ))}
      </div>
    </div>
  );
}
