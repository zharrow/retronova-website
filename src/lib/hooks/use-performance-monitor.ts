import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export function usePerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [shouldReduceQuality, setShouldReduceQuality] = useState(false);
  
  let frames = 0;
  let lastTime = performance.now();

  useFrame(() => {
    frames++;
    const now = performance.now();
    
    if (now - lastTime >= 1000) {
      const currentFps = Math.round((frames * 1000) / (now - lastTime));
      setFps(currentFps);
      
      // Réduire la qualité si FPS < 30
      setShouldReduceQuality(currentFps < 30);
      
      frames = 0;
      lastTime = now;
    }
  });

  return { fps, shouldReduceQuality };
}