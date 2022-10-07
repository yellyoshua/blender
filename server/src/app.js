import './config/globals';
import './config/signals';
import vars from './config/vars';
import app from './config/express';
import mongoose from './config/mongoose';

let database_connect = () => {
  return mongoose.connect(vars.databaseURL);
};

if (!process.env.LAMBDA_MODE) {
  database_connect()
  .then(() => {
    app.listen(vars.port, () => {
      logger.info(`Server started on port ${vars.port}`);
    });
  });

  database_connect = null;
}

export const db_connect = database_connect;

export default app;
