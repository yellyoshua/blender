# Nodejs with express server
FROM public.ecr.aws/lambda/nodejs:16.2022.09.22.12

# Create app directory
WORKDIR /app

# Install app dependencies
COPY . .

RUN npm install

# Build app
RUN npm run build

# Copy .env file
COPY .env .env

CMD ["lambda.handler"]