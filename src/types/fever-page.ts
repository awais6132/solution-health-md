import React from 'react';

/**
 * Section 2: Treatment Mosaic Bento Grid Types
 */
export type MosaicItemType = 'image' | 'card';

export interface MosaicCardItem {
  id: string;
  type: 'card';
  title: string;
  description: string;
  iconName: 'shield' | 'sparkles' | 'leaf' | 'shield-plus' | 'virus' | 'clock-hand' | string;
}

export interface MosaicImageItem {
  id: string;
  type: 'image';
  imageSrc: string;
  imageAlt: string;
}

export type MosaicGridItem = MosaicCardItem | MosaicImageItem;

export interface TreatmentMosaicConfig {
  eyebrow?: string;
  headline: string;
  items: MosaicGridItem[];
}

export interface TreatmentMosaicGridProps {
  config?: Partial<TreatmentMosaicConfig>;
  className?: string;
}

/**
 * Section 3: Medical Clinical Guide & Treatment Protocols Types
 */
export interface ClinicalTreatmentCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface FeverClinicalGuideConfig {
  whatIsFever: {
    title: string;
    subtitle: string;
    description: string;
    patientDeliverablesTitle: string;
    patientDeliverables: string[];
    closingNote: string;
  };
  diagnosisAndTreatment: {
    title: string;
    subtitle: string;
    intro: string;
    categories: ClinicalTreatmentCategory[];
    referralNote: string;
  };
  symptoms: {
    title: string;
    intro: string;
    commonSymptoms: string[];
    urgentAttentionTitle: string;
    urgentSymptoms: string[];
  };
}

export interface FeverClinicalGuideProps {
  config?: Partial<FeverClinicalGuideConfig>;
  className?: string;
}
