'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, PartyPopper } from 'lucide-react';
import { ClientScene } from '@/components/3d/client-scene';
import { use3DScroll } from '@/lib/hooks/use-3d-scroll';

export function ProductsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Utiliser le hook pour contrôler la 3D avec le scroll
  use3DScroll();

  const [selectedOption, setSelectedOption] = useState<'achat' | 'location' | 'evenement'>('achat');

  const options = [
    {
      id: 'achat' as const,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Achat',
      description: 'Devenez propriétaire de votre borne. Installation et formation incluses, avec support technique à vie.',
      features: ['Support à vie', 'Formation incluse', 'Installation comprise', 'Garantie étendue'],
      badge: 'Populaire'
    },
    {
      id: 'location' as const,
      icon: <Package className="w-6 h-6" />,
      title: 'Location',
      description: 'Location flexible de 1 mois à 2 ans. Maintenance incluse et catalogue évolutif.',
      features: ['Maintenance incluse', 'Catalogue évolutif', 'Flexible', 'Pas d\'investissement'],
      badge: 'Flexible'
    },
    {
      id: 'evenement' as const,
      icon: <PartyPopper className="w-6 h-6" />,
      title: 'Événement',
      description: 'Location ponctuelle avec livraison et installation. Animation sur site disponible.',
      features: ['Livraison incluse', 'Installation rapide', 'Animation possible', 'Support événement'],
      badge: 'Événement'
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="products" ref={ref} className="min-h-screen py-20 relative">
      {/* Borne 3D Interactive */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y }}
      >
        <div className="w-80 h-96 pointer-events-auto">
          <Suspense fallback={
            <div className="w-full h-full glassmorphism rounded-lg flex items-center justify-center">
              <motion.div
                className="text-4xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎮
              </motion.div>
            </div>
          }>
            <ClientScene 
                enableOrbitControls={true}
                autoRotate={false}
                className="w-full h-full"
            />
          </Suspense>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choisissez votre expérience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explorez notre borne d'arcade en 3D et choisissez l'option qui vous convient
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card 
                className={`glassmorphism hover:bg-white/20 transition-all duration-300 cursor-pointer interactive group h-full ${
                  selectedOption === option.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      {option.icon}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className="text-xl text-white">{option.title}</CardTitle>
                    {option.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {option.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={selectedOption === option.id ? "default" : "outline"}
                    className={selectedOption === option.id ? 
                      "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700" :
                      "border-white/20 hover:bg-white/10"
                    }
                    size="sm"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contrôles 3D */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            💡 Utilisez votre souris pour faire tourner et zoomer sur la borne
          </p>
        </motion.div>
      </div>
    </section>
  );
}