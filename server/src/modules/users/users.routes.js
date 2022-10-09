import usersController from './users.controller.js';
import * as schemas from './schemas';

export default [
  {
    path: '/users',
    method: 'get',
    private: true,
    handler: usersController.users.find
  },
  {
    path: '/users',
    method: 'put',
    private: true,
    schema: schemas.createUserSchema,
    handler: usersController.users.update
  }
];
