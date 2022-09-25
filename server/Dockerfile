# Nodejs with express server
FROM node:17.4.0-alpine AS build_base

# Create app directory
WORKDIR /app

# Install app dependencies
COPY . .

RUN npm install

# Build app
RUN npm run build

ENV PORT=4000

EXPOSE ${PORT}

CMD [ "npm", "start" ]