'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { Environment, ContactShadows } from '@react-three/drei';
import { MinimalArcadeMachine } from '@/components/3d/minimal-arcade-machine';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { motion, AnimatePresence } from 'framer-motion';

export function ArcadeSceneCentral() {
  const scrollY = useScrollStore(state => state.scrollY);
  const activeSection = useScrollStore(state => state.activeSection);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    // Rotation sophistiquée basée sur la section active et le scroll
    const sectionRotations = [0, 25, -15, 45, 0]; // Rotations pour chaque section
    const baseRotation = sectionRotations[activeSection] || 0;
    
    // Micro-rotation basée sur le scroll pour plus de dynamisme
    const scrollMicroRotation = Math.sin(scrollY * 0.001) * 5;
    
    setRotation(baseRotation + scrollMicroRotation);
    
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
          <MinimalArcadeMachine rotation={rotation} />

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