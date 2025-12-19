# Image Node pour développement
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copier uniquement package.json + package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port si besoin (optionnel)
EXPOSE 3000

# Commande par défaut (peut être surchargée par docker-compose)
CMD ["npm", "run", "dev"]
