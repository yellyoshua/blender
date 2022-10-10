import profilesController from './profiles.controller';

export default [
  {
    path: '/profiles',
    method: 'get',
    private: true,
    handler: profilesController.profiles.find
  },
  {
    path: '/profiles',
    method: 'put',
    private: true,
    handler: profilesController.profiles.update
  }
];
