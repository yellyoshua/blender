import communitiesController from './communities.controller';

export default [
  {
    path: '/communities',
    method: 'get',
    private: true,
    handler: communitiesController.communities.find
  },
  {
    path: '/communities',
    method: 'post',
    private: true,
    handler: communitiesController.communities.create
  }
];
