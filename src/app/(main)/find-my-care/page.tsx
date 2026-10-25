import React from 'react';
import type { Metadata } from 'next';
import { IntakeFlow } from '@/components/intake';
import { defaultIntakeConfig } from '@/constants/intake-page';

export const metadata: Metadata = {
  title: 'Patient Intake & Medical Assessment | Solutions Health MD',
  description:
    'Complete your registration and medical assessment with Solutions Health MD to connect with certified telehealth clinicians.',
};

export default function FindMyCarePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <IntakeFlow config={defaultIntakeConfig} />
    </div>
  );
}
