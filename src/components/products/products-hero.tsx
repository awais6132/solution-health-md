import React from 'react';
import Image from 'next/image';

interface ProductsHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
}

export function ProductsHero({
  badge = 'NATIONWIDE TELEHEALTH CARE PRODUCTS',
  title = 'All Products',
  description = 'Personalized healthcare from licensed providers, with convenient virtual access nationwide.',
  imageSrc = '/assets/images/all-products-hero.jpg',
}: ProductsHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 min-h-[320px] sm:min-h-[380px] lg:min-h-[430px] flex items-center border-b border-slate-100">
      {/* Background Banner Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        {/* Soft Left Gradient Overlay for crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-40% to-transparent sm:via-45% lg:via-42%" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full site-container py-12 sm:py-16 lg:py-20">
        <div className="max-w-xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 border border-[#4B9B44]/30 shadow-xs mb-4">
              <span className="text-[11px] sm:text-xs font-bold text-[#4B9B44] tracking-wide uppercase">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0E6C9B] tracking-tight leading-[1.1] mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
