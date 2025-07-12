'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollStore } from '@/lib/stores/scroll-store';
import { ClientOnly } from '@/components/ui/client-only';

// Constantes pour éviter les recréations
const PARTICLE_COUNT = 30; // Réduit de 50 à 30 pour la performance
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const { goToSection } = useScrollStore();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mémoriser les handlers pour éviter les recréations
  const handleDiscoverClick = useMemo(() => () => goToSection(1), [goToSection]);
  const handleDemoClick = useMemo(() => () => goToSection(4), [goToSection]);

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
      
      {/* Animated Particles - Client Only */}
      <ClientOnly>
        <div className="absolute inset-0">
          {PARTICLES.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </ClientOnly>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-6 glassmorphism">
            🎮 Nouvelle Génération
          </Badge>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Arcade Connect
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          L'expérience rétro gaming réinventée pour l'ère numérique. 
          Scoring en ligne, catalogue évolutif et design authentique.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 interactive"
            onClick={handleDiscoverClick}
          >
            Découvrir le Concept
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 hover:bg-white/10 interactive"
            onClick={handleDemoClick}
          >
            Demander une Démo
          </Button>
        </motion.div>

        {/* Scroll Indicator - Client Only */}
        <ClientOnly>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        </ClientOnly>
      </motion.div>
    </section>
  );
}