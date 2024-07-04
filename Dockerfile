# Etapa de construccion
FROM node:16.17 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicacion
COPY . .

# Construir la aplicacion
RUN npm run build

# Etapa de produccion
FROM nginx:alpine

# Copiar los archivos de construccion al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que Nginx escucha
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
