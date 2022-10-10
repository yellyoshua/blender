import interestsService from './interests.service';
import authService from './auth.service';
import usersService from './users.service';
import profilesService from './profiles.service';

const services = {
  interests: interestsService,
  auth: authService,
  users: usersService,
  profiles: profilesService
};

export default services;
