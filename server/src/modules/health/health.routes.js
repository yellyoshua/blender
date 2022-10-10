import healthController from './health.controller';

export default [
  {
    path: '/health',
    method: 'get',
    private: false,
    handler: healthController.getHealth
  }
];
