import usersRoutes from './users/users.routes';
import authRoutes from './auth/auth.routes';
import profilesRoutes from './profiles/profiles.routes';
import interestsRoutes from './interests/interests.routes';
import personalitiesRoutes from './personalities/personalities.routes';
import healthRoutes from './health/health.routes';

export default [
  ...usersRoutes,
  ...authRoutes,
  ...profilesRoutes,
  ...interestsRoutes,
  ...personalitiesRoutes,
  ...healthRoutes
];
