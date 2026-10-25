'use client';

import React, { useState } from 'react';
import { ProductCategory, ProductItem } from '@/types/products';
import { CategoryFilterPills } from './category-filter-pills';
import { ProductCard } from './product-card';

interface ProductsCatalogProps {
  categories: ProductCategory[];
  products: ProductItem[];
}

export function ProductsCatalog({
  categories,
  products,
}: ProductsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: ProductItem) => {
    showToast(`Added "${product.title}" to cart!`);
  };

  const handleToggleWishlist = (product: ProductItem) => {
    showToast(`Updated wishlist for "${product.title}"`);
  };

  const activeCategoryObj =
    categories.find((c) => c.id === activeCategory) || categories[0];

  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  return (
    <section className="w-full bg-[#FBFDFE] py-10 sm:py-14 lg:py-16">
      <div className="site-container">
        {/* Section Heading & Subtitle */}
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0E6C9B] tracking-tight">
            {activeCategory === 'all'
              ? 'Weight Loss'
              : activeCategoryObj.label.split('(')[0].trim()}
          </h2>
          <span className="text-sm sm:text-base text-slate-500 font-medium">
            {activeCategoryObj.subtitle || '(GLP-1)'}
          </span>
        </div>

        {/* Category Filter Pills Bar */}
        <CategoryFilterPills
          categories={categories}
          activeCategoryId={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="w-full py-16 text-center bg-white rounded-2xl border border-slate-200 mt-6">
            <p className="text-slate-600 text-base font-medium">
              No products found in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="mt-3 text-sm text-[#0E6C9B] font-semibold hover:underline cursor-pointer"
            >
              View all products
            </button>
          </div>
        )}
      </div>

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="text-emerald-400">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
