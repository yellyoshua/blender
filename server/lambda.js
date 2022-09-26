const serverlessExpressHandler = require('serverless-express/handler');
const app = require('./dist/app.js').default;
console.log(app);

exports.handler = (event, context) => {
  console.log('event, context :', event, context);
  return serverlessExpressHandler(app)(event, context);
};
