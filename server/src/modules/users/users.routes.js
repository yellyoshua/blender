import usersController from './users.controller.js';
import user_data from './user_data.controller.js';

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
  },
  {
    path: '/user_data',
    method: 'get',
    private: true,
    handler: user_data
  }
];
