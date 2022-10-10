import '../modules/models';
import mongoose from 'mongoose';

export default {
  connect (url) {
    return mongoose.connect(url, {
      useNewUrlParser: true
    }).then((db) => {
      console.log(`Connected to MongoDB at '${db.connection.name}' database`);
      return db;
    });
  }
};
