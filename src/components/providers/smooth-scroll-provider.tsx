'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();
  const setScrollY = useScrollStore(state => state.setScrollY);
  const setIsScrolling = useScrollStore(state => state.setIsScrolling);

  useEffect(() => {
    // Éviter la double initialisation
    if (lenisRef.current || typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Scroll handler avec debounce
    let scrollTimeout: NodeJS.Timeout;
    
    lenis.on('scroll', ({ scroll, velocity }: any) => {
      setScrollY(scroll);
      
      clearTimeout(scrollTimeout);
      setIsScrolling(true);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    });

    // Animation frame
    let isRunning = true;
    
    function animate(time: number) {
      if (!isRunning || !lenisRef.current) return;
      lenisRef.current.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      isRunning = false;
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [setScrollY, setIsScrolling]);

  // Gérer les changements de route
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  // Exposer l'instance Lenis globalement
  useEffect(() => {
    if (typeof window !== 'undefined' && lenisRef.current) {
      window.lenis = lenisRef.current;
      
      return () => {
        delete window.lenis;
      };
    }
  }, []);

  return <>{children}</>;
}

// Types pour TypeScript
declare global {
  interface Window {
    lenis?: Lenis;
    scrollToTop?: () => void;
  }
}