FROM node:16.13.0-alpine3.11

# Папка приложения
ARG APP_DIR=/usr/app
WORKDIR ${APP_DIR}

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование файлов проекта
COPY . .

# Запуск проекта
CMD npm run start