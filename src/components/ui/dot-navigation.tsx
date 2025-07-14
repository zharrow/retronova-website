'use client';

import { motion } from 'framer-motion';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function DotNavigation() {
  const sections = useScrollStore(state => state.sections);
  const activeSection = useScrollStore(state => state.activeSection);
  const goToSection = useScrollStore(state => state.goToSection);

  return (
    <nav className="nav-dots" aria-label="Navigation sections">
      {sections.map((section, index) => (
        <motion.button
          key={section}
          onClick={() => goToSection(index)}
          className={`nav-dot ${activeSection === index ? 'active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Aller à la section ${section}`}
          animate={{
            scale: activeSection === index ? 1.5 : 1,
            backgroundColor: activeSection === index ? '#8b5cf6' : '#262626'
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </nav>
  );
}

export default DotNavigation;