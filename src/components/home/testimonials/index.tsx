'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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

  const items = activeConfig.testimonials || [];
  const itemCount = items.length;
  // Duplicate 3 times for seamless infinite circular loop: [Set 0, Set 1 (Active), Set 2]
  const extendedItems = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(itemCount);
  const [withTransition, setWithTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Viewport breakpoint detection (Mobile: 1, Tablet: 2, Desktop: 3)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When transition is disabled for seamless clone reset, re-enable on next frame
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => {
        setWithTransition(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  const handleNext = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Seamless boundary wrap when transition finishes
  const handleTransitionEnd = () => {
    if (currentIndex >= itemCount * 2) {
      // Reached Set 2 -> silently reset to Set 1 without animation
      setWithTransition(false);
      setCurrentIndex((prev) => prev - itemCount);
    } else if (currentIndex < itemCount) {
      // Reached Set 0 -> silently reset to Set 1 without animation
      setWithTransition(false);
      setCurrentIndex((prev) => prev + itemCount);
    }
  };

  // Ultra-smooth Continuous Auto-Play (every 3.8s, pauses on hover/touch)
  useEffect(() => {
    if (isPaused || itemCount === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, itemCount, handleNext]);

  // Touch Swipe Gesture Support for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Active dot indicator (0 to itemCount - 1)
  const activeDot = ((currentIndex % itemCount) + itemCount) % itemCount;

  const handleDotClick = (targetDot: number) => {
    setWithTransition(true);
    const diff = targetDot - activeDot;
    setCurrentIndex((prev) => prev + diff);
  };

  return (
    <section
      id="reviews"
      aria-label="Patient Testimonials and Real Results"
      className={`relative w-full overflow-hidden site-section site-section-both bg-[#EFF6F9] px-0 scroll-mt-20 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full box-border site-container flex flex-col gap-[30px]">
        {/* Top Header with Nav Controls */}
        <TestimonialsHeader
          headline={activeConfig.headline}
          description={activeConfig.description}
          viewAllLink={activeConfig.viewAllLink}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track with silky-smooth cubic-bezier glide */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex -mx-2.5 sm:-mx-3 will-change-transform"
            style={{
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              transition: withTransition
                ? 'transform 750ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
          >
            {extendedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 px-2.5 sm:px-3 box-border w-full md:w-1/2 lg:w-1/3 flex items-stretch select-none"
              >
                <TestimonialCard item={item} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {itemCount > 1 && (
          <div
            className="flex justify-center items-center gap-2 pt-2 select-none"
            role="tablist"
            aria-label="Testimonials pagination"
          >
            {Array.from({ length: itemCount }).map((_, idx) => {
              const isActive = idx === activeDot;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer border-none p-0 ${
                    isActive
                      ? 'w-7 h-2.5 bg-[#4B9B44] shadow-xs'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
export * from './testimonials-header';
export * from './testimonial-card';
