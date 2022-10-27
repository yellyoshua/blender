import profilesModel from './profiles.model';
import usersModel from '../users/users.model';
import attach_profile_location from './services/attach_profile_location';
import attach_profile_interests from './services/attach_profile_interests';
import attach_profile_personalities from './services/attach_profile_personalities';

export default {
  profiles: {
    ...profilesModel,
    update: async (filter, data, req) => {
      const [user] = await usersModel.find({
        _id: req.auth_payload.user_id
      }, {populate: 'profile'});

      const profile_with_location = await attach_profile_location(data, req);
      const profile_with_interests = await attach_profile_interests(profile_with_location);
      const profile_with_personalities = await attach_profile_personalities(profile_with_interests);

      return profilesModel.update({_id: user.profile._id}, profile_with_personalities, {dot_notation: true});
    }
  }
};
