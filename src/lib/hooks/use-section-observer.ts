import { useEffect, useCallback } from 'react';
import { useScrollStore } from '@/lib/stores/scroll-store';

export const useSectionObserver = () => {
  const sections = useScrollStore(state => state.sections);
  const setActiveSection = useScrollStore(state => state.setActiveSection);

  // Mémoriser le callback pour éviter les re-créations
  const handleIntersection = useCallback((index: number) => {
    setActiveSection(index);
  }, [setActiveSection]);

  useEffect(() => {
    const observers: (IntersectionObserver | null)[] = [];

    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (!element) {
        observers.push(null);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleIntersection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [sections, handleIntersection]); // sections et handleIntersection mémorisé
};