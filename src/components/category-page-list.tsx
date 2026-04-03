import type { PostMeta } from "@/lib/posts";
import { SectionPostCard } from "@/components/section-post-card";

type CategoryPageListProps = {
  posts: PostMeta[];
};

export function CategoryPageList({ posts }: CategoryPageListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <SectionPostCard key={post.slug} post={post} compact />
      ))}
    </div>
  );
}
