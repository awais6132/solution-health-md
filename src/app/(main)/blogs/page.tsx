import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import { BlogsGrid } from '@/components/blogs';
import { defaultBlogsHeroConfig } from '@/constants/blogs-page';

export const metadata: Metadata = {
  title: 'Blogs & Insights | Solutions Health MD',
  description:
    'Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest health trends.',
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner — reusing ServicesHero with blogs config */}
      <ServicesHero config={defaultBlogsHeroConfig} />

      {/* 2. Blog Grid + Sidebar */}
      <BlogsGrid />
    </div>
  );
}
