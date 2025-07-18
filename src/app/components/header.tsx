'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onSignupClick: () => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen, onSignupClick }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Arcade Connect
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#concept" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Concept
            </a>
            <a href="#particulier" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Espace Particulier
            </a>
            <a href="#professionnel" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Espace Professionnel
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <Button 
              onClick={onSignupClick}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              Commencer
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#concept" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Concept
              </a>
              <a href="#particulier" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Espace Particulier
              </a>
              <a href="#professionnel" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Espace Professionnel
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Tarifs
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Button 
                onClick={onSignupClick}
                className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white"
              >
                Commencer
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}