'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Group, Mesh } from 'three';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { useSceneStore } from '@/lib/stores/scene-store';

interface ArcadeMachineProps {
  autoRotate?: boolean;
}

export function ArcadeMachine({ autoRotate = true }: ArcadeMachineProps) {
  const groupRef = useRef<Group>(null);
  const cabinetRef = useRef<Mesh>(null);
  const screenRef = useRef<Mesh>(null);
  
  const { scrollY } = useScrollStore();
  const { cameraPosition } = useSceneStore();
  const { camera } = useThree();

  // Animation avec le scroll
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (autoRotate) {
      // Rotation basée sur le scroll
      const scrollProgress = scrollY / 2000;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }

    // Animation idle subtile
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Glow effect sur l'écran
    if (screenRef.current) {
      const material = screenRef.current.material as any;
      if (material.emissiveIntensity) {
        material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  // Mise à jour de la position de la caméra
  useEffect(() => {
    camera.position.set(...cameraPosition);
  }, [cameraPosition, camera]);

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
      {/* Cabinet principal */}
      <mesh ref={cabinetRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 3.5, 1.2]} />
        <meshPhysicalMaterial 
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.7}
          clearcoat={0.1}
        />
      </mesh>

      {/* Écran */}
      <group position={[0, 0.5, 0.61]}>
        {/* Cadre de l'écran */}
        <mesh>
          <boxGeometry args={[1.4, 1.0, 0.05]} />
          <meshPhysicalMaterial 
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Écran lumineux */}
        <mesh ref={screenRef} position={[0, 0, 0.026]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshBasicMaterial 
            color="#1a1a2e"
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* Panel de contrôle */}
      <group position={[0, -1, 0.3]} rotation={[-0.2, 0, 0]}>
        <mesh>
          <boxGeometry args={[1.6, 0.2, 0.4]} />
          <meshPhysicalMaterial 
            color="#2a2a2a"
            metalness={0.5}
            roughness={0.6}
          />
        </mesh>

        {/* Joystick */}
        <group position={[-0.4, 0.1, 0]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.04]} />
            <meshPhysicalMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.15]} />
            <meshPhysicalMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.18, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshPhysicalMaterial color="#ff4444" />
          </mesh>
        </group>

        {/* Boutons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh 
            key={i}
            position={[
              0.1 + (i % 3) * 0.2, 
              0.1, 
              0.1 - Math.floor(i / 3) * 0.15
            ]}
          >
            <cylinderGeometry args={[0.04, 0.04, 0.02]} />
            <meshPhysicalMaterial 
              color={i === 0 ? "#8b5cf6" : i === 1 ? "#06b6d4" : "#ffffff"}
              metalness={0.8}
              roughness={0.2}
              emissive={i < 2 ? (i === 0 ? "#8b5cf6" : "#06b6d4") : "#000000"}
              emissiveIntensity={i < 2 ? 0.1 : 0}
            />
          </mesh>
        ))}
      </group>

      {/* Base */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[2.0, 0.2, 1.4]} />
        <meshPhysicalMaterial 
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Lignes de néon */}
      <group>
        {/* Néon gauche */}
        <mesh position={[-0.95, 0, 0.61]}>
          <boxGeometry args={[0.02, 2.5, 0.02]} />
          <meshBasicMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Néon droit */}
        <mesh position={[0.95, 0, 0.61]}>
          <boxGeometry args={[0.02, 2.5, 0.02]} />
          <meshBasicMaterial 
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Détails supplémentaires */}
      <group>
        {/* Speaker grilles */}
        <mesh position={[-0.6, 1.2, 0.61]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02]} />
          <meshPhysicalMaterial color="#0a0a0a" />
        </mesh>
        <mesh position={[0.6, 1.2, 0.61]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02]} />
          <meshPhysicalMaterial color="#0a0a0a" />
        </mesh>

        {/* Coin slot */}
        <mesh position={[0.7, -0.5, 0.61]}>
          <boxGeometry args={[0.1, 0.02, 0.05]} />
          <meshPhysicalMaterial color="#0a0a0a" />
        </mesh>
      </group>
    </group>
  );
}