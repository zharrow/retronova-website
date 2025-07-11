import { useEffect } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { useSceneStore } from '@/lib/stores/scene-store';

export function use3DScroll() {
  const { scrollY } = useScrollStore();
  const { setCameraPosition } = useSceneStore();
  
  useEffect(() => {
    // Calculer la position de la caméra basée sur le scroll
    const progress = Math.min(scrollY / 3000, 1);
    
    // Positions de caméra pour différentes sections
    const positions: Record<number, [number, number, number]> = {
      0: [0, 0, 5],     // Hero - vue frontale
      1: [3, 1, 4],     // Concept - vue de côté
      2: [0, 2, 6],     // Products - vue élevée
      3: [-2, 0, 4],    // Features - vue gauche
      4: [0, 0, 8],     // Contact - vue éloignée
    };
    
    const currentSection = Math.floor(progress * 4);
    const nextSection = Math.min(currentSection + 1, 4);
    const sectionProgress = (progress * 4) - currentSection;
    
    const currentPos = positions[currentSection];
    const nextPos = positions[nextSection];
    
    if (currentPos && nextPos) {
      const interpolatedPos: [number, number, number] = [
        currentPos[0] + (nextPos[0] - currentPos[0]) * sectionProgress,
        currentPos[1] + (nextPos[1] - currentPos[1]) * sectionProgress,
        currentPos[2] + (nextPos[2] - currentPos[2]) * sectionProgress,
      ];
      
      setCameraPosition(interpolatedPos);
    }
  }, [scrollY, setCameraPosition]);
}