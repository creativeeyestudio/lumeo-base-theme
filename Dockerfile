FROM node:20-alpine

WORKDIR /app

# Copier uniquement le package.json
COPY package.json package-lock.json* ./

# Installer les dépendances DANS le container
RUN npm install

# Copier le reste du code
COPY . .

# Mode développement (watch)
CMD ["npm", "run", "dev"]
