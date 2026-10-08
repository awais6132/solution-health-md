import React from 'react';
import Link from 'next/link';
import { ArticleItem, FeaturedArticleItem } from '@/types/faq-insights';
import { ArticleCard } from './article-card';
import { FeaturedArticleCard } from './featured-article-card';

interface InsightsShowcaseProps {
  headline: string;
  viewAllLink: {
    label: string;
    href: string;
  };
  articles: ArticleItem[];
  featuredArticle: FeaturedArticleItem;
}

export const InsightsShowcase: React.FC<InsightsShowcaseProps> = ({
  headline,
  viewAllLink,
  articles,
  featuredArticle,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1B2B4A] tracking-tight">
          {headline}
        </h2>

        <Link
          href={viewAllLink.href}
          className="text-xs sm:text-sm font-bold text-[#107C41] hover:text-[#0C6234] transition-colors inline-flex items-center flex-shrink-0"
        >
          {viewAllLink.label}
        </Link>
      </div>

      {/* Top 3 Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Bottom Wide Featured Article */}
      <FeaturedArticleCard article={featuredArticle} />
    </div>
  );
};

export default InsightsShowcase;
