import authController from './auth.controller';

export default [
  {
    path: '/auth/google',
    method: 'get',
    private: false,
    handler: authController.google
  },
  {
    path: '/auth/github',
    method: 'get',
    private: false,
    handler: authController.github
  }
];
