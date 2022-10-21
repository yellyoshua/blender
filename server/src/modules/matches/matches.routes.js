import matchesController from './matches.controller';

export default [
  {
    path: '/matches',
    method: 'get',
    private: true,
    handler: matchesController.matches.get
  }
];
