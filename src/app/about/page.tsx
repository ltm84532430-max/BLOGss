import { categoryOrder, categories } from "@/lib/categories";

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4 border-b border-[var(--border)] pb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          About The Visual System
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          一套围绕分类组织的博客视觉语言。
        </h1>
        <p className="max-w-3xl text-lg leading-9 text-[var(--muted)]">
          每个分类都有自己的配色、图片关键词、默认封面图和卡片气质。内容结构稳定，
          视觉表达则通过分类主题被放大。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {categoryOrder.map((category) => (
          <div key={category} className="surface-card rounded-[2rem] p-7 md:p-8">
            <div className="space-y-3">
              <p className="text-sm text-[var(--muted)]">
                {categories[category].englishName}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {categories[category].name}
              </h2>
              <p className="text-base leading-8 text-[var(--muted)]">
                {categories[category].description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">
                  {categories[category].theme.palette.base}
                </span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">
                  {categories[category].theme.palette.surface}
                </span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs">
                  {categories[category].theme.palette.accent}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
