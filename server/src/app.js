import './config/globals';
import './config/signals';
import vars from './config/vars';
import app from './config/express';
import mongoose from './config/mongoose';

mongoose.connect(vars.databaseURL).
then(() => {
  logger.info(`Server started on port ${vars.port}`);
});

if (!process.env.LAMBDA_MODE) {
  app.listen(vars.port, () => {
    logger.info(`Server started on port ${vars.port}`);
  });
}

export default app;
