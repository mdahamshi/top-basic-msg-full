
# Stage 1: build React app
FROM node:20 AS builder
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client/ .
RUN npm run build



# Stage 2: serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

