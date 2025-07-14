'use client';

import { motion } from 'framer-motion';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function MinimalConceptSection() {
  const goToSection = useScrollStore(state => state.goToSection);

  return (
    <section className="section" data-section="concept">
      <motion.div 
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Technologie de pointe, âme rétro
        </h2>
        <p className="section-text">
          Chaque borne embarque un Raspberry Pi 5 pour des performances fluides. 
          La connectivité WiFi permet une synchronisation en temps réel des scores 
          et des mises à jour automatiques du catalogue.
        </p>
        <p className="section-text">
          Design authentique, écran haute définition, contrôles précis : 
          l'expérience arcade comme vous ne l'avez jamais vécue.
        </p>
        <motion.button 
          onClick={() => goToSection(2)}
          className="btn-minimal px-6 py-3 rounded-lg font-medium mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explorer les options
        </motion.button>
      </motion.div>
    </section>
  );
}

export default MinimalConceptSection;