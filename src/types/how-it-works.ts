export interface HowItWorksStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  theme: 'blue' | 'green';
  borderColor?: string;
  textColor?: string;
}

export interface HowItWorksSectionConfig {
  headline: string;
  subheadline: string;
  steps: HowItWorksStep[];
}

export interface HowItWorksSectionProps {
  config?: Partial<HowItWorksSectionConfig>;
  className?: string;
}
