import usersModel from '@/modules/users/users.model';

export default {
  github: async () => {
    await usersModel.find({});
    return 'github';
  },
  google: () => {
    return 'google';
  }
};
