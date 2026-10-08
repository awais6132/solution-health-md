export interface TestimonialItem {
  id: string;
  rating: number;
  verified: boolean;
  quote: string;
  patientName: string;
  location: string;
  treatment: string;
  metricValue: string;
  metricLabel: string;
}

export interface TestimonialsConfig {
  headline: string;
  description: string;
  viewAllLink: {
    label: string;
    href: string;
  };
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  config?: Partial<TestimonialsConfig>;
  className?: string;
}
