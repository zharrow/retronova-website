'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Heart, Settings, Shield } from 'lucide-react';

interface ParticulierSectionProps {
  onSignupClick: () => void;
}

export function ParticulierSection({ onSignupClick }: ParticulierSectionProps) {
  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Salon familial",
      description: "Parfait pour les soirées en famille et entre amis"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Nostalgie garantie",
      description: "Revivez vos meilleurs souvenirs d'arcade"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Installation simple",
      description: "Livraison et installation incluses"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantie étendue",
      description: "Support technique et garantie 3 ans"
    }
  ];

  return (
    <section id="particulier" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              <Home className="h-4 w-4 mr-2" />
              Espace Particulier
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Transformez votre salon en arcade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Redécouvrez le plaisir du jeu en famille avec une borne d'arcade authentique dans votre salon
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Parfait pour votre foyer
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <div className="text-slate-600">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Formules particulier</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">Achat direct</span>
                    <p className="text-sm text-gray-600">Votre borne à vie</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">2 499€</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">Location longue durée</span>
                    <p className="text-sm text-gray-600">Engagement 12 mois</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">149€/mois</span>
                </div>
              </div>
              <Button 
                onClick={onSignupClick}
                className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white"
              >
                Découvrir les offres particulier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}