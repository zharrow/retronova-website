import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useScrollStore } from '@/lib/stores/scroll-store';

export const useSmoothScroll = () => {
  const setScrollY = useScrollStore(state => state.setScrollY);
  const setIsScrolling = useScrollStore(state => state.setIsScrolling);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll, velocity }: { scroll: number; velocity: number }) => {
      setScrollY(scroll);
      setIsScrolling(Math.abs(velocity) > 0.1);
    });

    function raf(time: number) {
      lenis.raf(time);
      if (lenisRef.current) {
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
};