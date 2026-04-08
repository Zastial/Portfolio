# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --progress=false

FROM deps AS builder

COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app

COPY --chown=app:app --from=builder /app/package*.json ./
COPY --chown=app:app --from=builder /app/node_modules ./node_modules

COPY --chown=app:app --from=builder /app/dist ./dist
COPY --chown=app:app --from=builder /app/public ./public
COPY --chown=app:app --from=builder /app/astro.config.mjs ./astro.config.mjs
USER app

EXPOSE 4321
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]
