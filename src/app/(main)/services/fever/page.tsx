import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import {
  TreatmentMosaicGrid,
  FeverClinicalGuide,
} from '@/components/fever';
import {
  defaultFeverHeroConfig,
  defaultFeverMosaicConfig,
  defaultFeverClinicalGuideConfig,
} from '@/constants/fever-page';

export const metadata: Metadata = {
  title: 'Smart & Fast Care for Fever Anytime, Anywhere | Solutions Health MD',
  description:
    'Our online fever treatment service connects you with licensed doctors who diagnose, monitor, and treat fever-related conditions remotely.',
};

export default function FeverServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner (Reusing ServicesHero Component) */}
      <ServicesHero config={defaultFeverHeroConfig} />

      {/* 2. Bento Mosaic Grid: "Online Fever Treatment Right For You?" */}
      <TreatmentMosaicGrid config={defaultFeverMosaicConfig} />

      {/* 3. Medical Clinical Guide & Treatment Protocols */}
      <FeverClinicalGuide config={defaultFeverClinicalGuideConfig} />
    </div>
  );
}
