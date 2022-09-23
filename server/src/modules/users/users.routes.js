import usersController from './users.controller.js';
import * as schemas from './schemas';

export default [
  {
    path: '/users',
    method: 'get',
    private: false,
    handler: usersController.getUsers
  },
  {
    path: '/users',
    method: 'post',
    private: false,
    schema: schemas.createUserSchema,
    handler: usersController.users.create
  }
];
