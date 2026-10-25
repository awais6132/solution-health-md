import { TestimonialsConfig } from '@/types/testimonials';
import { ROUTES } from './routes';

export const defaultTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are living healthier, happier lives.',
  viewAllLink: {
    label: 'View More Stories →',
    href: `${ROUTES.SERVICES || '/services'}#reviews`,
  },
  testimonials: [
    {
      id: '1',
      rating: 5,
      verified: true,
      quote:
        '“The GLP-1 program completely eliminated food noise. My physician guided me through dosage adjustments without any friction.”',
      patientName: 'Marcus T.',
      location: 'Dallas, TX',
      treatment: 'Semaglutide Protocol',
      metricValue: '-38 lbs',
      metricLabel: 'in 5 Months',
    },
    {
      id: '2',
      rating: 5,
      verified: true,
      quote:
        '“Finding a doctor who actually listens to hormone symptoms was a game changer. The home lab kit made baseline checks so effortless.”',
      patientName: 'Jason B.',
      location: 'Phoenix, AZ',
      treatment: 'TRT Protocol',
      metricValue: '+45%',
      metricLabel: 'Energy Recovery',
    },
    {
      id: '3',
      rating: 5,
      verified: true,
      quote:
        '“The NAD+ and dermatological formula arrived chilled and professionally packed. My skin tone improved visibly in just 4 weeks.”',
      patientName: 'Elena R.',
      location: 'Miami, FL',
      treatment: 'NAD+ & Rx Derma',
      metricValue: '100%',
      metricLabel: 'Satisfaction',
    },
    {
      id: '4',
      rating: 5,
      verified: true,
      quote:
        '“The faith-centered counseling helped me work through anxiety with Biblical principles. It is rare to find healthcare that genuinely cares for the soul.”',
      patientName: 'Sarah M.',
      location: 'Nashville, TN',
      treatment: 'Christian Counseling',
      metricValue: '98%',
      metricLabel: 'Life Clarity',
    },
    {
      id: '5',
      rating: 5,
      verified: true,
      quote:
        '“Immediate virtual care saved me an ER trip on a Sunday night. The clinician listened carefully and my prescription was ready within an hour.”',
      patientName: 'David K.',
      location: 'Chicago, IL',
      treatment: 'Urgent Telehealth',
      metricValue: '< 15 min',
      metricLabel: 'Wait Time',
    },
    {
      id: '6',
      rating: 5,
      verified: true,
      quote:
        '“Managing our family’s direct primary care memberships in the app is seamless. Transparent pricing, no hidden fees, and exceptional doctors.”',
      patientName: 'Amanda W.',
      location: 'Atlanta, GA',
      treatment: 'Family Primary Care',
      metricValue: '5.0 / 5',
      metricLabel: 'Care Rating',
    },
  ],
};
