import profilesModel from './profiles.model';
import usersModel from '../users/users.model';
import attach_profile_location from './services/attach_profile_location';

export default {
  profiles: {
    ...profilesModel,
    update: async (filter, data, req) => {
      const {user_id} = req.auth_payload;
      const [user] = await usersModel.find({_id: user_id});

      const profile_with_location = await attach_profile_location(data, req);

      return profilesModel.update({_id: user.profile}, profile_with_location, {dot_notation: true});
    }
  }
};
