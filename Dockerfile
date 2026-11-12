FROM node:26.13.1-trixie-slim@sha256:e6bedef217677b276c591795e169840edd9096dbf13f29df8ef8d1856b8820bc AS node-base
FROM node-base AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --global npm@12.2.2 && npm ci

COPY . .
RUN npm run build && npm prune --omit=dev

FROM node-base
WORKDIR /app

ENV NODE_ENV=production
COPY --from=build /app/out ./out
COPY --from=build /app/node_modules ./node_modules

USER node
EXPOSE 3000
CMD ["./node_modules/.bin/serve", "out"]
