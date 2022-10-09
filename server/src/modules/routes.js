import usersRoutes from './users/users.routes';
import authRoutes from './auth/auth.routes';
import profilesRoutes from './profiles/profiles.routes';
import interestsRoutes from './interests/interests.routes';
import personalitiesRoutes from './personalities/personalities.routes';

export default [
  ...usersRoutes,
  ...authRoutes,
  ...profilesRoutes,
  ...interestsRoutes,
  ...personalitiesRoutes
];
