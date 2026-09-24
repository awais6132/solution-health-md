import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
} from 'lucide-react';

const starterFeatures = [
  {
    title: 'Modern Architecture',
    description: 'Built with Next.js 16 App Router, React 19, and full TypeScript support.',
    icon: Code2,
    badgeColor: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Tailwind CSS Styling',
    description: 'Utility-first styling configured with dynamic themes, modern fonts, and fluid layouts.',
    icon: Zap,
    badgeColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Modular Components',
    description: 'Clean and reusable component hierarchy ready for fast and scalable feature development.',
    icon: Layers,
    badgeColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Production Ready',
    description: 'Optimized build setup, clean asset pipeline, and responsive out of the box.',
    icon: ShieldCheck,
    badgeColor: 'bg-amber-50 text-amber-600',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 text-center max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
          <Sparkles className="h-3.5 w-3.5" /> Fresh Project Canvas Ready
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Welcome to your new{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            Solution Health
          </span>{' '}
          Project
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal">
          All previous page contents, images, and mock assets have been cleared. You are now ready to build your custom application from a clean slate.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Link href="/signup">
            <Button variant="primary" size="lg" className="group shadow-sm">
              <Rocket className="h-4 w-4 mr-2" /> Start Building
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg">
              Explore Features
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="container mx-auto px-4 sm:px-6 max-w-5xl scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Core Architecture Highlights
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered with modern best practices, zero bloat, and scalable foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {starterFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="transition-all hover:shadow-md hover:border-blue-200 border-slate-200"
              >
                <CardHeader>
                  <div
                    className={`h-11 w-11 rounded-xl ${feature.badgeColor} flex items-center justify-center mb-2`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Get Started Box */}
      <section id="get-started" className="container mx-auto px-4 sm:px-6 max-w-4xl scroll-mt-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Getting Started</h3>
          <p className="text-sm text-slate-600 mb-4">
            Edit <code className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-blue-600">src/app/page.tsx</code> to start customizing your application.
          </p>
          <div className="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
            <code>npm run dev</code> &nbsp;# starts your local development server at http://localhost:3000
          </div>
        </div>
      </section>
    </div>
  );
}
