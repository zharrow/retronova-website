import { useEffect, useRef } from 'react';
import { useAnimationStore } from '@/lib/stores/animation-store';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function useSynchronizedAnimation() {
  const activeSection = useScrollStore(state => state.activeSection);
  const scrollY = useScrollStore(state => state.scrollY);
  const setCurrentAnimation = useAnimationStore(state => state.setCurrentAnimation);
  const setAnimationProgress = useAnimationStore(state => state.setAnimationProgress);
  
  const lastAnimationRef = useRef<string | null>(null);
  const lastProgressRef = useRef<number>(0);

  useEffect(() => {
    // Déterminer l'animation active basée sur la section
    const animations = {
      0: 'hero-particles',
      1: 'concept-parallax',
      2: 'product-3d-rotation',
      3: 'features-stagger',
      4: 'contact-form-focus'
    };

    const newAnimation = animations[activeSection as keyof typeof animations] || null;
    
    // Éviter les mises à jour inutiles
    if (lastAnimationRef.current !== newAnimation) {
      lastAnimationRef.current = newAnimation;
      setCurrentAnimation(newAnimation);
    }
  }, [activeSection]); // Seulement activeSection

  useEffect(() => {
    // Calculer le progrès d'animation basé sur le scroll
    const progress = Math.min(scrollY / 4000, 1);
    
    // Éviter les mises à jour inutiles avec une tolérance
    if (Math.abs(lastProgressRef.current - progress) > 0.001) {
      lastProgressRef.current = progress;
      setAnimationProgress(progress);
    }
  }, [scrollY]); // Seulement scrollY
}