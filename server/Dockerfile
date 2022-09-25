# Nodejs with express server
FROM node:17.4.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY . .

RUN npm install

# Build app
RUN npm run build

CMD ["lambda.handler"]