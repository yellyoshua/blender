import interestsRepository from './interests.repository';
import authRepository from './auth.repository';
import usersRepository from './users.repository';

export default {
  interests: interestsRepository,
  auth: authRepository,
  users: usersRepository
};
