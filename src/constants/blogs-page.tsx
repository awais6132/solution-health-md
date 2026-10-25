import React from 'react';
import { ServicesHeroConfig } from '@/types/services-page';
import { BlogsPageConfig, FullBlogArticle, BlogArticlePageConfig } from '@/types/blogs-page';
import { ROUTES } from './routes';

/* ─────────────────────────────────────────────
   1. Hero Banner  (reuses ServicesHero)
───────────────────────────────────────────── */
export const defaultBlogsHeroConfig: ServicesHeroConfig = {
  badge: 'INSIGHTS',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Solutions Health MD</span>
      <span className="text-[#4B9B44] block">Latest Blogs &amp; Insights</span>
    </>
  ),
  description:
    'Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of all the latest trends.',
  imageSrc: '/assets/images/nurse portrait.jpg',
  imageAlt: 'Solutions Health MD Blogs & Insights',
  imagePosition: '60% center',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/85 via-30% to-transparent w-full md:w-[55%] lg:w-[50%]',
};

/* ─────────────────────────────────────────────
   2. Blog Grid + Sidebar
───────────────────────────────────────────── */
export const defaultBlogsPageConfig: BlogsPageConfig = {
  headline: 'Latest Blogs & Insights',
  categories: [
    'Latest',
    'Weight Management',
    'Hormone Health',
    'Mental Wellness',
    'Dermatology',
    'Urgent Care',
    'Peptides & Longevity',
  ],
  posts: [
    {
      id: 'post-1',
      slug: 'risk-of-lead-exposure-brain-volume',
      href: `${ROUTES.SERVICES}#weight-loss`,
      title: 'Risk of Lead Exposure Linked to Decreased Brain Volume',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      date: 'Jun 24, 2020',
      category: 'Weight Management',
      imageSrc: '/assets/images/articles/glp1-guide.jpg',
      imageAlt: 'Risk of lead exposure linked to decreased brain volume',
      readTime: '4 min read',
    },
    {
      id: 'post-2',
      slug: 'endoscopic-minimal-scarring-method',
      href: `${ROUTES.SERVICES}#dermatology`,
      title: 'An Endoscopic, Minimal Scarring Method Developed',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      date: 'Jun 24, 2020',
      category: 'Dermatology',
      imageSrc: '/assets/images/articles/dermatology-featured.jpg',
      imageAlt: 'An endoscopic minimal scarring method developed',
      readTime: '5 min read',
    },
    {
      id: 'post-3',
      slug: 'when-cancer-diagnosis-predicts-good-health',
      href: `${ROUTES.SERVICES}#mental-health`,
      title: 'When a cancer diagnosis predicts future good health',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      date: 'Jun 24, 2020',
      category: 'Mental Wellness',
      imageSrc: '/assets/images/articles/mental-health.jpg',
      imageAlt: 'Cancer diagnosis and future health predictions',
      readTime: '3 min read',
    },
    {
      id: 'post-4',
      slug: 'risk-of-lead-exposure-2',
      href: `${ROUTES.SERVICES}#urgent-care`,
      title: 'Risk of Lead Exposure Linked to Decreased Brain Volume',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      date: 'Jun 24, 2020',
      category: 'Urgent Care',
      imageSrc: '/assets/images/articles/hormone-health.jpg',
      imageAlt: 'Risk of lead exposure and brain health',
      readTime: '4 min read',
    },
  ],
  sidebarArticles: [
    {
      id: 'side-1',
      href: `${ROUTES.SERVICES}#weight-loss`,
      title: 'A Guide to GLP-1 Medications in 2026',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      imageSrc: '/assets/images/articles/glp1-guide.jpg',
      imageAlt: 'Guide to GLP-1 medications',
    },
    {
      id: 'side-2',
      href: `${ROUTES.SERVICES}#womens-health`,
      title: 'Hormone Health: Signs You May Be Imbalanced',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      imageSrc: '/assets/images/articles/hormone-health.jpg',
      imageAlt: 'Hormone health signs of imbalance',
    },
    {
      id: 'side-3',
      href: `${ROUTES.SERVICES}#mental-health`,
      title: 'Mental Health in a Busy World',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
      imageSrc: '/assets/images/articles/mental-health.jpg',
      imageAlt: 'Mental health in a busy world',
    },
  ],
};

/* ─────────────────────────────────────────────
   3. Full Blog Articles (single post data)
───────────────────────────────────────────── */
const glp1Article: FullBlogArticle = {
  id: 'post-1',
  slug: 'glp-1-medications-guide-2026',
  href: '/blogs/glp-1-medications-guide-2026',
  title: 'A Guide to GLP-1 Medications in 2026',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
  date: 'Jun 24, 2020',
  category: 'Weight Management',
  imageSrc: '/assets/images/articles/glp1-guide.jpg',
  imageAlt: 'A Guide to GLP-1 Medications in 2026',
  readTime: '4 min read',
  body: [
    {
      type: 'heading',
      heading: 'What Are GLP-1 Medications?',
    },
    {
      type: 'paragraph',
      text: 'GLP-1 medications are a prescription treatments that mimic the activity of a naturally occurring hormone called glucagon-like peptide 1. They can influence appetite, digestion, blood sugar regulation, and feelings of fullness.',
    },
    {
      type: 'paragraph',
      text: 'Some GLP-1-based medications are used to manage type 2 diabetes, while certain medications in this class are also approved for chronic weight management in eligible patients. Because these medications can have different indications, doses, and safety considerations, treatment should always be determined with a qualified healthcare professional.',
    },
    {
      type: 'heading',
      heading: 'How Do GLP-1 Medications Work?',
    },
    {
      type: 'paragraph',
      text: 'GLP-1 medications can affect several processes involved in blood sugar and appetite regulation. They may:',
    },
    {
      type: 'bullet-list',
      items: [
        'Help regulate blood glucose levels',
        'Slow the movement of food through the stomach',
        'Increase feelings of fullness after eating',
        'Reduce appetite in some patients',
        'Support weight management when combined with appropriate lifestyle changes',
      ],
    },
    {
      type: 'paragraph',
      text: 'The response can vary from person to person, so your healthcare provider may adjust your treatment based on your health history and goals.',
    },
    {
      type: 'heading',
      heading: 'Who May Be a Candidate?',
    },
    {
      type: 'paragraph',
      text: 'GLP-1 treatment isn\'t appropriate for everyone. A healthcare provider may consider factors such as:',
    },
    {
      type: 'numbered-list',
      items: [
        'Current weight and health stats',
        'Blood sugar levels and diabetes history',
        'Existing medical conditions',
        'Current medications',
        'Previous weight-management efforts',
        'Potential risks and contraindications',
        'Individual treatment goals',
      ],
    },
    {
      type: 'paragraph',
      text: 'A medical evaluation is important before starting any prescription weight management medication.',
    },
    {
      type: 'link',
      text: 'Lorem ipsum Simply dummy text of the printing and typesetting industry. Lorem A',
      href: `${ROUTES.SIGNUP}?service=weight-loss`,
    },
  ],
};

