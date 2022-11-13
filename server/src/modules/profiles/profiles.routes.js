import {updateProfileSchema} from './schemas';
import profilesController from './profiles.controller';

export default [
  {
    path: '/profiles',
    method: 'get',
    private: true,
    handler: profilesController.find
  },
  {
    path: '/profiles',
    method: 'put',
    private: true,
    schema: updateProfileSchema,
    handler: profilesController.update
  }
];
