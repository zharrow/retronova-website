'use client';

import { motion } from 'framer-motion';
import { useScrollStore } from '@/lib/stores/scroll-store';

export function Navigation() {
  const sections = useScrollStore(state => state.sections);
  const activeSection = useScrollStore(state => state.activeSection);
  const goToSection = useScrollStore(state => state.goToSection);

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => goToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? 'bg-purple-500 border-purple-500 scale-150'
                : 'bg-transparent border-white/50 hover:border-white'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Aller à la section ${section}`}
          />
        ))}
      </div>
    </nav>
  );
}