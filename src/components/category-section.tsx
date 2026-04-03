import type { CategorySlug } from "@/lib/categories";
import type { PostMeta } from "@/lib/posts";
import { CategoryHero } from "@/components/category-hero";
import { SectionPostCard } from "@/components/section-post-card";

type CategorySectionProps = {
  category: CategorySlug;
  posts: PostMeta[];
};

export function CategorySection({ category, posts }: CategorySectionProps) {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="space-y-6">
      <CategoryHero category={category} articleCount={posts.length} compact />

      {featuredPost ? (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <SectionPostCard post={featuredPost} />
          <div className="grid gap-6">
            {otherPosts.length > 0 ? (
              otherPosts.slice(0, 2).map((post) => (
                <SectionPostCard key={post.slug} post={post} compact />
              ))
            ) : (
              <div className="surface-card flex min-h-56 items-center rounded-[1.75rem] p-6 text-[var(--muted)]">
                这个分类目前只有一篇文章，后续内容会继续补充。
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="surface-card rounded-[1.75rem] p-6 text-[var(--muted)]">
          暂无文章。
        </div>
      )}
    </section>
  );
}
