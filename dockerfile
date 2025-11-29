#FROM node:18-slim AS build

FROM node:20.19.6-alpine3.21 AS build

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

#FROM nginx:alpine

FROM nginx:mainline-alpine-slim


EXPOSE 80

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
