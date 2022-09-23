import 'dotenv/config';

export default {
  env: {
    production: process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production',
    staging: process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'staging'
  },
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/test'
};
