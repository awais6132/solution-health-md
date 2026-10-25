import React from 'react';
import Image from 'next/image';
import { DermatologyExperienceConfig } from '@/types/dermatology-page';

interface DermatologyExperienceSplitProps {
  config: DermatologyExperienceConfig;
  className?: string;
}

export function DermatologyExperienceSplit({
  config,
  className = '',
}: DermatologyExperienceSplitProps) {
  const { leftCard, rightCard } = config;

  // Custom stroke color matching Figma design (#8DB92E)
  const stroke = '#8DB92E';

  // 5 exact badges structured with 2-line labels matching design
  const badgesData = [
    {
      id: 'badge-1',
      line1: 'Expert Evaluation &',
      line2: 'Diagnosis',
      renderIcon: () => (
        // Heart outline icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'badge-2',
      line1: 'Personalized',
      line2: 'Treatment Plans',
      renderIcon: () => (
        // Document with folded corner and check
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'badge-3',
      line1: 'Prescriptions (If',
      line2: 'Appropriate)',
      renderIcon: () => (
        // Chemistry beaker / flask icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
          <line x1="7" y1="16" x2="17" y2="16" />
        </svg>
      ),
    },
    {
      id: 'badge-4',
      line1: 'Ongoing Support',
      line2: '',
      renderIcon: () => (
        // Speech chat bubble icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      id: 'badge-5',
      line1: 'Convenient &',
      line2: 'Discreet Care',
      renderIcon: () => (
        // Open/privacy lock icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="Personalized Care & Complete Dermatology Experience"
      className={`w-full bg-[#F2F8FD] site-section site-section-both ${className}`}
    >
      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Personalized Care for Healthier Skin (Straight Rectangular Graphic, No Border Radius, No Shadow) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[495/233] overflow-hidden select-none">
              <Image
                src="/assets/images/dermatology-personalized-card-2x.png"
                alt="Personalized Care for Healthier Skin - Our licensed dermatology providers will review your medical history, assess your condition, and create a customized treatment plan including prescriptions sent to your local pharmacy."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: A Complete Dermatology Experience (Clean White, No Box, No Border Radius, No Background Color) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            {/* Title */}
            <h3
              className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight text-left mb-6 sm:mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {rightCard.title || 'A Complete Dermatology Experience'}
            </h3>

            {/* 5 Circular Badges Row */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 items-start justify-items-center w-full">
              {badgesData.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col items-center text-center w-full max-w-[96px] group"
                >
                  {/* Circular Outline Badge */}
                  <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full border-[1.5px] border-[#8DB92E] bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {b.renderIcon()}
                  </div>

                  {/* 2-Line Centered Label */}
                  <div className="flex flex-col items-center justify-center text-center mt-2.5 leading-[1.2]">
                    <span className="text-[10px] sm:text-[11.5px] font-semibold text-slate-800 tracking-tight text-center">
                      {b.line1}
                    </span>
                    {b.line2 && (
                      <span className="text-[10px] sm:text-[11.5px] font-semibold text-slate-800 tracking-tight text-center">
                        {b.line2}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DermatologyExperienceSplit;
