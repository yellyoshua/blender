import usersController from './users.controller.js';

export default [
  {
    path: '/users',
    method: 'get',
    private: true,
    handler: usersController.find
  },
  {
    path: '/me',
    method: 'get',
    private: true,
    handler: usersController.find_me
  },
  {
    path: '/me',
    method: 'put',
    private: true,
    handler: usersController.update_me
  }
];
