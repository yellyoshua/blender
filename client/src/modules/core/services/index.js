import interestsService from './interests.service';
import authService from './auth.service';
import usersService from './users.service';

const services = {
  interests: interestsService,
  auth: authService,
  users: usersService
};

export default services;
