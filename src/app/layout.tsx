import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "明博客",
    template: "%s | 明博客"
  },
  description: "一个基于 Next.js、TypeScript、Tailwind CSS 与 Markdown 构建的个人博客。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeScript />
        <div className="min-h-screen">
          <Header />
          <main className="mx-auto w-full max-w-[1240px] px-4 py-10 md:px-8 md:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
