'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogsPageConfig, BlogPost } from '@/types/blogs-page';
import { defaultBlogsPageConfig } from '@/constants/blogs-page';
import { BlogSidebar } from './blog-sidebar';

/* ─── Main Blog Post Card (left grid) ─── */
function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_-8px_rgba(14,108,155,0.12)] hover:border-[#0E6C9B]/25 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0E6C9B] text-white tracking-wide select-none">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Date + read time */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-[15px] sm:text-base font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0E6C9B] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Read More CTA */}
        <Link
          href={post.href}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0E6C9B] hover:text-[#0b577d] transition-colors group/link mt-auto pt-1"
        >
          <span>READ MORE</span>
          <span className="transition-transform duration-150 group-hover/link:translate-x-1">—→</span>
        </Link>
      </div>
    </article>
  );
}

/* SidebarCard now lives in blog-sidebar.tsx */

/* ─── Main Component ─── */
export interface BlogsGridProps {
  config?: Partial<BlogsPageConfig>;
  className?: string;
}

export const BlogsGrid: React.FC<BlogsGridProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: BlogsPageConfig = {
    ...defaultBlogsPageConfig,
    ...config,
    posts: config?.posts ?? defaultBlogsPageConfig.posts,
    sidebarArticles: config?.sidebarArticles ?? defaultBlogsPageConfig.sidebarArticles,
    categories: config?.categories ?? defaultBlogsPageConfig.categories,
  };

  const [activeCategory, setActiveCategory] = useState<string>('Latest');

  const filteredPosts = activeConfig.posts.filter((post) => {
    const matchCategory =
      activeCategory === 'Latest' || post.category === activeCategory;
    return matchCategory;
  });

  return (
    <section
      id="blogs-grid"
      aria-label="Latest Blogs & Insights"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">

        {/* Section headline (centered) */}
        <h2
          className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight text-center leading-tight"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {activeConfig.headline}
        </h2>

        {/* ── Two-column layout: main grid (left) + sidebar (right) ── */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start">

          {/* ── LEFT: 2-col blog posts grid ── */}
          <div className="flex-1 min-w-0">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-20 text-slate-400 text-sm">
                No articles found.
              </div>
            )}
          </div>

          {/* ── RIGHT: Shared Sidebar ── */}
          <BlogSidebar
            articles={activeConfig.sidebarArticles}
            showCategoryFilter
            categories={activeConfig.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="w-full lg:w-[300px] xl:w-[320px] shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogsGrid;
