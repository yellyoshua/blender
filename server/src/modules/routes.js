import usersRoutes from './users/users.routes.js';
import authRoutes from './auth/auth.routes.js';

export default [
  ...usersRoutes,
  ...authRoutes
];
