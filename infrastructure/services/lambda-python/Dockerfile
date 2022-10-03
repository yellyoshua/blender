# Nodejs with express server
FROM public.ecr.aws/lambda/python:3.8

ARG FUNCTION_DIR="/var/task"

# Create app directory
WORKDIR ${FUNCTION_DIR}

# Install app dependencies
COPY . .

# Install dependencies

RUN pip install -r requirements.txt && \
    pip install awsgi

CMD ["lambda.handler"]