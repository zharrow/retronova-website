'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <>
      {/* Pattern géométrique animé */}
      <div className="geometric-bg" aria-hidden="true" />
      
      {/* Orbes flottants */}
      <div className="floating-orbs" aria-hidden="true">
        <motion.div 
          className="orb"
          animate={{
            x: [0, 50, -30, -60, 0],
            y: [0, -80, -50, 40, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [0.15, 0.2, 0.12, 0.18, 0.15]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="orb"
          animate={{
            x: [0, -40, 60, -20, 0],
            y: [0, 60, -40, 80, 0],
            scale: [1, 0.9, 1.15, 0.95, 1],
            opacity: [0.12, 0.18, 0.15, 0.2, 0.12]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -10
          }}
        />
        <motion.div 
          className="orb"
          animate={{
            x: [0, 70, -50, 30, 0],
            y: [0, -60, 40, -80, 0],
            scale: [1, 1.05, 0.92, 1.08, 1],
            opacity: [0.1, 0.15, 0.08, 0.12, 0.1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -5
          }}
        />
      </div>
    </>
  );
}

export default AnimatedBackground;