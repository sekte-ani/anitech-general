FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies with clean npm cache
RUN npm cache clean --force && \
    npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]