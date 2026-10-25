import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServicesGridConfig } from '@/types/services-page';
import { defaultServicesGridConfig } from '@/constants/services-page';
import { ServiceDetailCard } from './service-detail-card';

export interface ServicesGridProps {
  config?: Partial<ServicesGridConfig>;
  className?: string;
}

export function ServicesGrid({ config, className = '' }: ServicesGridProps) {
  const activeConfig: ServicesGridConfig = {
    ...defaultServicesGridConfig,
    ...config,
    services: config?.services || defaultServicesGridConfig.services,
  };

  return (
    <section
      id="all-services"
      aria-label="We provide best healthcare Services"
      className={`w-full bg-white site-section site-section-both ${className}`}
      style={{
        paddingBottom: 'clamp(64px, 8vw, 100px)',
      }}
    >
      <div className="site-container w-full flex flex-col gap-8 sm:gap-10">
        {/* Section Top Header: Headline + Subtext & View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-6 sm:pb-8 w-full">
          <div className="flex flex-col gap-3 min-w-0 flex-1">
            <h2
              className="whitespace-normal md:whitespace-nowrap"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(24px, 3.1vw, 40.67px)',
                lineHeight: 'clamp(32px, 3.5vw, 45.19px)',
                letterSpacing: '-1.02px',
                verticalAlign: 'middle',
                color: '#0F6396',
              }}
            >
              {activeConfig.headline}
            </h2>
            <p
              className="text-slate-600 max-w-4xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.6vw, 18.08px)',
                lineHeight: 'clamp(22px, 2.2vw, 27.11px)',
                letterSpacing: '0px',
                verticalAlign: 'middle',
              }}
            >
              {activeConfig.subheadline}
            </p>
          </div>

          {activeConfig.viewAllLink && (
            <Link
              href={activeConfig.viewAllLink.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '13.56px',
                lineHeight: '18.08px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
                color: '#0F6396',
              }}
              className="inline-flex items-center gap-1.5 font-semibold text-[#0F6396] hover:text-[#0b4b73] transition-colors shrink-0 whitespace-nowrap self-start md:self-end pb-1"
            >
              <span>{activeConfig.viewAllLink.label}</span>
              <ArrowRight className="w-4 h-4 text-[#0F6396]" />
            </Link>
          )}
        </div>

        {/* 2-Column Responsive Services Grid (Matches Figma 5 rows x 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {activeConfig.services.map((service) => (
            <ServiceDetailCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
