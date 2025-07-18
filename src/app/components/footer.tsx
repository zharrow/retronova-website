'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Gamepad2, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Arcade Connect
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              L'expérience rétro gaming réinventée pour l'ère numérique. 
              Scoring en ligne, catalogue évolutif et design authentique pour particuliers et professionnels.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Produit</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#concept" className="hover:text-gray-900 transition-colors">Concept</a></li>
              <li><a href="#particulier" className="hover:text-gray-900 transition-colors">Espace Particulier</a></li>
              <li><a href="#professionnel" className="hover:text-gray-900 transition-colors">Espace Professionnel</a></li>
              <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Tarifs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Maintenance</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024 Arcade Connect. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}