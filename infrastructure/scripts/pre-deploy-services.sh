#!/usr/bin/env bash

# infrastructure services directory
SCRIPT_FILE_DIR=$(dirname "$0")
SERVICES_INFRASTRUCTURE_DIR="${SCRIPT_FILE_DIR}/../services"

# services path
SERVICES_PATH="$SCRIPT_FILE_DIR/../../services"

## services list
SERVICE_LIST=$(ls -1 "$SERVICES_PATH/")
SERVICE_LIST=($SERVICE_LIST)

# avaliable service types
AVALIABLE_SERVICE_TYPES=(
    "lambda-javascript"
    "lambda-python"
    "lambda-go"
)

# check if service type is avaliable
for SERVICE in "${SERVICE_LIST[@]}"; do
    SERVICE_TYPE=$(cat $SERVICES_PATH/$SERVICE/.service-type)

    if [[ ! " ${AVALIABLE_SERVICE_TYPES[@]} " =~ " ${SERVICE_TYPE} " ]]; then
        echo "Service type $SERVICE_TYPE is not avaliable"
        echo "Error: Service $SERVICE is not avaliable"
        exit 1
    fi
done

# copying infrastructure files for each service
for SERVICE in "${SERVICE_LIST[@]}"; do
    SERVICE_TYPE=$(cat $SERVICES_PATH/$SERVICE/.service-type)
    
    cp -r $SERVICES_INFRASTRUCTURE_DIR/$SERVICE_TYPE/* $SERVICES_PATH/$SERVICE/

    echo "Copying deploy files for $SERVICE of type $SERVICE_TYPE"
done
