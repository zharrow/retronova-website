'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '@/lib/hooks/use-smooth-scroll';
import { useSectionObserver } from '@/lib/hooks/use-section-observer';
import { Navigation } from './navigation';
import { ClientOnly } from '@/components/ui/client-only';
import dynamic from 'next/dynamic';

// Import dynamique du curseur
const CustomCursor = dynamic(
  () => import('../ui/custom-cursor').then(mod => ({ default: mod.CustomCursor })),
  { ssr: false }
);

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  useSmoothScroll();
  useSectionObserver();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent)]" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Custom Cursor - Client Only */}
      {/* <ClientOnly> */}
        {/* <CustomCursor /> */}
      {/* </ClientOnly> */}
    </div>
  );
}