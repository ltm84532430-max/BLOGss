import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryBadge } from "@/components/category-badge";
import { CoverImage } from "@/components/cover-image";
import { MarkdownContent } from "@/components/markdown-content";
import { categories } from "@/lib/categories";
import { getAllPosts, getPostBySlug, getResolvedPostImage } from "@/lib/posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categoryInfo = categories[post.category];

  return (
    <article className="mx-auto max-w-5xl space-y-10">
      <div className="space-y-4">
        <Link
          href={`/categories/${post.category}`}
          className="inline-flex text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          返回分类
        </Link>

        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)]">
          <CoverImage
            src={getResolvedPostImage(post)}
            alt={post.title}
            priority
            className="aspect-[16/9] md:aspect-[21/9]"
            overlayClassName={`bg-gradient-to-t ${categoryInfo.theme.gradientClass}`}
          />
          <div className={`absolute inset-0 ${categoryInfo.theme.overlayClass}`} />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="space-y-4 text-white">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <CategoryBadge category={post.category} inverted />
                <span>{post.date}</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                {post.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/82 md:text-lg">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-card rounded-[2rem] px-6 py-8 md:px-12 md:py-12">
        <div className="prose-content mx-auto max-w-3xl">
          <MarkdownContent content={post.content} />
        </div>
      </div>
    </article>
  );
}
