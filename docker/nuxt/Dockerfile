FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY app/ ./

# Открываем порт
EXPOSE 3000

# Запускаем в режиме разработки
CMD ["npm", "run", "dev"]