import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import {
  TreatmentMosaicConfig,
  FeverClinicalGuideConfig,
} from '@/types/fever-page';

/**
 * 1. Hero Banner Configuration (Reuses ServicesHero Component)
 * Exact match to Figma design
 */
export const defaultFeverHeroConfig: ServicesHeroConfig = {
  badge: 'FEVER',
  title: (
    <>
      <span className="text-[#0E6C9B] block md:whitespace-nowrap">
        Smart & Fast Care for Fever
      </span>
      <span className="text-[#4B9B44] block md:whitespace-nowrap">
        Anytime, Anywhere
      </span>
    </>
  ),
  description:
    'Our online fever treatment service connects you with licensed doctors who diagnose, monitor, and treat fever-related conditions remotely.',
  primaryCta: {
    label: 'Find My Care →',
    href: `${ROUTES.SIGNUP}?service=fever`,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#fever-clinical-guide',
  },
  imageSrc: '/assets/images/fever-hero-banner.jpg',
  imageAlt: 'Smart & Fast Care for Fever Anytime, Anywhere',
  imagePosition: '48% 15%',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/80 via-28% to-transparent w-full md:w-[48%] lg:w-[42%]',
};

/**
 * 2. Treatment Mosaic Bento Grid Configuration
 * 3x2 Alternating Layout: Photo / Text / Photo and Text / Photo / Text
 */
export const defaultFeverMosaicConfig: TreatmentMosaicConfig = {
  eyebrow: 'URGENT CARE',
  headline: 'Online Fever Treatment Right For You?',
  items: [
    // Row 1
    {
      id: 'mosaic-item-1',
      type: 'image',
      imageSrc: '/assets/images/fever-consultation.png',
      imageAlt: 'Doctor consulting patient with clinical clipboard on sofa',
    },
    {
      id: 'mosaic-item-2',
      type: 'card',
      title: 'Medication Support',
      description:
        'Helpful for patients needing antidepressants or seeking guidance on medication management remotely.Helpful for patients needing antidepressants or seeking guidance on medication. Helpful for patients needing antidepressants or seeking guidance on medication management .',
      iconName: 'shield-plus',
    },
    {
      id: 'mosaic-item-3',
      type: 'image',
      imageSrc: '/assets/images/fever-cloud-cart.png',
      imageAlt:
        'Secure digital healthcare cloud and online telemedicine prescription ordering',
    },

    // Row 2
    {
      id: 'mosaic-item-4',
      type: 'card',
      title: 'Physical & General Symptoms',
      description:
        'Ideal for those experiencing Stress & Anxiety, Mood Swings, Depression or Low Mood, Diabetes Burnout, Frustration & Guilt or or lack of motivation affecting daily life.',
      iconName: 'virus',
    },
    {
      id: 'mosaic-item-5',
      type: 'image',
      imageSrc: '/assets/images/fever-pharmacy-blister.png',
      imageAlt:
        'Pharmacist organizing foil blister medications in dispensary trays',
    },
    {
      id: 'mosaic-item-6',
      type: 'card',
      title: 'Convenience & Privacy',
      description:
        'Great for those who prefer discreet, at-home therapy with flexible scheduling and private video calls.Great for those who prefer discreet, at-home therapy with flexible scheduling and private video calls.Great for those who prefer discreet, at-home',
      iconName: 'clock-hand',
    },
  ],
};

/**
 * 3. Medical Clinical Guide & Treatment Protocols Configuration
 * Exact match to Figma design blocks (What is Fever, Diagnosis, Symptoms)
 */
export const defaultFeverClinicalGuideConfig: FeverClinicalGuideConfig = {
  whatIsFever: {
    title: 'What Is Fever?',
    subtitle: 'Accessible, Expert Care for Fever — Anytime, Anywhere',
    description:
      'Through TeleMedLive, fever can be evaluated and managed effectively, without an in-person visit. Clinicians assess your symptoms, medical history, and temperature patterns through secure video consultation. Most fevers are non-emergency, commonly caused by viral infections, seasonal flu, or mild bacterial conditions. During consultation, doctors screen for red-flag symptoms such as persistent high fever, severe dehydration, breathing difficulty, or confusion — ensuring urgent cases are referred for immediate in-person care.',
    patientDeliverablesTitle: 'Patients receive:',
    patientDeliverables: [
      'Personalized treatment plans',
      'Medical care guidance',
      'Hydration and recovery advice',
      'Lab test referrals (if required)',
    ],
    closingNote:
      'Follow-up consultations help track recovery and adjust treatment — making fever care simple, fast, and effective.',
  },
  diagnosisAndTreatment: {
    title: 'Fever Diagnosis & Treatment',
    subtitle: 'Personalized, Safe & Evidence-Based Care',
    intro:
      'TeleMedLive provides tailored treatment plans based on your symptoms and condition.',
    categories: [
      {
        title: 'Common Treatments Include:',
        icon: '💊',
        items: [
          'Fever reducers (e.g. Paracetamol, Ibuprofen)',
          'Hydration and electrolyte guidance',
          'Antibiotics (only if bacterial infection is confirmed)',
          'Antiviral support (if required)',
          'Rest and recovery planning',
        ],
      },
      {
        title: 'Additional Care Support:',
        icon: '🧪',
        items: [
          'Laboratory referrals (CBC, Dengue, Malaria, Typhoid)',
          'Monitoring of temperature trends',
          'Guidance for home care & isolation (if contagious)',
          'Follow-up video consultations',
        ],
      },
      {
        title: 'When Specialist Care Is Needed:',
        icon: '🚨',
        items: [
          'Persistent fever (>3 days)',
          'Very high temperature (above 103°F / 39°C)',
          'Severe weakness or dehydration',
          'Underlying chronic conditions',
        ],
      },
    ],
    referralNote:
      'Doctors may refer patients to hospital or specialists if necessary.',
  },
  symptoms: {
    title: 'Fever Symptoms',
    intro: 'Patients commonly report:',
    commonSymptoms: [
      'Elevated body temperature',
      'Chills or sweating',
      'Headache',
      'Muscle aches & fatigue',
      'Weakness or dizziness',
      'Loss of appetite',
      'Dehydration',
    ],
    urgentAttentionTitle: 'Symptoms Requiring Immediate Attention:',
    urgentSymptoms: [
      'Difficulty breathing',
      'Persistent vomiting',
      'Severe headache or confusion',
      'Skin rash or seizures',
    ],
  },
};
