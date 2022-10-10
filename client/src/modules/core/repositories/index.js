import interestsRepository from './interests.repository';
import authRepository from './auth.repository';
import usersRepository from './users.repository';
import profilesRepository from './profiles.repository';

export default {
  interests: interestsRepository,
  auth: authRepository,
  users: usersRepository,
  profiles: profilesRepository
};
