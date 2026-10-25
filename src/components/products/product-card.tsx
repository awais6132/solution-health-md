'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductItem } from '@/types/products';
import { ROUTES } from '@/constants/routes';

interface ProductCardProps {
  product: ProductItem;
  onAddToCart?: (product: ProductItem) => void;
  onToggleWishlist?: (product: ProductItem) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product);
  };

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Product Title */}
        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight mb-3 group-hover:text-[#0E6C9B] transition-colors">
          {product.title}
        </h3>

        {/* Product Image Box */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-4 border border-slate-100">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Top-Left Badge: Best Seller */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 z-10 bg-[#163E17] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
              {product.badge}
            </div>
          )}

          {/* Top-Right Quick Actions (Wishlist & Cart) */}
          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
            {/* Wishlist Button */}
            <button
              type="button"
              onClick={handleWishlist}
              className={`w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs transition-colors cursor-pointer ${
                isWishlisted ? 'text-rose-500' : 'text-slate-600 hover:text-rose-500'
              }`}
              aria-label="Wishlist"
            >
              <svg
                className="w-3.5 h-3.5"
                fill={isWishlisted ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={isWishlisted ? '0' : '2'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={handleCart}
              className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-slate-600 hover:text-[#0E6C9B] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
              aria-label="Add to cart"
            >
              <svg className="w-3.5 h-3.5 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          </div>

          {/* Bottom-Left Rating Pill */}
          <div className="absolute bottom-2.5 left-2.5 z-10 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <span className="text-amber-400 text-xs leading-none">★</span>
            <span className="text-[10px] font-bold text-slate-800 leading-none">
              {product.rating}
            </span>
            <span className="text-[9px] text-slate-500 leading-none">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="space-y-1.5 mb-4">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <span className="w-3.5 h-3.5 rounded-full bg-[#3E9447] text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-2.5 h-2.5 stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="pt-2 border-t border-slate-100">
        <p className="text-[11px] text-slate-500 font-normal">Starting at</p>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* No Rx Required Badge */}
        {product.noRxRequired && (
          <div className="mt-1">
            <span className="inline-block bg-[#D8F37A] text-[#2C490B] text-[10px] font-bold px-1.5 py-0.5 rounded-xs tracking-tight">
              No Rx Required
            </span>
          </div>
        )}

        {/* Action Button: See If I Qualify -> */}
        <Link
          href={product.href || ROUTES.FIND_MY_CARE}
          className="w-full mt-4 py-2.5 rounded-[6px] btn-animated-gradient-dark text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-[0.98] transition-all"
        >
          <span>See If I Qualify</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
