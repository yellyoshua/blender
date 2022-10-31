# !/bin/bash~

# Script that executes the migration in each pod of the cluster

CURRENT_FILE_PATH=$(dirname "$0")
DEPLOYMENT_LABEL="weblend-migrations"
MIGRATION_NUMBER=$1

# Check if the migration number was passed as argument
if [ -z "$MIGRATION_NUMBER" ]; then
    echo "Migration number not passed as argument"
    exit 1
fi

# Check if secret "weblend-migrations-config" exists
if ! kubectl get secret weblend-migrations-config > /dev/null 2>&1; then
  echo "Secret 'weblend-migrations-config' does not exist"
  kubectl create secret generic weblend-migrations-config --from-literal=
else
  echo "Secret 'weblend-migrations-config' already exists"
  kubectl update secret generic weblend-migrations-config --from-literal=
fi

echo "Creating deployment for migration..."
kubectl apply -f $CURRENT_FILE_PATH/../infrastructure/migrations/01-deployment.yaml
kubectl apply -f $CURRENT_FILE_PATH/../infrastructure/migrations/02-autoscaling.yaml

echo "Waiting for deployment to be ready..."

# Wait for the pods to be ready
kubectl wait --for=condition=ready pod -l app=$DEPLOYMENT_LABEL --timeout=300s

# Execute the migration
PODS=$(kubectl get pods -l app=$DEPLOYMENT_LABEL -o jsonpath='{.items[*].metadata.name}')

echo "Executing migration $MIGRATION_NUMBER in ${#PODS[@]} pods"

for POD in $PODS; do
  kubectl exec $POD -- npm run migration:execute $MIGRATION_NUMBER
done

# Wait for the pods to complete the migration
kubectl wait --for=condition=ready pod -l app=$DEPLOYMENT_LABEL --timeout=300s

echo "Migration $MIGRATION_NUMBER executed successfully"

echo "Deleting deployment for migration..."

# Delete the deployment
kubectl delete -f $CURRENT_FILE_PATH/../infrastructure/migrations/01-deployment.yaml
kubectl delete -f $CURRENT_FILE_PATH/../infrastructure/migrations/02-autoscaling.yaml

echo "Deployment deleted"
