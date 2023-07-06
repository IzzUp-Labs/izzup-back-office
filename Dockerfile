FROM node:lts-alpine as builder

WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM nginx:alpine
COPY app.conf /etc/nginx/conf.d/

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80