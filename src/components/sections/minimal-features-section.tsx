'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '📱',
    title: 'App Mobile',
    description: 'Contrôlez votre borne et consultez vos scores'
  },
  {
    icon: '🏆',
    title: 'Scoring Global',
    description: 'Classements en ligne et tournois'
  },
  {
    icon: '🎮',
    title: '2000+ Jeux',
    description: 'Catalogue évolutif mis à jour régulièrement'
  },
  {
    icon: '⚙️',
    title: 'Personnalisation',
    description: 'Interface et éclairage personnalisables'
  }
];

export function MinimalFeaturesSection() {
  return (
    <section className="section" data-section="features">
      <motion.div 
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Des fonctionnalités pensées pour vous
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="text-3xl mb-3 opacity-80">
                {feature.icon}
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default MinimalFeaturesSection;