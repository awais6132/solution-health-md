import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import { ArticleBody, BlogSidebar } from '@/components/blogs';
import {
  ARTICLE_MAP,
  getArticleHeroConfig,
  defaultArticleSidebarArticles,
} from '@/constants/blogs-page';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLE_MAP[slug];
  if (!article) return { title: 'Article Not Found | Solutions Health MD' };
  return {
    title: `${article.title} | Solutions Health MD`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(ARTICLE_MAP).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLE_MAP[slug];

  if (!article) notFound();

  const heroConfig = getArticleHeroConfig(article);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Article Hero — ServicesHero reused with no CTA buttons */}
      <ServicesHero config={heroConfig} />

      {/* 2. Article Content + Sidebar */}
      <section
        id="article-content"
        aria-label={article.title}
        className="w-full bg-white site-section site-section-both"
      >
        <div className="site-container w-full flex flex-col lg:flex-row gap-10 items-start">

          {/* ── LEFT: Article body ── */}
          <article className="flex-1 min-w-0">
            <ArticleBody blocks={article.body} />
          </article>

          {/* ── RIGHT: Recent Articles Sidebar ── */}
          <BlogSidebar
            headline="Recent Articles"
            articles={defaultArticleSidebarArticles}
            className="w-full lg:w-[300px] xl:w-[320px] shrink-0"
          />
        </div>
      </section>
    </div>
  );
}
