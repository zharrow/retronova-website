'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { ArcadeMachine } from './arcade-machine';
import { SceneLoader } from './scene-loader';

interface SceneCanvasProps {
  enableOrbitControls?: boolean;
  autoRotate?: boolean;
  cameraPosition?: [number, number, number];
  className?: string;
}

export function SceneCanvas({ 
  enableOrbitControls = false, 
  autoRotate = true,
  cameraPosition = [0, 0, 5],
  className = "w-full h-full"
}: SceneCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ 
          position: cameraPosition, 
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
        <Suspense fallback={<SceneLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* Environment */}
          <Environment preset="night" />

          {/* Arcade Machine */}
          <ArcadeMachine autoRotate={autoRotate} />

          {/* Shadows */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={2} 
          />

          {/* Controls */}
          {enableOrbitControls && (
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={8}
              maxPolarAngle={Math.PI / 2}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}