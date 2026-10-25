import React from 'react';
import type { Metadata } from 'next';
import {
  ServicesHero,
  ServicesGrid,
  SimpleProcessBanner,
} from '@/components/services';
import { TestimonialsSection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Our Services | Solutions Health MD',
  description:
    'Comprehensive healthcare tailored to your unique needs. Virtual, in-person, and faith-based healthcare designed around the whole you.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Services Hero Banner */}
      <ServicesHero />

      {/* 2. Detailed 2-Column Services Grid (10 Treatment Categories) */}
      <ServicesGrid />

      {/* 3. Simple Process Scenic Sunset Banner (3 Steps) */}
      <SimpleProcessBanner />

      {/* 4. Social Proof & Patient Results (Reused from Home Page) */}
      <TestimonialsSection />
    </div>
  );
}
