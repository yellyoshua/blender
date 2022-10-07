# lambda entry point for python
import awsgi
import app

# Should app file export app variable
# with Flask app instance in it
# app.py

# Reference
#
# https://github.com/aspittel/britney-api/blob/main/amplify/backend/function/britneyspearsapi/src/index.py

def handler(event, context):
  return awsgi.response(app.app, event, context)
