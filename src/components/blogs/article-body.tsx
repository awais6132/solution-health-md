import React from 'react';
import Link from 'next/link';
import { ArticleBlock } from '@/types/blogs-page';

interface ArticleBodyProps {
  blocks: ArticleBlock[];
  className?: string;
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ blocks, className = '' }) => {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {

          case 'heading':
            return (
              <h2
                key={idx}
                className="text-[17px] sm:text-lg font-extrabold text-[#0E6C9B] leading-snug mt-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {block.heading}
              </h2>
            );

          case 'paragraph':
            return (
              <p
                key={idx}
                className="text-[13.5px] text-slate-600 leading-relaxed"
              >
                {block.text}
              </p>
            );

          case 'bullet-list':
            return (
              <ul key={idx} className="flex flex-col gap-2 pl-1">
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4B9B44] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'numbered-list':
            return (
              <ol key={idx} className="flex flex-col gap-2 pl-1">
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-600 leading-relaxed">
                    <span
                      className="mt-0.5 text-[12px] font-bold text-[#0E6C9B] shrink-0 w-5 text-right"
                    >
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case 'link':
            return (
              <Link
                key={idx}
                href={block.href ?? '#'}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#4B9B44] hover:text-[#0E6C9B] underline underline-offset-2 transition-colors"
              >
                {block.text}
              </Link>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleBody;
