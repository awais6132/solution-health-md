export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  imageUrl: string;
  alt: string;
  category?: string;
  readTime?: string;
}

export interface FeaturedArticleItem extends ArticleItem {
  description?: string;
}

export interface FaqInsightsConfig {
  faqHeadline: string;
  faqItems: FAQItem[];
  insightsHeadline: string;
  insightsViewAllLink: {
    label: string;
    href: string;
  };
  articles: ArticleItem[];
  featuredArticle: FeaturedArticleItem;
}

export interface FaqInsightsSectionProps {
  config?: Partial<FaqInsightsConfig>;
  className?: string;
}
