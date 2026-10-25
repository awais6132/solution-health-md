import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { MentalHealthServicesGridConfig } from '@/types/mental-health-page';

interface MentalHealthServicesGridProps {
  config?: Partial<MentalHealthServicesGridConfig>;
  className?: string;
}

export const defaultServicesGridConfig: MentalHealthServicesGridConfig = {
  headline: 'Our Mental Health Counseling Services',
  subheadline: 'Professional, faith-based support tailored to your unique journey.',
  services: [
    {
      id: 'individual-counseling',
      title: 'Individual Counseling',
      description:
        'One-on-one personalized clinical support navigating anxiety, depression, and personal life challenges.',
      imageSrc: '/assets/images/mh-individual-counseling.jpg',
      imageAlt: 'Individual Counseling Consultation',
      bullets: [
        'Anxiety and depression',
        'Grief, loss, and life change',
        'Identity and purpose',
        'Faith renewal and healing',
        'Personal self-worth',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'couples-counseling',
      title: 'Couples Counseling',
      description:
        'Strengthen communication, resolve conflicts, and rebuild intimacy through biblical principles.',
      imageSrc: '/assets/images/mh-couples-counseling.jpg',
      imageAlt: 'Couples Counseling and Marriage Healing',
      bullets: [
        'Marital communication',
        'Conflict resolution',
        'Trust restoration',
        'Premarital preparation',
        'Biblical framework for marriage',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'adolescent-counseling',
      title: 'Adolescent Counseling',
      description:
        'Empowering young people with tools to navigate identity, peer pressures, and emotional growth.',
      imageSrc: '/assets/images/mh-adolescent-counseling.jpg',
      imageAlt: 'Adolescent and Teen Counseling',
      bullets: [
        'Anxiety and stress',
        'School and social challenges',
        'Identity and self-worth',
        'Family communication',
        'Faith and spiritual questions',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'life-faith-counseling',
      title: 'Life & Faith Counseling',
      description:
        'Navigate major life transitions, vocational discernment, and spiritual renewal with wisdom.',
      imageSrc: '/assets/images/mh-life-faith-counseling.jpg',
      imageAlt: 'Life Transitions and Spiritual Mentorship',
      bullets: [
        'Career and life purpose',
        'Spiritual burnout',
        'Navigating grief & loss',
        'Spiritual discernment',
        'Pastoral care and mentorship',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
  ],
};

export function MentalHealthServicesGrid({
  config,
  className = '',
}: MentalHealthServicesGridProps) {
  const activeConfig = {
    ...defaultServicesGridConfig,
    ...config,
  };

  return (
    <section
      id="counseling-services"
      aria-label="Our Mental Health Counseling Services"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 text-left">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full items-stretch">
          {activeConfig.services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Top Details */}
              <div className="flex flex-col">
                {/* Photo Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 select-none border border-slate-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Card Title */}
                <h3
                  className="text-base sm:text-[17px] font-bold text-[#0E6C9B] leading-tight mb-2 text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal mb-3 text-left">
                  {item.description}
                </p>

                {/* Checkmark Bullets List */}
                <ul className="flex flex-col gap-2 mb-5 text-left">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#4B9B44] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      <span className="text-xs sm:text-[12.5px] font-medium text-slate-700">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-2 w-full">
                <Link
                  href={item.ctaHref || ROUTES.FIND_MY_CARE}
                  className="w-full py-2.5 rounded-full btn-animated-gradient-success text-white font-semibold text-xs sm:text-sm text-center shadow-xs cursor-pointer block select-none hover:opacity-95 transition-opacity"
                >
                  {item.ctaLabel || 'Get Started →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentalHealthServicesGrid;
