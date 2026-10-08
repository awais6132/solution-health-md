import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleItem } from '@/types/faq-insights';

interface ArticleCardProps {
  article: ArticleItem;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="flex flex-col bg-[#F0F7FA] hover:bg-[#E8F3F8] transition-all duration-200 rounded-2xl overflow-hidden border border-[#E2EEF4]/60 group h-full">
      {/* Article Image Container */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-200">
        <Image
          src={article.imageUrl}
          alt={article.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Article Content Container */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        <h3 className="text-[#1B2B4A] font-extrabold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#00A4D6] transition-colors">
          {article.title}
        </h3>

        <Link
          href={article.href}
          className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1B2B4A] hover:text-[#00A4D6] transition-colors gap-1.5"
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

export default ArticleCard;
