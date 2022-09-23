import usersModel from './users.model';

export default {
  users: usersModel,
  getUsers: usersModel.find
};
