import 'dotenv/config';

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/test'
};
