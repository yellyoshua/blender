# Nodejs with express server GCP
FROM node:16.13.0-alpine3.14

ARG FUNCTION_DIR="/blender_app"

# Create app directory
WORKDIR ${FUNCTION_DIR}

# Install app dependencies
COPY . .

RUN npm install

# Build app
RUN npm run build

CMD ["node", "dist/app.js"]