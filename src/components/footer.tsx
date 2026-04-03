import { categoryOrder, categories } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold tracking-tight">明博客</p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            一个基于 Markdown 的个人博客，按长期关注的五类主题组织内容，并为每个分类配置独立配色与图片系统。
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {categoryOrder.map((category) => (
            <p key={category} className="text-sm text-[var(--muted)]">
              {categories[category].name}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
