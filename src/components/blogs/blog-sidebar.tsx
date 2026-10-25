'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { BlogSidebarArticle } from '@/types/blogs-page';

interface SidebarCardProps {
  article: BlogSidebarArticle;
}

function SidebarCard({ article }: SidebarCardProps) {
  return (
    <Link
      href={article.href}
      className="group flex gap-3 items-start border-b border-slate-100 pb-4 last:border-none last:pb-0"
    >
      {/* Thumbnail */}
      <div className="relative w-[72px] h-[72px] rounded-xl overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          sizes="72px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 min-w-0">
        <h4
          className="text-[13px] font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0E6C9B] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {article.title}
        </h4>
        <p className="text-[11.5px] text-slate-400 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <span className="text-[11px] font-bold text-[#4B9B44] group-hover:text-[#0E6C9B] transition-colors">
          Read More →
        </span>
      </div>
    </Link>
  );
}

export interface BlogSidebarProps {
  headline?: string;
  articles: BlogSidebarArticle[];
  showCategoryFilter?: boolean;
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (cat: string) => void;
  className?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  headline = 'Recent Articles',
  articles,
  showCategoryFilter = false,
  categories = [],
  activeCategory = 'Latest',
  onCategoryChange,
  className = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className={`w-full flex flex-col gap-5 ${className}`}>

      {/* Optional category dropdown (blogs listing page only) */}
      {showCategoryFilter && categories.length > 0 && (
        <div className="relative">
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange?.(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-[13px] text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0E6C9B]/20 focus:border-[#0E6C9B] cursor-pointer pr-10"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E6C9B]/20 focus:border-[#0E6C9B] transition-all"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#0E6C9B] flex items-center justify-center hover:bg-[#0b577d] transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Article cards panel */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Panel header */}
        <div className="px-5 pt-5 pb-3 border-b border-slate-100">
          <h3
            className="text-[15px] font-extrabold text-slate-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {headline}
          </h3>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-0 px-5 py-4 divide-y divide-slate-100">
          {articles
            .filter((a) =>
              searchQuery.trim() === '' ||
              a.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((article) => (
              <div key={article.id} className="py-4 first:pt-0 last:pb-0">
                <SidebarCard article={article} />
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
