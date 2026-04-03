import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryHero } from "@/components/category-hero";
import { CategoryPageList } from "@/components/category-page-list";
import {
  categoryOrder,
  getCategoryBySlug,
  type CategorySlug
} from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return categoryOrder.map((category) => ({
    category
  }));
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryBySlug(category);

  if (!categoryInfo) {
    return {
      title: "分类不存在"
    };
  }

  return {
    title: `${categoryInfo.name} | ${categoryInfo.englishName}`,
    description: categoryInfo.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryBySlug(category);

  if (!categoryInfo) {
    notFound();
  }

  const posts = getPostsByCategory(categoryInfo.slug as CategorySlug);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          返回首页
        </Link>
        <CategoryHero category={categoryInfo.slug as CategorySlug} articleCount={posts.length} />
      </div>

      <section className="space-y-5 border-b border-[var(--border)] pb-8">
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          该分类页面会自动展示所有 `category: "{categoryInfo.slug}"`
          的文章，适合做主题归档与持续更新。
        </p>
      </section>

      <CategoryPageList posts={posts} />
    </div>
  );
}
