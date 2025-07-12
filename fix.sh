#!/bin/bash

echo "🔧 Correction de l'installation pour Next.js 15 + React 19 + Tailwind v4"
echo "======================================================================="

# Supprimer node_modules et lock files
echo "📦 Nettoyage des anciens modules..."
rm -rf node_modules
rm -f package-lock.json yarn.lock pnpm-lock.yaml

# Installer les dépendances principales
echo "📥 Installation des dépendances principales..."
npm install next@15 react@19 react-dom@19

# Installer Tailwind v4 avec PostCSS
echo "🎨 Installation de Tailwind CSS v4..."
npm install tailwindcss@4 @tailwindcss/postcss postcss

# Installer les autres dépendances avec --legacy-peer-deps si nécessaire
echo "📚 Installation des autres dépendances..."
npm install --legacy-peer-deps \
  @hookform/resolvers@^5.1.1 \
  @radix-ui/react-label@^2.1.7 \
  @radix-ui/react-navigation-menu@^1.2.13 \
  @radix-ui/react-separator@^1.1.7 \
  @radix-ui/react-slot@^1.2.3 \
  @react-three/drei@^10.5.0 \
  @react-three/fiber@^9.2.0 \
  @lenis@^1.0.42 \
  class-variance-authority@^0.7.1 \
  clsx@^2.1.1 \
  lucide-react@^0.525.0 \
  react-hook-form@^7.60.0 \
  tailwind-merge@^3.3.1 \
  three@^0.178.0 \
  zod@^4.0.5 \
  zustand@^5.0.6

# Installer motion au lieu de framer-motion
echo "🎬 Installation de Motion pour React..."
npm install motion@alpha

# Installer les devDependencies
echo "🛠️ Installation des devDependencies..."
npm install -D \
  @types/node@^20 \
  @types/react@^19 \
  @types/react-dom@^19 \
  @types/three@^0.178.1 \
  typescript@^5 \
  eslint@^9 \
  eslint-config-next@15

echo "✅ Installation terminée!"
echo ""
echo "⚠️  Actions importantes à effectuer :"
echo "1. Remplacer toutes les importations 'framer-motion' par 'motion/react'"
echo "2. Vérifier que postcss.config.mjs utilise '@tailwindcss/postcss'"
echo "3. Mettre à jour globals.css avec la syntaxe @import 'tailwindcss'"
echo "4. Tester l'application avec: npm run dev"