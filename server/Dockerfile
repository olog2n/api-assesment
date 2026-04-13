# /server/Dockerfile
FROM node:18

WORKDIR /app

# Копируем manifest-файлы
COPY package*.json ./

# Устанавливаем зависимости (без маскирования ошибок)
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi && \
    npm cache clean --force

# Копируем исходный код
COPY . .

# Создаём non-root пользователя (Debian-совместимый синтаксис)
RUN groupadd -r appgroup && \
    useradd -r -g appgroup -d /app appuser && \
    chown -R appuser:appgroup /app

# Переключаемся на non-root пользователя
USER appuser

EXPOSE 5000

# Healthcheck (опционально)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/v1/contract', (r) => process.exit(r.statusCode >= 200 && r.statusCode < 400 ? 0 : 1))" || exit 1

CMD ["node", "server.js"]