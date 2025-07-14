'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { Environment, ContactShadows } from '@react-three/drei';
import { ArcadeMachine } from '@/components/3d/arcade-machine';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { motion, AnimatePresence } from 'framer-motion';

export function ArcadeSceneCentral() {
  const scrollY = useScrollStore(state => state.scrollY);
  const activeSection = useScrollStore(state => state.activeSection);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    // Rotation basée sur le scroll
    const scrollProgress = scrollY / 2000;
    setRotation(scrollProgress * 360);
    
    // Fade out sur la dernière section (contact)
    if (activeSection === 4) {
      setOpacity(0);
    } else {
      setOpacity(0.8);
    }
  }, [scrollY, activeSection]);

  return (
    <motion.div 
      className="arcade-machine-container"
      animate={{ opacity }}
      transition={{ duration: 0.6 }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 6], 
          fov: 45,
          near: 0.1,
          far: 1000 
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        shadows
      >
        <Suspense fallback={null}>
          {/* Éclairage minimaliste */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={0.6}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[0, 0, 3]} intensity={0.2} color="#8b5cf6" />
          <directionalLight position={[-5, 5, -5]} intensity={0.3} />

          {/* Environnement */}
          <Environment preset="night" />

          {/* Borne d'arcade */}
          <ArcadeMachine />

          {/* Ombres */}
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={2} 
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

export default ArcadeSceneCentral;