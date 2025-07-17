'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Menu, 
  X, 
  Gamepad2, 
  Wifi, 
  Trophy, 
  Smartphone,
  ShoppingCart,
  Calendar,
  PartyPopper,
  Star,
  ArrowRight,
  Github,
  Twitter,
  Mail,
  Phone
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Mobile",
      description: "Contrôlez votre borne et consultez vos scores depuis votre smartphone"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Scoring Global",
      description: "Classements en ligne et tournois avec la communauté mondiale"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "2000+ Jeux",
      description: "Catalogue évolutif mis à jour régulièrement avec les dernières sorties"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Connectivité",
      description: "Synchronisation temps réel et mises à jour automatiques"
    }
  ];

  const pricingOptions = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Achat",
      description: "Devenez propriétaire de votre borne",
      features: ["Support à vie", "Formation incluse", "Installation comprise", "Garantie étendue"],
      badge: "Populaire"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Location",
      description: "Location flexible de 1 mois à 2 ans",
      features: ["Maintenance incluse", "Catalogue évolutif", "Flexible", "Pas d'investissement"],
      badge: "Flexible"
    },
    {
      icon: <PartyPopper className="h-6 w-6" />,
      title: "Événement",
      description: "Location ponctuelle avec livraison",
      features: ["Livraison incluse", "Installation rapide", "Animation possible", "Support événement"],
      badge: "Événement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Arcade Connect</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#concept" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Concept
              </a>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Tarifs
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Demander une démo</Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#concept" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Concept
                </a>
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Fonctionnalités
                </a>
                <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Tarifs
                </a>
                <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <Button className="w-full mt-4">Demander une démo</Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              🎮 Nouvelle Génération
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              L'arcade connectée
              <span className="text-primary block">nouvelle génération</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              L'expérience rétro gaming réinventée pour l'ère numérique. 
              Scoring en ligne, catalogue évolutif et design authentique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Découvrir le concept
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Demander une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Technologie de pointe, âme rétro
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Chaque borne embarque un Raspberry Pi 5 pour des performances fluides. 
                La connectivité WiFi permet une synchronisation en temps réel des scores.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Performances optimales
                </h3>
                <p className="text-muted-foreground mb-6">
                  Design authentique, écran haute définition, contrôles précis : 
                  l'expérience arcade comme vous ne l'avez jamais vécue.
                </p>
                <Button>
                  Explorer les options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Gamepad2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-sm">Raspberry Pi 5</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Performances optimales pour une expérience fluide
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Wifi className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-sm">Connecté</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Synchronisation temps réel des scores
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Trophy className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-sm">Haute Définition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Écrans cristalins pour une expérience parfaite
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Star className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-sm">Contrôles Précis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Joysticks et boutons de qualité arcade
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Des fonctionnalités pensées pour vous
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expérience arcade complète avec toutes les fonctionnalités modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choisissez votre expérience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plusieurs options pour s'adapter à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <div className="text-primary-foreground">
                        {option.icon}
                      </div>
                    </div>
                    {option.badge && (
                      <Badge variant="secondary">{option.badge}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">En savoir plus</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à franchir le portail ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous pour découvrir comment intégrer nos bornes d'arcade 
              dans votre univers. Devis personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Demander un appel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Arcade Connect</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                L'expérience rétro gaming réinventée pour l'ère numérique. 
                Scoring en ligne, catalogue évolutif et design authentique.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Concept</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Maintenance</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Arcade Connect. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}