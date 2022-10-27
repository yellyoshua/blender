import interestsService from './interests.service';
import authService from './auth.service';
import usersService from './users.service';
import profilesService from './profiles.service';
import personalitiesService from './personalities.service';
import discoverService from './discover.service';
import uploadService from './upload.service';
import postsService from './posts.service';

const services = {
  interests: interestsService,
  auth: authService,
  users: usersService,
  profiles: profilesService,
  personalities: personalitiesService,
  discover: discoverService,
  upload: uploadService,
  posts: postsService
};

export default services;
