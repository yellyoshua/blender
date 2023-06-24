import '../modules/models';
import mongoose from 'mongoose';

export default {
  connect (url, {disableLogs = false} = {}) {
    return mongoose.connect(url, {
      useNewUrlParser: true
    }).then((db) => {
      if (!disableLogs) {
        console.log('database url :', url.split(''));
        console.log(`Connected to MongoDB at '${db.connection.name}' database`);
      }
        
      return db;
    });
  }
};
