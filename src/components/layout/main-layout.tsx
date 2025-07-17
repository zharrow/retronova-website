'use client';

import { ReactNode } from 'react';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { useSectionObserver } from '@/lib/hooks/use-section-observer';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FluidCursor } from '@/components/ui/fluid-cursor';
import { DotNavigation } from '@/components/ui/dot-navigation';

interface MainLayoutProps {
  children: ReactNode;
}

export function MinimalMainLayout({ children }: MainLayoutProps) {
  useSectionObserver();

  return (
    <SmoothScrollProvider>
      <div className="main-container">
        {/* Fond animé */}
        <AnimatedBackground />
        
        {/* Curseur personnalisé */}
        <FluidCursor />
        
        {/* Navigation par points */}
        <DotNavigation />
        
        {/* Contenu principal */}
        <main className="relative z-10">
          {children}
        </main>
      </div>
    </SmoothScrollProvider>
  );
}

export default MinimalMainLayout;