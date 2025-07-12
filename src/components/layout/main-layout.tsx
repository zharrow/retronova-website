'use client';

import { ReactNode } from 'react';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { useSectionObserver } from '@/lib/hooks/use-section-observer';
import { Navigation } from './navigation';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  useSectionObserver();

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent)] pointer-events-none" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </div>
    </SmoothScrollProvider>
  );
}