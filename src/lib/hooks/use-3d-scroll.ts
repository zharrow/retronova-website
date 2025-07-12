import { useEffect, useRef } from 'react';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { useSceneStore } from '@/lib/stores/scene-store';

// Positions de caméra constantes pour éviter les recréations
const CAMERA_POSITIONS: Record<number, [number, number, number]> = {
  0: [0, 0, 5],     // Hero - vue frontale
  1: [3, 1, 4],     // Concept - vue de côté
  2: [0, 2, 6],     // Products - vue élevée
  3: [-2, 0, 4],    // Features - vue gauche
  4: [0, 0, 8],     // Contact - vue éloignée
};

export function use3DScroll() {
  const scrollY = useScrollStore(state => state.scrollY);
  const setCameraPosition = useSceneStore(state => state.setCameraPosition);
  const lastScrollY = useRef(scrollY);
  const lastSection = useRef<number>(-1);

  useEffect(() => {
    // Utiliser un seuil pour éviter les mises à jour trop fréquentes
    const scrollDiff = Math.abs(scrollY - lastScrollY.current);
    if (scrollDiff < 10) return; // Ignorer les petits changements

    lastScrollY.current = scrollY;

    // Calculer la position de la caméra basée sur le scroll
    const progress = Math.min(scrollY / 3000, 1);
    const currentSection = Math.floor(progress * 4);
    
    // Ne mettre à jour que si on change de section
    if (currentSection === lastSection.current) return;
    
    lastSection.current = currentSection;
    const nextSection = Math.min(currentSection + 1, 4);
    const sectionProgress = (progress * 4) - currentSection;
    
    const currentPos = CAMERA_POSITIONS[currentSection];
    const nextPos = CAMERA_POSITIONS[nextSection];
    
    if (currentPos && nextPos) {
      // Utiliser une interpolation plus douce
      const easedProgress = easeInOutCubic(sectionProgress);
      
      const interpolatedPos: [number, number, number] = [
        currentPos[0] + (nextPos[0] - currentPos[0]) * easedProgress,
        currentPos[1] + (nextPos[1] - currentPos[1]) * easedProgress,
        currentPos[2] + (nextPos[2] - currentPos[2]) * easedProgress,
      ];
      
      setCameraPosition(interpolatedPos);
    }
  }, [scrollY, setCameraPosition]);
}

// Fonction d'easing pour des transitions plus douces
function easeInOutCubic(t: number): number {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}