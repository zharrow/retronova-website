'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  BarChart3, 
  Users, 
  Headphones, 
  Target, 
  Clock, 
  MapPin 
} from 'lucide-react';

export function ProfessionnelSection() {
  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Solutions sur mesure",
      description: "Adaptées à votre établissement"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics avancés",
      description: "Suivi des performances et revenus"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestion multi-bornes",
      description: "Contrôlez tout votre parc depuis une interface"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support dédié",
      description: "Assistance prioritaire 24h/24"
    }
  ];

  const businessTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Bars & Restaurants",
      description: "Fidélisez votre clientèle et augmentez le temps de présence"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Hôtels & Résidences",
      description: "Enrichissez l'expérience client avec un espace détente unique"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Centres de Loisirs",
      description: "Complétez votre offre avec l'arcade nouvelle génération"
    }
  ];

  return (
    <section id="professionnel" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              <Building2 className="h-4 w-4 mr-2" />
              Espace Professionnel
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Boostez votre activité professionnelle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour bars, restaurants, hôtels, centres de loisirs et entreprises
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Solutions professionnelles</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-blue-100">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-900">ROI moyen</span>
                    <p className="text-sm text-gray-600">+30% de CA en 6 mois</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-900">Temps de retour</span>
                    <p className="text-sm text-gray-600">8-12 mois selon l'activité</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-900">Installation</span>
                    <p className="text-sm text-gray-600">Partout en France</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                Demander une étude personnalisée
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Fonctionnalités professionnelles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 border border-blue-100">
                      <div className="text-blue-600">
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
          </div>

          {/* Types d'établissements */}
          <div className="grid md:grid-cols-3 gap-6">
            {businessTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-100">
                    <div className="text-blue-600">
                      {type.icon}
                    </div>
                  </div>
                  <CardTitle className="text-gray-900">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 text-blue-700">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}