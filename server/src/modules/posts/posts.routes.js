import postsController from './posts.controller';

export default [
  {
    path: '/posts',
    method: 'get',
    private: true,
    handler: postsController.find
  },
  {
    path: '/posts',
    method: 'post',
    private: true,
    handler: postsController.create
  },
  {
    path: '/posts',
    method: 'put',
    private: true,
    handler: postsController.update
  },
  {
    path: '/posts',
    method: 'delete',
    private: true,
    handler: postsController.delete
  }
];