const hormoneArticle: FullBlogArticle = {
  id: 'post-2',
  slug: 'hormone-health-signs-imbalance',
  href: '/blogs/hormone-health-signs-imbalance',
  title: 'Hormone Health: Signs You May Be Imbalanced',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
  date: 'Jun 24, 2020',
  category: 'Hormone Health',
  imageSrc: '/assets/images/articles/hormone-health.jpg',
  imageAlt: 'Hormone Health: Signs You May Be Imbalanced',
  readTime: '5 min read',
  body: [
    {
      type: 'heading',
      heading: 'Understanding Hormone Imbalance',
    },
    {
      type: 'paragraph',
      text: 'Hormones act as chemical messengers in the body, regulating nearly every major system — from metabolism and mood to reproductive health and sleep cycles. When hormones fall out of balance, even slightly, the effects can ripple across multiple areas of your health.',
    },
    {
      type: 'heading',
      heading: 'Common Signs of Imbalance',
    },
    {
      type: 'bullet-list',
      items: [
        'Persistent fatigue despite adequate sleep',
        'Unexplained weight gain or difficulty losing weight',
        'Mood swings, anxiety, or depression',
        'Low libido or sexual dysfunction',
        'Brain fog and memory issues',
        'Irregular menstrual cycles',
        'Hair thinning or skin changes',
      ],
    },
    {
      type: 'paragraph',
      text: 'These symptoms can overlap with many other conditions, which is why a proper hormonal panel and clinical evaluation are essential before initiating any treatment.',
    },
    {
      type: 'link',
      text: 'Book a hormone health consultation today →',
      href: `${ROUTES.SIGNUP}?service=womens-health`,
    },
  ],
};

const mentalHealthArticle: FullBlogArticle = {
  id: 'post-3',
  slug: 'mental-health-busy-world',
  href: '/blogs/mental-health-busy-world',
  title: 'Mental Health in a Busy World',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt egestas.',
  date: 'Jun 24, 2020',
  category: 'Mental Wellness',
  imageSrc: '/assets/images/articles/mental-health.jpg',
  imageAlt: 'Mental Health in a Busy World',
  readTime: '3 min read',
  body: [
    {
      type: 'heading',
      heading: 'Why Mental Health Matters More Than Ever',
    },
    {
      type: 'paragraph',
      text: 'Modern life moves at an unprecedented pace. With constant connectivity, workplace demands, and social pressures, mental health challenges are rising across all age groups. Recognizing the signs early is the first step toward meaningful recovery.',
    },
    {
      type: 'heading',
      heading: 'Practical Steps You Can Take',
    },
    {
      type: 'numbered-list',
      items: [
        'Set boundaries around work hours and screen time',
        'Practice daily mindfulness or meditation',
        'Maintain regular physical activity',
        'Prioritize sleep hygiene',
        'Seek professional support when needed',
      ],
    },
    {
      type: 'paragraph',
      text: 'At Solutions Health MD, we offer compassionate, faith-integrated mental health support — available virtually, on your schedule.',
    },
    {
      type: 'link',
      text: 'Connect with a mental health provider →',
      href: `${ROUTES.SIGNUP}?service=mental-health`,
    },
  ],
};

/* Article lookup map — keyed by slug */
export const ARTICLE_MAP: Record<string, FullBlogArticle> = {
  'glp-1-medications-guide-2026': glp1Article,
  'hormone-health-signs-imbalance': hormoneArticle,
  'mental-health-busy-world': mentalHealthArticle,
};

/* Per-article hero config factory */
export function getArticleHeroConfig(article: FullBlogArticle): ServicesHeroConfig {
  return {
    badge: 'BLOGS & INSIGHTS',
    title: (
      <>
        <span className="text-[#0E6C9B]">{article.title.split(' ').slice(0, 2).join(' ')} </span>
        <span className="text-[#4B9B44]">{article.title.split(' ').slice(2).join(' ')}</span>
      </>
    ),
    description: article.excerpt,
    imageSrc: article.imageSrc,
    imageAlt: article.imageAlt,
    imagePosition: '60% center',
    imageAlign: 'full',
    overlayGradient:
      'bg-gradient-to-r from-white via-white/88 via-28% to-transparent w-full md:w-[55%] lg:w-[50%]',
  };
}

/* Default article page sidebar (recent articles) */
export const defaultArticleSidebarArticles = defaultBlogsPageConfig.sidebarArticles;
