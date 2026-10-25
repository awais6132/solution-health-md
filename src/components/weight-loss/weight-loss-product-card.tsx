'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Check, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui';
import { WeightLossProductItem } from '@/types/weight-loss-page';

interface WeightLossProductCardProps {
  product: WeightLossProductItem;
  className?: string;
}

export const WeightLossProductCard: React.FC<WeightLossProductCardProps> = ({
  product,
  className = '',
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(10,37,64,0.12)] transition-all duration-300 flex flex-col overflow-hidden ${className}`}
    >
      {/* 1. Card Image Header with Floating Badges */}
      <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
        />

        {/* Top-Left: Best Seller Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#14532D] text-[#86EFAC] tracking-tight shadow-xs select-none">
              {product.badge}
            </span>
          </div>
        )}

        {/* Top-Right: Quick Action Badges (Wishlist & Cart) */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-rose-500 active:scale-90 transition-all cursor-pointer"
            title="Add to Wishlist"
            aria-label="Wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`}
            />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-[#0E6C9B] active:scale-90 transition-all cursor-pointer"
            title="Add to Cart"
            aria-label="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom-Left: Rating Pill Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800 select-none">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="flex flex-col gap-4">
          {/* Product Title */}
          <h3
            className="text-lg sm:text-[19px] font-bold text-slate-900 group-hover:text-[#0E6C9B] transition-colors leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.name}
          </h3>

          {/* Features Checklist */}
          <ul className="flex flex-col gap-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-600">
                <span className="w-4 h-4 rounded-full bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
                </span>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA Row */}
        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
          {/* Price Header */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-medium text-slate-500">Starting at</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 leading-none">
                ${product.startingPrice.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Free 2-Day Delivery Pill */}
            {product.deliveryBadge && (
              <div className="pt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold tracking-wide border border-[#A7F3D0]/60 select-none">
                  {product.deliveryBadge}
                </span>
              </div>
            )}
          </div>

          {/* Action CTA Button */}
          <Link href={product.href} className="w-full pt-1">
            <Button
              variant="dark"
              className="w-full h-11 font-semibold text-sm rounded-full cursor-pointer gap-1.5 bg-[#0E6C9B] hover:bg-[#0b577d] text-white"
            >
              <span>See if Qualify</span>
              <span className="text-base leading-none">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeightLossProductCard;
