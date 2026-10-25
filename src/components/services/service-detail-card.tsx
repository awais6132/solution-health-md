import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceDetailItem } from '@/types/services-page';

export interface ServiceDetailCardProps {
  service: ServiceDetailItem;
  className?: string;
}

export function ServiceDetailCard({
  service,
  className = '',
}: ServiceDetailCardProps) {
  return (
    <article
      id={service.id}
      className={`group bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-[0_16px_36px_-10px_rgba(10,37,64,0.1)] transition-all duration-300 scroll-mt-24 ${className}`}
    >
      {/* 1. Card Image Header */}
      <div className="relative w-full h-48 sm:h-56 bg-slate-100 overflow-hidden">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt || service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* 2. Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          {/* Title & Category Badge Header */}
          <div className="flex items-center justify-between gap-3">
            <h3
              className="text-slate-900 group-hover:text-[#10669D] transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '40px',
                letterSpacing: '0%',
                textTransform: 'capitalize',
              }}
            >
              {service.title}
            </h3>
            {service.badge && (
              <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 select-none">
                {service.badge}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className="text-slate-600 line-clamp-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              letterSpacing: '0%',
            }}
          >
            {service.description}
          </p>
        </div>

        {/* Read More Action Link */}
        <div className="pt-2 border-t border-slate-100 flex items-center">
          <Link
            href={service.href}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '13.56px',
              lineHeight: '18.08px',
              letterSpacing: '0px',
              verticalAlign: 'middle',
            }}
            className="inline-flex items-center gap-1.5 text-[#10669D] group-hover:text-[#4B9B44] transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceDetailCard;
