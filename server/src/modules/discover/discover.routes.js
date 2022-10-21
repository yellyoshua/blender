import discoverController from './discover.controller';

export default [
  {
    path: '/discover',
    method: 'get',
    private: true,
    handler: discoverController.get
  }
];
