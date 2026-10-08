import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types/services';
import { ServiceIconBadge } from './service-icon-badge';

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  const { title, subtitle, href, imageSrc, imageAlt } = service;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {/* Card Image Area */}
      <div className="relative w-full aspect-[16/11] overflow-hidden bg-slate-100">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-xs">
            No Image
          </div>
        )}

        {/* Floating Icon Badge */}
        <ServiceIconBadge item={service} />
      </div>

      {/* Card Footer / Details */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2 flex-grow bg-white">
        <div className="flex flex-col min-w-0">
          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0A192F] leading-tight group-hover:text-cyan-700 transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[12px] text-slate-500 font-normal leading-normal mt-0.5 truncate">
              {subtitle}
            </p>
          )}
        </div>

        {/* Action Arrow Icon */}
        <div className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-slate-800 group-hover:text-cyan-700 transition-colors">
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </div>
      </div>
    </Link>
  );
};
