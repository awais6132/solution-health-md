import React from 'react';
import { footerConfig as defaultFooterConfig } from '@/constants/footer';
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
  // Merge full configuration cleanly
  const activeConfig: FooterConfig = {
    ...defaultFooterConfig,
    ...config,
    brand: { ...defaultFooterConfig.brand, ...config?.brand },
    newsletter: { ...defaultFooterConfig.newsletter, ...config?.newsletter },
    bottomBar: { ...defaultFooterConfig.bottomBar, ...config?.bottomBar },
    navigationSections: config?.navigationSections || defaultFooterConfig.navigationSections,
    preFooter: {
      ...defaultFooterConfig.preFooter,
      ...config?.preFooter,
      ...preFooterConfig,
    },
  };

  return (
    <footer className={`w-full ${className}`}>
      {/* 1. Conditional Pre-Footer CTA Banner Section */}
      {showPreFooter && <PreFooterCTA config={activeConfig.preFooter} />}

      {/* 2. Main Footer Content */}
      <div className="bg-white border-t border-slate-200">
        <Container className="pt-14 pb-8">
          {/* Responsive Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
            {/* Brand Column (Col Span 2) */}
            <div className="lg:col-span-2">
              <FooterBrand
                name={activeConfig.brand.name}
                logoSrc={activeConfig.brand.logoSrc}
                description={activeConfig.brand.description}
                socials={activeConfig.brand.socials}
              />
            </div>

            {/* Dynamic Navigation Columns (Col Span 1 each) */}
            {activeConfig.navigationSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <FooterNavColumn section={section} />
              </div>
            ))}

            {/* Newsletter Subscription Column (Col Span 1 on 6-col grid) */}
            <div className="lg:col-span-1">
              <FooterNewsletter config={activeConfig.newsletter} />
            </div>
          </div>

          {/* 3. Bottom Legal & Copyright Bar */}
          <FooterBottomBar bottomBar={activeConfig.bottomBar} />
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
