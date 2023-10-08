# base
FROM imbios/bun-node:18-alpine AS base
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile


# builder
FROM base AS builder
WORKDIR /app
COPY . .

RUN bun run build


# runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 8080

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN mkdir .next

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static


EXPOSE 8080


CMD ["node", "server.js"]