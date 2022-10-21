import usersRoutes from './users/users.routes';
import authRoutes from './auth/auth.routes';
import profilesRoutes from './profiles/profiles.routes';
import interestsRoutes from './interests/interests.routes';
import personalitiesRoutes from './personalities/personalities.routes';
import healthRoutes from './health/health.routes';
import discoverRoutes from './discover/discover.routes';
import bumpingFistsRoutes from './bumping_fists/bumping_fists.routes';
import communitiesRoutes from './communities/communities.routes';

export default [
  ...usersRoutes,
  ...authRoutes,
  ...profilesRoutes,
  ...interestsRoutes,
  ...personalitiesRoutes,
  ...healthRoutes,
  ...discoverRoutes,
  ...bumpingFistsRoutes,
  ...communitiesRoutes
];
