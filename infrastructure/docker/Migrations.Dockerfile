# Nodejs with express server GCP
FROM node:16.13.0-alpine3.14

ARG APP_DIR="/weblend_app"

# Create app directory
WORKDIR ${APP_DIR}

# Install app dependencies
COPY . .

RUN npm install

# Keep the container running

CMD ["tail", "-f", "/dev/null"]