# FROM node:18-slim

# ENV NODE_OPTIONS=--openssl-legacy-provider

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]


FROM node:18-slim AS build

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]