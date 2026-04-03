import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  categories,
  categoryOrder,
  getCategoryBySlug,
  getCategoryHeroImage,
  type CategorySlug
} from "@/lib/categories";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: CategorySlug;
  coverImage?: string;
};

export type Post = PostMeta & {
  content: string;
};

type FrontMatter = {
  title: string;
  date: string;
  category: CategorySlug;
  coverImage?: string;
};

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_>~-]/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

function createExcerpt(content: string) {
  const plainText = stripMarkdown(content);
  return plainText.length > 140 ? `${plainText.slice(0, 140)}...` : plainText;
}

function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontMatter = data as FrontMatter;

  if (!frontMatter.title || !frontMatter.date || !frontMatter.category) {
    throw new Error(`Post "${fileName}" is missing required front matter.`);
  }

  if (!getCategoryBySlug(frontMatter.category)) {
    throw new Error(`Post "${fileName}" uses an unsupported category.`);
  }

  return {
    slug,
    title: frontMatter.title,
    date: frontMatter.date,
    excerpt: createExcerpt(content),
    category: frontMatter.category,
    coverImage: frontMatter.coverImage,
    content
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((fileName) => readPostFile(fileName))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...postMeta }) => postMeta);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readPostFile(`${slug}.md`);
}

export function getPostsByCategory(category: CategorySlug): PostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostsGroupedByCategory() {
  const posts = getAllPosts();

  return categoryOrder.map((categorySlug) => ({
    category: categories[categorySlug],
    posts: posts.filter((post) => post.category === categorySlug)
  }));
}

export function getResolvedPostImage(post: Pick<PostMeta, "category" | "coverImage">) {
  return post.coverImage ?? getCategoryHeroImage(post.category);
}
