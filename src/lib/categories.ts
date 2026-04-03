export type CategoryTheme = {
  heroImage: string;
  imageKeywords: string[];
  gradientClass: string;
  overlayClass: string;
  badgeClass: string;
  cardClass: string;
  spotlightClass: string;
  palette: {
    base: string;
    surface: string;
    accent: string;
    text: string;
  };
};

export const categories = {
  "personal-thinking": {
    slug: "personal-thinking",
    name: "个人思考",
    englishName: "Personal Thinking",
    description: "关于自我、阅读、写作与长期主义的记录。",
    theme: {
      heroImage: "/images/categories/personal-thinking.jpg",
      imageKeywords: [
        "abstract minimal",
        "monochrome gradient",
        "empty space",
        "soft shadow"
      ],
      gradientClass: "from-neutral-950/90 via-neutral-700/55 to-stone-100/30",
      overlayClass: "bg-black/28",
      badgeClass:
        "border-white/20 bg-white/10 text-white backdrop-blur-md dark:border-white/15",
      cardClass:
        "border-neutral-200/70 bg-white/88 dark:border-white/10 dark:bg-neutral-950/70",
      spotlightClass:
        "shadow-[0_24px_70px_rgba(17,17,17,0.12)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]",
      palette: {
        base: "#111111",
        surface: "#F5F5F2",
        accent: "#8C8C86",
        text: "#111111"
      }
    }
  },
  economics: {
    slug: "economics",
    name: "经济学",
    englishName: "Economics",
    description: "宏观、微观、市场结构与日常经济观察。",
    theme: {
      heroImage: "/images/categories/economics.jpg",
      imageKeywords: [
        "data grid",
        "editorial infographics",
        "finance dashboard",
        "structured layout"
      ],
      gradientClass: "from-slate-950/94 via-slate-800/72 to-amber-200/32",
      overlayClass: "bg-slate-950/36",
      badgeClass:
        "border-white/18 bg-slate-900/35 text-white backdrop-blur-md dark:border-white/15",
      cardClass:
        "border-slate-200/80 bg-slate-50/90 dark:border-white/10 dark:bg-slate-950/70",
      spotlightClass:
        "shadow-[0_24px_72px_rgba(23,32,51,0.16)] dark:shadow-[0_24px_72px_rgba(0,0,0,0.35)]",
      palette: {
        base: "#172033",
        surface: "#EEF2F7",
        accent: "#D4A017",
        text: "#172033"
      }
    }
  },
  "politics-society": {
    slug: "politics-society",
    name: "政治与社会",
    englishName: "Politics & Society",
    description: "制度、公共议题与社会运行方式的思考。",
    theme: {
      heroImage: "/images/categories/politics-society.jpg",
      imageKeywords: [
        "documentary photo",
        "urban realism",
        "newspaper texture",
        "serious editorial"
      ],
      gradientClass: "from-zinc-950/95 via-stone-900/76 to-orange-200/26",
      overlayClass: "bg-black/36",
      badgeClass:
        "border-white/15 bg-black/22 text-white backdrop-blur-md dark:border-white/12",
      cardClass:
        "border-zinc-300/70 bg-stone-50/90 dark:border-white/10 dark:bg-zinc-950/72",
      spotlightClass:
        "shadow-[0_24px_80px_rgba(26,26,26,0.22)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.42)]",
      palette: {
        base: "#1A1A1A",
        surface: "#E7E2DA",
        accent: "#8A3B2E",
        text: "#1A1A1A"
      }
    }
  },
  "ai-technology": {
    slug: "ai-technology",
    name: "AI与技术",
    englishName: "AI & Technology",
    description: "模型、工具链、产品形态与技术判断。",
    theme: {
      heroImage: "/images/categories/ai-technology.jpg",
      imageKeywords: [
        "blue neon",
        "futuristic interface",
        "cyber minimal",
        "tech glow"
      ],
      gradientClass: "from-sky-950/96 via-blue-800/72 to-cyan-300/34",
      overlayClass: "bg-sky-950/38",
      badgeClass:
        "border-cyan-200/18 bg-sky-900/28 text-cyan-50 backdrop-blur-md dark:border-cyan-200/15",
      cardClass:
        "border-sky-200/70 bg-sky-50/88 dark:border-white/10 dark:bg-slate-950/72",
      spotlightClass:
        "shadow-[0_24px_82px_rgba(14,165,233,0.16)] dark:shadow-[0_24px_82px_rgba(0,0,0,0.36)]",
      palette: {
        base: "#081225",
        surface: "#E6F6FF",
        accent: "#0EA5E9",
        text: "#081225"
      }
    }
  },
  "random-insights": {
    slug: "random-insights",
    name: "偏印分享",
    englishName: "Random Insights",
    description: "不按主题归档，但值得留下来的片段灵感。",
    theme: {
      heroImage: "/images/categories/random-insights.jpg",
      imageKeywords: [
        "warm lifestyle",
        "sunlight notebook",
        "candid moments",
        "soft everyday scene"
      ],
      gradientClass: "from-amber-900/82 via-orange-500/46 to-amber-100/28",
      overlayClass: "bg-orange-950/18",
      badgeClass:
        "border-white/18 bg-amber-50/16 text-white backdrop-blur-md dark:border-white/12",
      cardClass:
        "border-orange-200/70 bg-orange-50/90 dark:border-white/10 dark:bg-stone-950/72",
      spotlightClass:
        "shadow-[0_24px_70px_rgba(201,123,99,0.14)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)]",
      palette: {
        base: "#6B4F3A",
        surface: "#FFF6ED",
        accent: "#E8A87C",
        text: "#6B4F3A"
      }
    }
  }
} as const;

export type CategorySlug = keyof typeof categories;

export const categoryOrder: CategorySlug[] = [
  "personal-thinking",
  "economics",
  "politics-society",
  "ai-technology",
  "random-insights"
];

export function getCategoryBySlug(slug: string) {
  if (slug in categories) {
    return categories[slug as CategorySlug];
  }

  return null;
}

export function getCategoryHeroImage(category: CategorySlug) {
  return categories[category].theme.heroImage;
}
