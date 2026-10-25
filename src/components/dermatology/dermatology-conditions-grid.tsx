import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DermatologyConditionItem } from '@/types/dermatology-page';
import { ROUTES } from '@/constants/routes';

interface DermatologyConditionsGridProps {
  conditions: DermatologyConditionItem[];
  headline?: string;
  subheadline?: string;
  className?: string;
}

export function DermatologyConditionsGrid({
  conditions,
  headline = 'Conditions We Treat',
  subheadline = 'A focused, clinical approach to managing your chronic, persistent, or troubling skin conditions.',
  className = '',
}: DermatologyConditionsGridProps) {
  return (
    <section
      id="conditions-we-treat"
      aria-label="Dermatology Conditions We Treat"
      className={`w-full bg-[#F2F8FD] site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 text-left">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* 12-Card Grid (2 Rows of 6 on Desktop, Responsive) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5 w-full">
          {conditions.map((item) => (
            <Link
              key={item.id}
              href={item.href || ROUTES.FIND_MY_CARE}
              className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-100 shadow-2xs hover:shadow-md hover:border-slate-200 transition-all duration-200 text-center flex flex-col items-center group cursor-pointer"
            >
              {/* Photo Thumbnail */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-2.5 border border-slate-100/80">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight group-hover:text-[#0E6C9B] transition-colors truncate w-full px-1">
                {item.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate w-full px-1">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
