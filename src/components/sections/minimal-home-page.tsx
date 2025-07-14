'use client';

import { AnimatedBackground } from '@/components/ui/animated-background';
import { FluidCursor } from '@/components/ui/fluid-cursor';
import { DotNavigation } from '@/components/ui/dot-navigation';
import { ArcadeSceneCentral } from '@/components/3d/arcade-scene-central';
import { MinimalHeroSection } from '@/components/sections/minimal-hero-section';
import { MinimalConceptSection } from '@/components/sections/minimal-concept-section';
import { MinimalAccessSection } from '@/components/sections/minimal-access-section';
import { MinimalFeaturesSection } from '@/components/sections/minimal-features-section';
import { MinimalContactSection } from '@/components/sections/minimal-contact-section';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { useSectionObserver } from '@/lib/hooks/use-section-observer';

function PageContent() {
  useSectionObserver();
  
  return (
    <div className="main-container">
      {/* Fond animé */}
      <AnimatedBackground />
      
      {/* Curseur personnalisé */}
      <FluidCursor />
      
      {/* Navigation par points */}
      <DotNavigation />
      
      {/* Borne d'arcade centrale fixe */}
      <ArcadeSceneCentral />
      
      {/* Contenu principal */}
      <main className="relative z-10">
        <MinimalHeroSection />
        <MinimalConceptSection />
        <MinimalAccessSection />
        <MinimalFeaturesSection />
        <MinimalContactSection />
      </main>
    </div>
  );
}

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <PageContent />
    </SmoothScrollProvider>
  );
}