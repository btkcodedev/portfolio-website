FROM node:26.13.1-trixie-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --global npm@12.2.2 && npm ci

COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:26.13.1-trixie-slim
WORKDIR /app

ENV NODE_ENV=production
COPY --from=build /app/out ./out
COPY --from=build /app/node_modules ./node_modules

USER node
EXPOSE 3000
CMD ["./node_modules/.bin/serve", "out"]
