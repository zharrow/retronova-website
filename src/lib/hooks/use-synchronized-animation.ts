import { useEffect } from 'react';
import { useAnimationStore } from '@/lib/stores/animation-store';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function useSynchronizedAnimation() {
  const { activeSection, scrollY } = useScrollStore();
  const { setCurrentAnimation, setAnimationProgress } = useAnimationStore();

  useEffect(() => {
    // Déterminer l'animation active basée sur la section
    const animations = {
      0: 'hero-particles',
      1: 'concept-parallax',
      2: 'product-3d-rotation',
      3: 'features-stagger',
      4: 'contact-form-focus'
    };

    setCurrentAnimation(animations[activeSection as keyof typeof animations] || null);
  }, [activeSection, setCurrentAnimation]);

  useEffect(() => {
    // Calculer le progrès d'animation basé sur le scroll
    const progress = Math.min(scrollY / 4000, 1);
    setAnimationProgress(progress);
  }, [scrollY, setAnimationProgress]);
}