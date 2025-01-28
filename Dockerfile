# React 개발 서버만 실행
FROM node:22.13.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]