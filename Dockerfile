# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# 1. Remove the default Nginx index page to avoid confusion
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy the React build output to the standard Nginx directory
# Note: Ensure you use 'dist' (Vite) or 'build' (CRA) correctly
COPY --from=build /app/dist /usr/share/nginx/html

# 3. Copy your custom nginx config to overwrite the default
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]