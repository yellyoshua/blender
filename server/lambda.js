const serverlessExpressHandler = require('serverless-express/handler');
const app = require('./dist/server');
exports.handler = serverlessExpressHandler(app);
