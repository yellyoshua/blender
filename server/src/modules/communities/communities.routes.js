import communitiesController from './communities.controller';

export default [
  {
    path: '/communities',
    method: 'get',
    private: true,
    handler: communitiesController.communities.find
  }
];
