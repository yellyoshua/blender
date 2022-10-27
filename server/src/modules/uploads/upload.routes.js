import uploadController from './upload.controller';

export default [
  {
    path: '/upload',
    method: 'post',
    private: true,
    handler: uploadController.upload
  }
];
