import React from 'react';
import { defaultFaqInsightsConfig } from '@/constants/faq-insights';
import { FaqInsightsSectionProps } from '@/types/faq-insights';
import { FaqAccordion } from './faq-accordion';
import { InsightsShowcase } from './insights-showcase';

export const FaqInsightsSection: React.FC<FaqInsightsSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultFaqInsightsConfig,
    ...config,
  };

  return (
    <section
      id="faqs-and-insights"
      aria-label="Frequently Asked Questions and Health Insights"
      className={`relative w-full max-w-full overflow-hidden overflow-x-hidden py-16 sm:py-20 lg:py-24 bg-white ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Frequently Asked Questions (Accordion) */}
          <div className="lg:col-span-5 w-full">
            <FaqAccordion
              headline={activeConfig.faqHeadline}
              items={activeConfig.faqItems}
            />
          </div>

          {/* Right Column: Health Insights & Resources */}
          <div className="lg:col-span-7 w-full">
            <InsightsShowcase
              headline={activeConfig.insightsHeadline}
              viewAllLink={activeConfig.insightsViewAllLink}
              articles={activeConfig.articles}
              featuredArticle={activeConfig.featuredArticle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqInsightsSection;
export * from './faq-accordion';
export * from './article-card';
export * from './featured-article-card';
export * from './insights-showcase';
