'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-extrabold text-rose-600">Something went wrong</h2>
      <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
        An unexpected error occurred while processing your request.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Try again
        </Button>
        <Link href="/">
          <Button variant="outline">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
