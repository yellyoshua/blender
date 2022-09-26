// const app = require('./dist/app.js').default;

exports.handler = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!'
    })
  };
};
