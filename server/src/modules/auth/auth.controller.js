import usersModel from '../users/users.model';

export default {
  github: async () => {
    await usersModel.find({});
    return 'github';
  },
  google: () => {
    return 'google';
  }
};
