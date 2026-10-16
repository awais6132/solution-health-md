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
    <div className="w-full flex flex-col gap-6 sm:gap-7">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1B2B4A] tracking-tight">
          {headline}
        </h2>

        <Link
          href={viewAllLink.href}
          className="text-xs sm:text-sm font-bold text-[#107C41] hover:text-[#0C6234] transition-colors inline-flex items-center shrink-0"
        >
          {viewAllLink.label}
        </Link>
      </div>

      {/* Top 3 Articles Row (Responsive Flex Row, Zero Margins) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full items-stretch">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} className="flex-1 w-full" />
        ))}
      </div>

      {/* Bottom Wide Featured Article */}
      <FeaturedArticleCard article={featuredArticle} className="w-full" />
    </div>
  );
};

export default InsightsShowcase;
