import profilesModel from './profiles.model';
import usersModel from '../users/users.model';

export default {
  profiles: {
    ...profilesModel,
    update: async (filter, data, req) => {
      const {user_id} = req.auth_payload;
      const [user] = await usersModel.find({_id: user_id});
      return profilesModel.update({_id: user.profile}, data, {dot_notation: true});
    }
  }
};
