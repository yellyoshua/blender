import authController from './auth.controller';

export default [
  {
    path: '/auth/google',
    method: 'get',
    private: false,
    handler: authController.google
  },
  {
    path: '/auth/google/callback',
    method: 'get',
    private: false,
    handler: authController.googleCallback
  }
];
