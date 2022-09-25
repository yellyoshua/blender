const serverlessExpressHandler = require('serverless-express/handler');
const app = require('./dist/app.js');
exports.handler = serverlessExpressHandler(app);
