export interface ProductCategory {
  id: string;
  label: string;
  subtitle?: string; // e.g. "(GLP-1)" or "(TRT)"
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string; // e.g. "Best Seller"
  rating: number; // e.g. 4.9
  reviewCount: number; // e.g. 312
  features: string[];
  price: number; // e.g. 65.00
  originalPrice?: number; // e.g. 85.00
  noRxRequired?: boolean;
  href?: string;
}

export interface ProductsPageConfig {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroImageSrc: string;
  categories: ProductCategory[];
  products: ProductItem[];
}
