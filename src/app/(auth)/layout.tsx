import React from 'react';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen lg:h-screen w-full flex items-center justify-center lg:justify-start overflow-y-auto lg:overflow-hidden bg-[#eaf4ea]">
      {/* Background Doctor Image */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/assets/images/auth-bg.jpg"
          alt="Healthcare doctor background"
          fill
          priority
          quality={100}
          className="object-cover object-right"
        />
        {/* Softened gradient opacity by ~0.15 so subtle background image bokeh/texture shows through lightly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(75, 155, 68, 0.85) 0%, rgba(75, 155, 68, 0.65) 14%, rgba(75, 155, 68, 0.22) 26%, rgba(102, 102, 102, 0) 38%, rgba(102, 102, 102, 0) 100%)',
          }}
        />
      </div>

      {/* Content Container: Left-aligned with top/bottom breathing space and ZERO scroll on desktop */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-start px-4 py-6 sm:py-8 lg:py-10 sm:px-6 md:px-10 lg:pl-16 xl:pl-24 2xl:pl-32">
        {children}
      </div>
    </div>
  );
}
