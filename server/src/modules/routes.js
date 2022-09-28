import usersRoutes from './users/users.routes.js';
import authRoutes from './auth/auth.routes.js';
import profilesRoutes from './profiles/profiles.routes.js';

export default [
  ...usersRoutes,
  ...authRoutes,
  ...profilesRoutes
];
