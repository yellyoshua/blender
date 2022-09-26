# Nodejs with express server
FROM public.ecr.aws/lambda/nodejs:16.2022.09.22.12

ARG FUNCTION_DIR="/var/task"

# Create app directory
WORKDIR ${FUNCTION_DIR}

# Install app dependencies
COPY . .

RUN npm install

# Build app
RUN npm run build

CMD ["lambda.handler"]