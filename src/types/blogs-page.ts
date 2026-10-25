export interface BlogPost {
  id: string;
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  readTime?: string;
}

export interface BlogSidebarArticle {
  id: string;
  href: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
}

export interface BlogsPageConfig {
  headline: string;
  posts: BlogPost[];
  sidebarArticles: BlogSidebarArticle[];
  categories: string[];
}

/* ─── Single Article types ─── */
export type ArticleBlockType =
  | 'paragraph'
  | 'heading'
  | 'bullet-list'
  | 'numbered-list'
  | 'link';

export interface ArticleBlock {
  type: ArticleBlockType;
  heading?: string;          // used when type === 'heading'
  text?: string;             // used for paragraph / link
  href?: string;             // used when type === 'link'
  items?: string[];          // used for bullet-list / numbered-list
}

export interface FullBlogArticle extends BlogPost {
  body: ArticleBlock[];
}

export interface BlogArticlePageConfig {
  article: FullBlogArticle;
  sidebarArticles: BlogSidebarArticle[];
}
