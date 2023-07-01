
echo "Setting up app..."
CURRENT_FILE_PATH=$(dirname "$0")
echo "base64 $RELEASE_KEYSTORE" | base64 -d > $CURRENT_FILE_PATH/../../app/android/app/weblend-release.keystore
echo "base64 $RELEASE_KEYSTORE_PROPERTIES" | base64 -d > $CURRENT_FILE_PATH/../../app/android/app/release-keystore.properties


