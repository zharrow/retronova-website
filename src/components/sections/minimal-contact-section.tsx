'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function MinimalContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section className="section centered" data-section="contact">
      <motion.div 
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Prêt à franchir le portail ?
        </h2>
        <p className="section-text">
          Contactez-nous pour découvrir comment intégrer nos bornes d'arcade 
          dans votre univers. Devis personnalisé sous 24h.
        </p>
        
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <div>
            <input 
              type="text" 
              placeholder="Votre nom" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg 
                       text-white placeholder-gray-500 focus:outline-none focus:border-purple-600
                       transition-colors"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Votre email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg 
                       text-white placeholder-gray-500 focus:outline-none focus:border-purple-600
                       transition-colors"
            />
          </div>
          <div>
            <input 
              type="tel" 
              placeholder="Téléphone (optionnel)"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg 
                       text-white placeholder-gray-500 focus:outline-none focus:border-purple-600
                       transition-colors"
            />
          </div>
          <div>
            <textarea 
              rows={4} 
              placeholder="Décrivez votre projet..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg 
                       text-white placeholder-gray-500 focus:outline-none focus:border-purple-600
                       transition-colors resize-none"
            />
          </div>
          <motion.button 
            onClick={handleSubmit}
            disabled={isSubmitting || isSubmitted}
            className={`w-full py-3 rounded-lg font-medium transition-all cursor-none
                      ${isSubmitted 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
            whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Envoi en cours...' : isSubmitted ? '✓ Message envoyé' : 'Envoyer ma demande'}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default MinimalContactSection;