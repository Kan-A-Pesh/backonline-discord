FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build


FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --only=production

COPY --from=builder /app/dist ./dist

ENTRYPOINT [ "pnpm", "start" ]