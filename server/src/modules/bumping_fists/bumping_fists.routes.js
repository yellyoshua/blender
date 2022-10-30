import bumpingFistsController from './bumping_fists.controller';

export default [
  {
    path: '/bumping_fists',
    method: 'get',
    private: true,
    handler: bumpingFistsController.find
  },
  {
    path: '/bumping_fists',
    method: 'post',
    private: true,
    handler: bumpingFistsController.create
  }
];
