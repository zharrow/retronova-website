'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  ShoppingCart, 
  Calendar, 
  CheckCircle, 
  CreditCard,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

interface SignupFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export function SignupFlow({ isOpen, onClose }: SignupFlowProps) {
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
        'Borne d\'arcade complète',
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
        'Borne d\'arcade complète',
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
            <p className="text-gray-600">Configurez votre borne d'arcade en quelques étapes</p>
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
                            {feature}
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
                pour finaliser votre commande et suivre l'installation.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">Prochaines étapes :</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Confirmation par email sous 2h</li>
                  <li>• Prise de contact dans les 24h</li>
                  <li>• Planification de l'installation</li>
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