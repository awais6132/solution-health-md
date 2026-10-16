import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageLoader } from '@/components/layout/page-loader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-slate-900 w-full max-w-full overflow-x-clip">
      <PageLoader />
      <Header />
      <main suppressHydrationWarning className="flex-1 w-full max-w-full">{children}</main>
      <Footer showPreFooter={true} />
    </div>
  );
}
