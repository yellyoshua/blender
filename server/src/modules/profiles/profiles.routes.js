import interestsController from './interests.controller';
import personalitiesController from './personalities.controller';

export default [
  {
    path: '/interests',
    method: 'get',
    private: false,
    handler: interestsController.interests.find
  },
  {
    path: '/personalities',
    method: 'get',
    private: false,
    handler: personalitiesController.personalities.find
  }
];
