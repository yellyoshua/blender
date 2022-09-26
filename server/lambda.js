const express = require('express');
const app = express();
const serverlessExpressHandler = require('@vendia/serverless-express');
// const app = require('./dist/app.js').default;


const router = express.Router();

router.get('/api/users', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.use('/', router);

exports.handler = serverlessExpressHandler({app});
