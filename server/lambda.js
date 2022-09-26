const app = require('./dist/app.js').default;
const db_connect = require('./dist/app.js').db_connect;
const serverlessExpressHandler = require('@vendia/serverless-express');

let serverlessExpressInstance = null;

async function setup (event, context) {
  await db_connect();
  serverlessExpressInstance = serverlessExpressHandler({app});
  return serverlessExpressInstance(event, context);
}

exports.handler = (event, context) => {
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context);
  }

  return setup(event, context);
};
