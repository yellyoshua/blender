import '../modules/models';
import mongoose from 'mongoose';

export default {
  connect (url) {
    return mongoose.connect(url, {
      useNewUrlParser: true
    }).then((db) => logger.info(`Connected to MongoDB at '${db.connection.name}' database`));
  }
};
