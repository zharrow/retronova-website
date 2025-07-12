import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useScrollStore } from '@/lib/stores/scroll-store';

export const useSmoothScroll = () => {
  const setScrollY = useScrollStore(state => state.setScrollY);
  const setIsScrolling = useScrollStore(state => state.setIsScrolling);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const isRunning = useRef(true);

  useEffect(() => {
    // Éviter la double initialisation en StrictMode
    if (lenisRef.current) return;

    // Vérifier si on est côté client
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // Désactiver sur mobile pour éviter les conflits
    });

    lenisRef.current = lenis;

    // Handler pour le scroll avec debounce
    let scrollTimeout: NodeJS.Timeout;
    
    lenis.on('scroll', ({ scroll, velocity }: { scroll: number; velocity: number }) => {
      setScrollY(scroll);
      
      // Debounce pour isScrolling
      clearTimeout(scrollTimeout);
      setIsScrolling(true);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    });

    // Animation frame avec flag de running
    function animate(time: number) {
      if (!isRunning.current) return;
      
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup complet
    return () => {
      isRunning.current = false;
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []); // Aucune dépendance pour éviter les re-créations

  // Exposer des méthodes utiles
  useEffect(() => {
    const scrollToTop = () => {
      lenisRef.current?.scrollTo(0, { duration: 1 });
    };

    // Ajouter au window pour utilisation globale
    window.scrollToTop = scrollToTop;

    return () => {
      delete window.scrollToTop;
    };
  }, []);
};