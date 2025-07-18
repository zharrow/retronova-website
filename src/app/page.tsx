'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Smartphone,
  Wifi, 
  Trophy, 
  Gamepad2,
  ShoppingCart,
  Calendar,
  PartyPopper,
  Star,
  CheckCircle,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  X,
  ArrowLeft,
  CreditCard,
  Home,
  Building2,
  Users,
  Headphones,
  Target,
  Clock,
  Heart,
  Settings,
  Shield,
  BarChart3,
  Twitter,
  Github,
  Menu
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Header Component
function Header({ mobileMenuOpen, setMobileMenuOpen, onSignupClick }: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onSignupClick: () => void;
}) {
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

// Hero Section Component
function HeroSection({ onSignupClick }: { onSignupClick: () => void }) {
  const stats = [
    { number: "2000+", label: "Jeux disponibles" },
    { number: "500+", label: "Clients satisfaits" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "24h/24", label: "Support technique" }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-gray-100 text-gray-700 border-gray-200">
            🎮 Révolution Arcade - Nouvelle Génération
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
            L&apos;arcade connectée
            <span className="block text-gray-700">
              nouvelle génération
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            L&apos;expérience rétro gaming réinventée pour l&apos;ère numérique. 
            Scoring en ligne, catalogue évolutif et design authentique pour particuliers et professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-gray-900 hover:bg-gray-800 text-white"
              onClick={onSignupClick}
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-gray-300 hover:bg-gray-50">
              Demander une démo
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Particulier Section Component
function ParticulierSection({ onSignupClick }: { onSignupClick: () => void }) {
  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Salon familial",
      description: "Parfait pour les soirées en famille et entre amis"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Nostalgie garantie",
      description: "Revivez vos meilleurs souvenirs d&apos;arcade"
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
              Redécouvrez le plaisir du jeu en famille avec une borne d&apos;arcade authentique dans votre salon
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

// Professionnel Section Component
function ProfessionnelSection() {
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
      description: "Enrichissez l&apos;expérience client avec un espace détente unique"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Centres de Loisirs",
      description: "Complétez votre offre avec l&apos;arcade nouvelle génération"
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
                    <p className="text-sm text-gray-600">8-12 mois selon l&apos;activité</p>
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

// Footer Component
function Footer() {
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
              L&apos;expérience rétro gaming réinventée pour l&apos;ère numérique. 
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
            <a href="#" className="hover:text-gray-900 transition-colors">Conditions d&apos;utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Signup Flow Component
type Step = 'service' | 'info' | 'address' | 'payment' | 'confirmation';

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  price: string;
  priceNumber: number;
  icon: React.ReactNode;
  popular?: boolean;
  features: string[];
}

function SignupFlow({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });

  const services: ServiceOption[] = [
    {
      id: 'purchase',
      title: 'Achat direct',
      description: 'Votre borne à vie',
      price: '2 499€',
      priceNumber: 2499,
      icon: <ShoppingCart className="h-6 w-6" />,
      popular: true,
      features: [
        'Borne d&apos;arcade complète',
        'Installation incluse',
        'Formation utilisateur',
        'Garantie 3 ans',
        'Support à vie',
        'Mises à jour gratuites'
      ]
    },
    {
      id: 'rental',
      title: 'Location longue durée',
      description: 'Engagement 12 mois minimum',
      price: '149€/mois',
      priceNumber: 149,
      icon: <Calendar className="h-6 w-6" />,
      features: [
        'Borne d&apos;arcade complète',
        'Installation incluse',
        'Maintenance comprise',
        'Mises à jour automatiques',
        'Support technique',
        'Échange possible'
      ]
    }
  ];

  const steps = [
    { id: 'service', title: 'Service', completed: currentStep !== 'service' },
    { id: 'info', title: 'Informations', completed: ['address', 'payment', 'confirmation'].includes(currentStep) },
    { id: 'address', title: 'Adresse', completed: ['payment', 'confirmation'].includes(currentStep) },
    { id: 'payment', title: 'Paiement', completed: currentStep === 'confirmation' },
    { id: 'confirmation', title: 'Confirmation', completed: false }
  ];

  const handleNext = () => {
    const stepOrder: Step[] = ['service', 'info', 'address', 'payment', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['service', 'info', 'address', 'payment', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleFinish = () => {
    // Redirection vers le backoffice RetroNova
    window.open('https://www.retronova.fr', '_blank');
    onClose();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Inscription Particulier</h2>
            <p className="text-gray-600">Configurez votre borne d&apos;arcade en quelques étapes</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step.completed ? 'bg-green-600 text-white' : 
                  currentStep === step.id ? 'bg-gray-900 text-white' : 
                  'bg-gray-200 text-gray-600'
                }`}>
                  {step.completed ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step.completed || currentStep === step.id ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step.completed ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Service Selection */}
          {currentStep === 'service' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Choisissez votre formule</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedService?.id === service.id ? 'ring-2 ring-gray-900 shadow-lg' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                        {service.popular && (
                          <Badge className="bg-gray-900 text-white">Populaire</Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                      <div className="text-3xl font-bold text-gray-900 mt-2">
                        {service.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: feature }} />
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 'info' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Vos informations personnelles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Address */}
          {currentStep === 'address' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Adresse de livraison</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    placeholder="Numéro et nom de rue"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ville *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      placeholder="Ville"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Code postal *</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData('postalCode', e.target.value)}
                      placeholder="75001"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 'payment' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Méthode de paiement</h3>
              <div className="space-y-6">
                {/* Payment Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Récapitulatif de votre commande</h4>
                  <div className="flex justify-between items-center">
                    <span>{selectedService?.title}</span>
                    <span className="font-semibold">{selectedService?.price}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">{selectedService?.price}</span>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={(e) => updateFormData('paymentMethod', e.target.value)}
                      className="text-gray-900"
                    />
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="font-medium">Carte bancaire</div>
                      <div className="text-sm text-gray-600">Paiement sécurisé par Stripe</div>
                    </label>
                  </div>
                  
                  {selectedService?.id === 'rental' && (
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        id="sepa"
                        name="payment"
                        value="sepa"
                        checked={formData.paymentMethod === 'sepa'}
                        onChange={(e) => updateFormData('paymentMethod', e.target.value)}
                        className="text-gray-900"
                      />
                      <div className="h-5 w-5 text-gray-600 flex items-center justify-center font-bold text-xs">€</div>
                      <label htmlFor="sepa" className="flex-1 cursor-pointer">
                        <div className="font-medium">Prélèvement SEPA</div>
                        <div className="text-sm text-gray-600">Pour les abonnements mensuels</div>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 'confirmation' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Inscription terminée !</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Votre demande a été envoyée avec succès. Vous allez être redirigé vers votre espace client 
                pour finaliser votre commande et suivre l&apos;installation.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">Prochaines étapes :</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Confirmation par email sous 2h</li>
                  <li>• Prise de contact dans les 24h</li>
                  <li>• Planification de l&apos;installation</li>
                  <li>• Livraison et formation utilisateur</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={currentStep === 'service' ? onClose : handleBack}
            disabled={currentStep === 'confirmation'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {currentStep === 'service' ? 'Annuler' : 'Retour'}
          </Button>
          
          <Button
            onClick={currentStep === 'confirmation' ? handleFinish : handleNext}
            disabled={currentStep === 'service' && !selectedService}
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            {currentStep === 'confirmation' ? 'Accéder à mon espace' : 'Continuer'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

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
      price: "À partir de 2 499€",
      features: ["Support à vie", "Formation incluse", "Installation comprise", "Garantie étendue"],
      badge: "Populaire"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Location",
      description: "Location flexible de 1 mois à 2 ans",
      price: "À partir de 149€/mois",
      features: ["Maintenance incluse", "Catalogue évolutif", "Flexible", "Pas d&apos;investissement"],
      badge: "Flexible"
    },
    {
      icon: <PartyPopper className="h-6 w-6" />,
      title: "Événement",
      description: "Location ponctuelle avec livraison",
      price: "À partir de 199€/jour",
      features: ["Livraison incluse", "Installation rapide", "Animation possible", "Support événement"],
      badge: "Événement"
    }
  ];

  const testimonials = [
    {
      name: "Marc D.",
      role: "Propriétaire de bar",
      content: "Nos clients adorent ! Le chiffre d&apos;affaires a augmenté de 30% depuis l&apos;installation.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Particulier",
      content: "Parfait pour les soirées en famille. La qualité est exceptionnelle !",
      rating: 5
    },
    {
      name: "Thomas L.",
      role: "Gérant de restaurant",
      content: "Installation rapide, interface intuitive. Je recommande vivement !",
      rating: 5
    }
  ];

  const handleSignupClick = () => {
    setSignupModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onSignupClick={handleSignupClick}
      />

      <HeroSection onSignupClick={handleSignupClick} />

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                Technologie de pointe, âme rétro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chaque borne embarque un Raspberry Pi 5 pour des performances fluides. 
                La connectivité WiFi permet une synchronisation en temps réel des scores et des mises à jour automatiques.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Performances optimales garanties
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Design authentique avec finitions premium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Écran haute définition 24 pouces</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Contrôles arcade professionnels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Son surround intégré</span>
                  </div>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Explorer les options
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-base text-gray-900">Raspberry Pi 5</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Performances optimales pour une expérience fluide et réactive
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Wifi className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-base text-gray-900">Connecté</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Synchronisation temps réel et mises à jour automatiques
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Trophy className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-base text-gray-900">Haute Définition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Écrans cristalins 24&quot; pour une expérience visuelle parfaite
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Star className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-base text-gray-900">Contrôles Précis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Joysticks et boutons de qualité arcade professionnelle
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Des fonctionnalités pensées pour vous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience arcade complète avec toutes les fonctionnalités modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-gray-700">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ParticulierSection onSignupClick={handleSignupClick} />
      <ProfessionnelSection />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 500 clients nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-600">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Choisissez votre expérience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plusieurs options pour s&apos;adapter à tous vos besoins et budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all hover:-translate-y-1 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-white">
                        {option.icon}
                      </div>
                    </div>
                    {option.badge && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                        {option.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{option.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {option.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">
                    {option.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 shrink-0" />
                        <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à franchir le portail ?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contactez-nous pour découvrir comment intégrer nos bornes d&apos;arcade 
              dans votre univers. Devis personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Demander un appel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-600">
                Notre équipe d&apos;experts est à votre disposition
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Téléphone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Du lundi au vendredi<br />9h - 18h</p>
                  <p className="font-semibold text-gray-900">01 23 45 67 89</p>
                </CardContent>
              </Card>

              <Card className="text-center border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Réponse sous 2h<br />en heures ouvrées</p>
                  <p className="font-semibold text-gray-900">contact@arcade-connect.fr</p>
                </CardContent>
              </Card>

              <Card className="text-center border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Showroom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Sur rendez-vous<br />Paris & Lyon</p>
                  <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                    Prendre RDV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Signup Flow Modal */}
      <SignupFlow 
        isOpen={signupModalOpen} 
        onClose={() => setSignupModalOpen(false)} 
      />
    </div>
  );
}