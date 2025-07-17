'use client';

import { motion } from 'framer-motion';

const accessOptions = [
  {
    icon: '🛍️',
    title: 'Achat',
    description: 'Devenez propriétaire de votre borne. Installation et formation incluses, avec support technique à vie.'
  },
  {
    icon: '📅',
    title: 'Location',
    description: 'Location flexible de 1 mois à 2 ans. Maintenance incluse et catalogue évolutif.'
  },
  {
    icon: '🎉',
    title: 'Événement',
    description: 'Location ponctuelle avec livraison et installation. Animation sur site disponible.'
  }
];

export function MinimalAccessSection() {
  return (
    <section className="section" data-section="access">
      <motion.div 
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Choisissez votre expérience
        </h2>
        
        <div className="space-y-4 mt-8">
          {accessOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="card-minimal p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <span className="text-2xl opacity-80">{option.icon}</span>
                {option.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default MinimalAccessSection;