import usersController from './users.controller.js';

export default [
  {
    path: '/users',
    method: 'get',
    private: true,
    handler: usersController.users.find
  }
];
