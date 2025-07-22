# Utiliser l'image officielle Node.js Alpine (plus légère)
FROM node:20-alpine AS base

# Installer les dépendances nécessaires pour Alpine
RUN apk add --no-cache libc6-compat

# Définir le répertoire de travail
WORKDIR /app

# Étape 1: Installer toutes les dépendances (dev + prod)
FROM base AS deps

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer TOUTES les dépendances (nécessaires pour le build)
RUN npm ci && npm cache clean --force

# Étape 2: Build de l'application
FROM base AS builder

WORKDIR /app

# Copier les dépendances depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules

# Copier le code source (y compris tsconfig.json pour les alias de chemins)
COPY . .

# Vérifier que les composants UI existent
RUN ls -la src/components/ui/ || echo "⚠️ Dossier src/components/ui/ manquant"

# Variables d'environnement pour le build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build de l'application
RUN npm run build

# Étape 3: Installer seulement les dépendances de production
FROM base AS production-deps

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer seulement les dépendances de production
RUN npm ci --only=production && npm cache clean --force

# Étape 4: Image de production finale
FROM base AS runner

WORKDIR /app

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les dépendances de production
COPY --from=production-deps /app/node_modules ./node_modules

# Copier les fichiers nécessaires
COPY --from=builder /app/public ./public

# Créer le répertoire .next avec les bonnes permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copier les fichiers buildés avec les bonnes permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Variables d'environnement
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Exposer le port
EXPOSE 3000

# Changer vers l'utilisateur non-root
USER nextjs

# Commande de démarrage
CMD ["node", "server.js"]