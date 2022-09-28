# lambda entry point for python

import app

def handler(event, context):
    app.main(event, context)
