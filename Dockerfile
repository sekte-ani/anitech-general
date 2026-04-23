FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

EXPOSE 3068

ENV NODE_ENV=production

CMD ["npm", "run", "start", "--", "-p", "3068"]
