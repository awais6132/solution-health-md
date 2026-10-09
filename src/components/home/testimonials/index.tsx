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
      className={`relative w-full max-w-full overflow-hidden overflow-x-hidden py-16 sm:py-20 lg:py-24 bg-[#EFF6F9] ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        {/* Top Header */}
        <TestimonialsHeader
          headline={activeConfig.headline}
          description={activeConfig.description}
          viewAllLink={activeConfig.viewAllLink}
        />

        {/* 3-Column Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {activeConfig.testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
export * from './testimonials-header';
export * from './testimonial-card';
