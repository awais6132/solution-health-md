import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedArticleItem } from '@/types/faq-insights';

interface FeaturedArticleCardProps {
  article: FeaturedArticleItem;
}

export const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ article }) => {
  return (
    <article className="w-full flex flex-col bg-[#F0F7FA] hover:bg-[#E8F3F8] transition-all duration-200 rounded-2xl overflow-hidden border border-[#E2EEF4]/60 group">
      {/* Wide Hero Image */}
      <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-200">
        <Image
          src={article.imageUrl}
          alt={article.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="text-[#1B2B4A] font-extrabold text-sm sm:text-base md:text-lg leading-snug group-hover:text-[#00A4D6] transition-colors">
          {article.title}
        </h3>

        <Link
          href={article.href}
          className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1B2B4A] hover:text-[#00A4D6] transition-colors gap-1.5 flex-shrink-0"
        >
          <span>Read More</span>
          <span className="text-sm font-semibold transition-transform duration-150 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default FeaturedArticleCard;
