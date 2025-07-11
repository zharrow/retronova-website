'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Trophy, Gamepad2, Settings } from 'lucide-react';

export function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Mobile",
      description: "Contrôlez votre borne et consultez vos scores depuis votre smartphone",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Scoring Global",
      description: "Classements en ligne et tournois avec la communauté mondiale",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "2000+ Jeux",
      description: "Catalogue évolutif mis à jour régulièrement avec les dernières sorties",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Personnalisation",
      description: "Interface et éclairage personnalisables selon vos préférences",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section id="features" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Des fonctionnalités pensées pour vous
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une expérience arcade complète avec toutes les fonctionnalités modernes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism hover:bg-white/20 transition-all duration-300 interactive group h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Placeholder */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glassmorphism p-8 rounded-lg max-w-md mx-auto">
            <motion.div
              className="text-4xl mb-4"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎮
            </motion.div>
            <p className="text-gray-300">
              Démo interactive disponible bientôt
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}