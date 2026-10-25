'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  footerConfig as defaultFooterConfig,
  routePreFooterConfigs,
} from '@/constants/footer';
import { FooterConfig, PreFooterCtaConfig } from '@/types/footer';
import { PreFooterCTA } from './pre-footer-cta';
import { FooterBrand } from './footer-brand';
import { FooterNavColumn } from './footer-nav-column';
import { FooterNewsletter } from './footer-newsletter';
import { FooterBottomBar } from './footer-bottom-bar';
import { Container } from '@/components/ui';

export interface FooterProps {
  /**
   * Conditionally show or hide the Pre-Footer CTA banner.
   * Defaults to true.
   */
  showPreFooter?: boolean;
  /**
   * Optional overrides for the Pre-Footer CTA banner content and links.
   */
  preFooterConfig?: Partial<PreFooterCtaConfig>;
  /**
   * Optional custom config overrides for the entire footer.
   */
  config?: Partial<FooterConfig>;
  /**
   * Additional CSS classes for the root container.
   */
  className?: string;
}

export function Footer({
  showPreFooter = true,
  preFooterConfig,
  config,
  className = '',
}: FooterProps) {
  const pathname = usePathname();
  const routeCta = pathname ? routePreFooterConfigs[pathname] : undefined;

  // Merge full configuration cleanly with route-level and custom prop overrides
  const activeConfig: FooterConfig = {
    ...defaultFooterConfig,
    ...config,
    brand: { ...defaultFooterConfig.brand, ...config?.brand },
    newsletter: { ...defaultFooterConfig.newsletter, ...config?.newsletter },
    bottomBar: { ...defaultFooterConfig.bottomBar, ...config?.bottomBar },
    navigationSections: config?.navigationSections || defaultFooterConfig.navigationSections,
    preFooter: {
      ...defaultFooterConfig.preFooter,
      ...(routeCta ? { secondaryButton: undefined, ...routeCta } : {}),
      ...config?.preFooter,
      ...preFooterConfig,
    },
  };

  return (
    <footer suppressHydrationWarning className={`w-full ${className}`}>
      {/* 1. Conditional Pre-Footer CTA Banner Section */}
      {showPreFooter && <PreFooterCTA config={activeConfig.preFooter} />}

      {/* 2. Main Footer Content */}
      <div suppressHydrationWarning className="bg-white border-t border-slate-200 w-full">
        <div suppressHydrationWarning className="w-full box-border site-container pt-[var(--section-padding-y)] flex flex-col gap-10 lg:gap-12">
          {/* Responsive Multi-Column Flex Row (Zero Margins, Pure Flex Gap) */}
          <div suppressHydrationWarning className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-start justify-between gap-8 lg:gap-10 w-full">
            {/* Brand Column (Wider branding column) */}
            <div suppressHydrationWarning className="w-full md:w-[calc(50%-1rem)] lg:w-[30%] lg:flex-[2] flex flex-col">
              <FooterBrand
                name={activeConfig.brand.name}
                logoSrc={activeConfig.brand.logoSrc}
                description={activeConfig.brand.description}
                socials={activeConfig.brand.socials}
              />
            </div>

            {/* Dynamic Navigation Columns */}
            {activeConfig.navigationSections.map((section) => (
              <div key={section.title} suppressHydrationWarning className="w-full sm:w-[calc(50%-1rem)] md:w-auto lg:flex-1 flex flex-col">
                <FooterNavColumn section={section} />
              </div>
            ))}

            {/* Newsletter Subscription Column */}
            <div suppressHydrationWarning className="w-full md:w-[calc(50%-1rem)] lg:w-[25%] lg:flex-[1.6] flex flex-col">
              <FooterNewsletter config={activeConfig.newsletter} />
            </div>
          </div>

          {/* 3. Bottom Legal & Copyright Bar */}
          <FooterBottomBar bottomBar={activeConfig.bottomBar} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
