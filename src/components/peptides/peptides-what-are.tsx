import React from 'react';
import { PeptidesWhatAreConfig, PeptideHighlightCardItem } from '@/types/peptides-page';
import { defaultPeptidesWhatAreConfig } from '@/constants/peptides-page';

export interface PeptidesWhatAreProps {
  config?: Partial<PeptidesWhatAreConfig>;
  className?: string;
}

export function PeptidesWhatAre({ config, className = '' }: PeptidesWhatAreProps) {
  const activeConfig: PeptidesWhatAreConfig = {
    ...defaultPeptidesWhatAreConfig,
    ...config,
  };

  const renderCardIcon = (item: PeptideHighlightCardItem) => {
    if (item.renderIcon) {
      return item.renderIcon();
    }

    switch (item.iconName) {
      case 'lightning':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
          </svg>
        );
      case 'grid':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <line x1="12" y1="2" x2="12" y2="3.5" />
            <line x1="4.93" y1="4.93" x2="6" y2="6" />
            <line x1="19.07" y1="4.93" x2="18" y2="6" />
          </svg>
        );
      case 'plus':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        );
      case 'pulse':
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="7 12 10 12 12 15 14 9 16 12 17 12" />
          </svg>
        );
    }
  };

  return (
    <section
      aria-label="What Are Peptides"
      className={`w-full bg-[#F2F8FD] py-12 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14 w-full">
          {/* Left Column: Title & Description */}
          <div className="flex flex-col items-start text-left w-full lg:w-[40%] xl:w-[36%] shrink-0 gap-3 sm:gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.title}
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#4A607A] leading-relaxed font-normal">
              {activeConfig.description}
            </p>
          </div>

          {/* Right Column: 5 Highlight Cards */}
          <div className="w-full lg:w-[60%] xl:w-[64%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 xl:gap-3.5">
            {activeConfig.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start text-center p-3.5 sm:p-4 rounded-2xl bg-white/35 border border-[#DCEAF6]/80 backdrop-blur-[2px] transition-all duration-200 hover:bg-white/70 hover:shadow-xs group min-h-[145px]"
              >
                {/* White Solid Circle Badge */}
                <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 mb-3 group-hover:scale-105 transition-transform duration-200">
                  {renderCardIcon(item)}
                </div>

                {/* Card Title */}
                <h4 className="text-[12px] sm:text-[13px] font-bold text-[#0E4A72] tracking-tight leading-tight mb-1">
                  {item.title}
                </h4>

                {/* Subtitle Lines */}
                <p className="text-[10.5px] sm:text-[11.5px] text-[#526E86] leading-[1.25] text-center font-medium">
                  {item.subtitle}
                  {item.subtitleLine2 && (
                    <>
                      <br />
                      {item.subtitleLine2}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeptidesWhatAre;
