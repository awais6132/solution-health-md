'use client';

import React from 'react';
import { ProductCategory } from '@/types/products';

interface CategoryFilterPillsProps {
  categories: ProductCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryFilterPills({
  categories,
  activeCategoryId,
  onSelectCategory,
}: CategoryFilterPillsProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`h-8 sm:h-9 px-3.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap select-none flex items-center justify-center active:scale-95 ${
                isActive
                  ? 'bg-[#071F3D] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
