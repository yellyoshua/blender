import mongoose from 'mongoose';

export default {
  connect (url) {
    return mongoose.connect(url, {
      useNewUrlParser: true
    }).then(() => logger.info('Connected to MongoDB'));
  }
};
