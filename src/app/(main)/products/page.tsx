import React from 'react';
import type { Metadata } from 'next';
import { ProductsHero, ProductsCatalog } from '@/components/products';
import { defaultProductsConfig } from '@/constants/products-page';

export const metadata: Metadata = {
  title: 'All Products | Solutions Health MD',
  description:
    'Personalized healthcare products and clinically proven GLP-1 treatments from licensed providers, with convenient virtual access nationwide.',
};

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Banner Section */}
      <ProductsHero
        badge={defaultProductsConfig.heroBadge}
        title={defaultProductsConfig.heroTitle}
        description={defaultProductsConfig.heroDescription}
        imageSrc={defaultProductsConfig.heroImageSrc}
      />

      {/* 2. Interactive Products Catalog & Category Filter */}
      <ProductsCatalog
        categories={defaultProductsConfig.categories}
        products={defaultProductsConfig.products}
      />
    </div>
  );
}
