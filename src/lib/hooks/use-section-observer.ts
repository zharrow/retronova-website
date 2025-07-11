import { useEffect } from 'react';
import { useScrollStore } from '@/lib/stores/scroll-store';

export const useSectionObserver = () => {
  const { sections, setActiveSection } = useScrollStore();

  useEffect(() => {
    const observers = sections.map((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [sections, setActiveSection]);
};