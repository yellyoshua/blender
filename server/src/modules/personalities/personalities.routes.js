import personalitiesController from './personalities.controller';

export default [
  {
    path: '/personalities',
    method: 'get',
    private: true,
    handler: personalitiesController.personalities.find
  }
];
