'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';

interface MinimalArcadeMachineProps {
  rotation?: number;
}

export function MinimalArcadeMachine({ rotation = 0 }: MinimalArcadeMachineProps) {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  const colors = {
    base: '#1a1a1a',
    accent: '#8b5cf6',
    screen: '#0a0a0a',
    metal: '#2a2a2a',
    light: '#fafafa'
  };

  // Animation subtile
  useFrame((state) => {
    if (groupRef.current) {
      // Rotation douce vers la cible avec lerp
      const targetRotation = rotation * Math.PI / 180;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        0.1 // Facteur de lerp pour une animation fluide
      );
      
      // Animation idle subtile (réduite pour ne pas interférer)
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02; // Réduit de 0.05 à 0.02
    }
    
    // Glow effect subtil sur l'écran
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshPhysicalMaterial;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.02 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
      }
    }
  });

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]} rotation={[0, -0.2, 0]}>
      {/* Cabinet principal */}
      <Box 
        args={[2, 4, 1.5]} 
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial 
          color={colors.base}
          metalness={0.3}
          roughness={0.7}
          clearcoat={0.1}
          clearcoatRoughness={0.8}
        />
      </Box>

      {/* Groupe écran */}
      <group position={[0, 0.3, 0.75]}>
        {/* Cadre de l'écran */}
        <Box args={[1.6, 1.2, 0.1]}>
          <meshPhysicalMaterial
            color={colors.metal}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        
        {/* Écran */}
        <Plane 
          ref={screenRef}
          args={[1.4, 1.0]} 
          position={[0, 0, 0.06]}
        >
          <meshPhysicalMaterial
            color={colors.screen}
            metalness={0.1}
            roughness={0.1}
            emissive={colors.accent}
            emissiveIntensity={0.02}
          />
        </Plane>
      </group>

      {/* Panel de contrôle */}
      <group position={[0, -1.2, 0.4]} rotation={[-0.2, 0, 0]}>
        <Box args={[1.8, 0.3, 0.6]}>
          <meshPhysicalMaterial
            color={colors.metal}
            metalness={0.5}
            roughness={0.6}
          />
        </Box>

        {/* Joystick */}
        <group position={[-0.4, 0.15, 0.3]}>
          <Cylinder args={[0.1, 0.08, 0.05]}>
            <meshPhysicalMaterial
              color={colors.base}
              metalness={0.7}
              roughness={0.3}
            />
          </Cylinder>
          <Cylinder args={[0.04, 0.04, 0.2]} position={[0, 0.1, 0]}>
            <meshPhysicalMaterial
              color={colors.base}
              metalness={0.7}
              roughness={0.3}
            />
          </Cylinder>
        </group>

        {/* Boutons */}
        {[
          { pos: [0.2, 0.05, 0.3], accent: true },
          { pos: [0.35, 0.15, 0.3], accent: false },
          { pos: [0.5, 0.05, 0.3], accent: false },
          { pos: [0.65, 0.15, 0.3], accent: false }
        ].map((button, index) => (
          <Cylinder 
            key={index}
            args={[0.05, 0.05, 0.03]} 
            position={button.pos as [number, number, number]}
          >
            <meshPhysicalMaterial
              color={button.accent ? colors.accent : colors.base}
              metalness={0.8}
              roughness={0.2}
              emissive={button.accent ? colors.accent : '#000000'}
              emissiveIntensity={button.accent ? 0.1 : 0}
            />
          </Cylinder>
        ))}
      </group>

      {/* Lignes de néon subtiles */}
      <Box args={[0.02, 3, 0.02]} position={[-1.05, 0, 0.76]}>
        <meshPhysicalMaterial
          color={colors.accent}
          emissive={colors.accent}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>
      <Box args={[0.02, 3, 0.02]} position={[1.05, 0, 0.76]}>
        <meshPhysicalMaterial
          color={colors.accent}
          emissive={colors.accent}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Base */}
      <Box 
        args={[2.2, 0.3, 1.8]} 
        position={[0, -2.5, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={colors.base}
          metalness={0.7}
          roughness={0.3}
        />
      </Box>
    </group>
  );
}

export default MinimalArcadeMachine;