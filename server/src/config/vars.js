import 'dotenv/config';

export default {
  env: {
    production: isEnvironment('production'),
    staging: isEnvironment('staging'),
    development: isEnvironment('development')
  },
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/blender'
};

function isEnvironment (env) {
  return String(process.env.NODE_ENV).toLowerCase() === env;
}
