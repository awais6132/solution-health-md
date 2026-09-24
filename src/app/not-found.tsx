import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-6xl font-extrabold text-emerald-600">404</h2>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn’t exist.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
