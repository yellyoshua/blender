import interestsController from './interests.controller';

export default [
  {
    path: '/interests',
    method: 'get',
    private: true,
    handler: interestsController.interests.find
  }
];
