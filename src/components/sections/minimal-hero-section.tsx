'use client';

import { motion } from 'framer-motion';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function MinimalHeroSection() {
  const goToSection = useScrollStore(state => state.goToSection);

  return (
    <section className="section" data-section="intro">
      <motion.div 
        className="section-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="section-title text-balance">
          La borne d'arcade connectée nouvelle génération
        </h1>
        <p className="section-subtitle">
          L'expérience rétro gaming réinventée pour l'ère numérique
        </p>
        <p className="section-text">
          Fusionnez le charme intemporel du rétro gaming avec les innovations d'aujourd'hui. 
          Scoring en ligne, catalogue évolutif et expérience utilisateur repensée.
        </p>
        <div className="flex gap-4 mt-8">
          <motion.button 
            onClick={() => goToSection(1)}
            className="btn-minimal px-6 py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Découvrir le concept
          </motion.button>
          <motion.button 
            onClick={() => goToSection(4)}
            className="btn-minimal px-6 py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Demander une démo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default MinimalHeroSection;