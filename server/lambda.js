const app = require('./dist/app.js').default;
const serverlessExpressHandler = require('@vendia/serverless-express');

exports.handler = serverlessExpressHandler({app});
