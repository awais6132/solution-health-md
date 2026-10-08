import { FaqInsightsConfig } from '@/types/faq-insights';

export const defaultFaqInsightsConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'Do I need an existing prescription?',
      answer:
        'No prior prescription is required. Our licensed medical board conducts a comprehensive online consultation, evaluates your health background, and writes a legitimate prescription if clinically appropriate.',
    },
    {
      id: 'faq-2',
      question: 'How discreet is the packaging?',
      answer:
        'All orders are shipped in 100% plain, tamper-evident, unmarked boxes or bubble mailers with no mention of medications or clinical terms on the outside label.',
    },
    {
      id: 'faq-3',
      question: 'How does the subscription refill work?',
      answer:
        'Your recurring refills are automatically scheduled based on your personalized treatment plan. You will receive notifications before dispatch and can pause, adjust, or cancel anytime directly in your portal.',
    },
    {
      id: 'faq-4',
      question: 'Is my medical data protected under HIPAA?',
      answer:
        'Yes. We utilize end-to-end 256-bit bank-grade encryption, strictly comply with HIPAA regulations, and never sell or share your private health records with unauthorized third parties.',
    },
    {
      id: 'faq-5',
      question: 'Are telehealth consultations covered by insurance?',
      answer:
        'While our direct-to-patient memberships and medications are priced affordably for out-of-pocket access, we provide itemized superbills suitable for HSA, FSA, or insurance reimbursement.',
    },
    {
      id: 'faq-6',
      question: 'How quickly can I speak with a licensed clinician?',
      answer:
        'Same-day and next-day virtual visits are typically available. For on-demand urgent inquiries, our clinical triage team responds within hours through your secure patient messaging center.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'View All Articles →',
    href: '#articles',
  },
  articles: [
    {
      id: 'art-1',
      title: 'A Guide to GLP-1 Medications in 2026',
      slug: 'glp-1-medications-guide-2026',
      href: '#articles#glp-1-guide',
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Doctor discussing GLP-1 treatment plan',
      category: 'Weight Management',
      readTime: '4 min read',
    },
    {
      id: 'art-2',
      title: 'Hormone Health: Signs You May Be Imbalanced',
      slug: 'hormone-health-signs-imbalance',
      href: '#articles#hormone-health',
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'Patient reviewing hormone health metrics',
      category: 'Endocrinology',
      readTime: '5 min read',
    },
    {
      id: 'art-3',
      title: 'Mental Health in a Busy World',
      slug: 'mental-health-busy-world',
      href: '#articles#mental-health',
      imageUrl: '/assets/images/articles/mental-health.jpg',
      alt: 'Doctors consulting with patient on mental health',
      category: 'Mental Wellness',
      readTime: '3 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-1',
    title: 'A Guide to GLP-1 Medications in 2026',
    slug: 'advanced-clinical-dermatology-glp1-2026',
    href: '#articles#featured-care',
    imageUrl: '/assets/images/articles/dermatology-featured.jpg',
    alt: 'Advanced clinical dermatology and wellness procedure',
    category: 'Featured Clinical Guide',
    readTime: '6 min read',
  },
};
