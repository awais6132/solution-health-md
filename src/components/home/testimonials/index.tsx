import React from 'react';
import { defaultTestimonialsConfig } from '@/constants/testimonials';
import { TestimonialsSectionProps } from '@/types/testimonials';
import { TestimonialsHeader } from './testimonials-header';
import { TestimonialCard } from './testimonial-card';

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultTestimonialsConfig,
    ...config,
  };

  return (
    <section
      aria-label="Patient Testimonials and Real Results"
      className={`relative w-full overflow-hidden site-section site-section-both bg-[#EFF6F9] px-0 ${className}`}
    >
      <div className="w-full box-border site-container flex flex-col gap-[30px]">
        {/* Top Header */}
        <TestimonialsHeader
          headline={activeConfig.headline}
          description={activeConfig.description}
          viewAllLink={activeConfig.viewAllLink}
        />

        {/* 3-Column Responsive Flex Row (Zero Margins, Pure Flex Gap) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
          {activeConfig.testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} className="flex-1 w-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
export * from './testimonials-header';
export * from './testimonial-card';
