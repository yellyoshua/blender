
echo "Setting up app..."
CURRENT_FILE_PATH=$(dirname "$0")
echo "$RELEASE_KEYSTORE" | base64 -d > $CURRENT_FILE_PATH/../../app/android/app/weblend-release.keystore
echo "$RELEASE_KEYSTORE_PROPERTIES" | base64 -d > $CURRENT_FILE_PATH/../../app/android/app/release-keystore.properties


