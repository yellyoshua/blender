import interestsService from './interests.service';
import authService from './auth.service';
import usersService from './users.service';
import profilesService from './profiles.service';
import personalitiesService from './personalities';

const services = {
  interests: interestsService,
  auth: authService,
  users: usersService,
  profiles: profilesService,
  personalities: personalitiesService
};

export default services;
