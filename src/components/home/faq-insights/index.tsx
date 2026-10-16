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
      className={`relative w-full overflow-hidden site-section site-section-last bg-white px-0 ${className}`}
    >
      <div className="w-full box-border site-container">
        {/* Responsive Flex Container (Zero Margins, Pure Flex Gap) */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-16 w-full">
          {/* Left Column: Frequently Asked Questions (Accordion) */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <FaqAccordion
              headline={activeConfig.faqHeadline}
              items={activeConfig.faqItems}
            />
          </div>

          {/* Right Column: Health Insights & Resources */}
          <div className="w-full lg:w-[58%] flex flex-col">
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
