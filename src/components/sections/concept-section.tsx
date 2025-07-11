'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Wifi, Gamepad2, Zap } from 'lucide-react';

export function ConceptSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Raspberry Pi 5",
      description: "Performances optimales pour une expérience fluide"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Connecté",
      description: "Synchronisation temps réel des scores et mises à jour"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Contrôles Précis",
      description: "Joysticks et boutons de qualité arcade authentique"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Haute Définition",
      description: "Écrans cristalin pour une expérience visuelle parfaite"
    }
  ];

  return (
    <section id="concept" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technologie de pointe, âme rétro
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Chaque borne embarque un Raspberry Pi 5 pour des performances fluides. 
              La connectivité WiFi permet une synchronisation en temps réel des scores 
              et des mises à jour automatiques du catalogue.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Design authentique, écran haute définition, contrôles précis : 
              l'expérience arcade comme vous ne l'avez jamais vécue.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 interactive"
            >
              Explorer les Options
            </Button>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glassmorphism hover:bg-white/20 transition-all duration-300 interactive group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-purple-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}