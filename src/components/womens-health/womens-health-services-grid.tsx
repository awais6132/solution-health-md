import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import {
  WomensHealthServicesGridProps,
  WomensHealthServicesGridConfig,
} from '@/types/womens-health';
import { defaultWomensHealthServicesConfig } from '@/constants/womens-health-page';

export function WomensHealthServicesGrid({
  config,
  className = '',
}: WomensHealthServicesGridProps) {
  const activeConfig: WomensHealthServicesGridConfig = {
    ...defaultWomensHealthServicesConfig,
    ...config,
  };

  return (
    <section
      aria-label={activeConfig.headline || "Our Women's Health Services"}
      className={`w-full py-14 sm:py-16 lg:py-20 ${className}`}
      style={{ background: '#F5FBFEC2' }}
    >
      <div className="site-container">
        {/* Section Centered Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 gap-2">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          {activeConfig.subheadline && (
            <p className="text-xs sm:text-sm lg:text-[14px] text-[#526E86] leading-relaxed">
              {activeConfig.subheadline}
            </p>
          )}
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch w-full max-w-[1140px] mx-auto">
          {activeConfig.services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Upper Content: Top Image, Title, Description, Checklist */}
              <div className="flex flex-col flex-grow">
                {/* Top Image (Flush with top rounded corners) */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden select-none">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[20px] font-bold text-[#0E4A72] tracking-tight leading-snug mb-2 min-h-[50px] flex items-center">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[12.5px] text-[#526E86] leading-relaxed mb-6 min-h-[44px]">
                    {item.description}
                  </p>

                  {/* Checklist with exact Figma SVG icon */}
                  <ul className="flex flex-col gap-2.5 mb-6 flex-grow">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 mt-0.5"
                        >
                          <rect width="16" height="16" rx="8" fill="#4B9B44" />
                          <path
                            d="M11.2495 4.83594C9.65771 7.10807 8.02197 9.21094 6.34229 11.1445C6.21533 11.291 6.10465 11.3643 6.01025 11.3643C5.90283 11.3643 5.70915 11.0811 5.4292 10.5146C4.97673 9.59994 4.75049 9.05306 4.75049 8.87402C4.75049 8.80892 4.79443 8.73242 4.88232 8.64453C5.07113 8.44596 5.20459 8.34668 5.28271 8.34668C5.35433 8.34668 5.43083 8.46061 5.51221 8.68848C5.72705 9.2679 5.95329 9.78385 6.19092 10.2363C7.83805 8.56966 9.46729 6.7028 11.0786 4.63574L11.2495 4.83594V4.83594"
                            fill="white"
                          />
                        </svg>
                        <span className="text-xs sm:text-[13px] text-[#334155] font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                <Link
                  href={item.ctaHref || ROUTES.FIND_MY_CARE}
                  className="w-full py-3 px-5 rounded-full bg-[#4B9B44] text-white text-xs sm:text-sm font-semibold text-center hover:bg-[#3E8337] active:scale-[0.98] transition-all duration-150 shadow-xs flex items-center justify-center select-none"
                >
                  {item.ctaLabel || 'Get Started →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WomensHealthServicesGrid;
