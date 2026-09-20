FROM node:22-alpine

LABEL org.opencontainers.image.source="https://github.com/abdihakinbulshawi5/node-postgres-lab"

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
