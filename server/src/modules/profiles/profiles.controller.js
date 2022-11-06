/* eslint-disable require-atomic-updates */
import profilesModel from './profiles.model';
import usersModel from '../users/users.model';
import attach_profile from './services/attach_profile';

export default {
  find: profilesModel.find,
  update: async (filter, data, req) => {
    const [user] = await usersModel.find({
      _id: req.auth_payload.user_id
    }, {populate: 'profile'});

    if (attach_profile.want_update_geolocation(data)) {
      const location = await attach_profile.get_geolocation(data);
      data.location_country = location.location_country;
      data.location_city = location.location_city;
    }

    if (attach_profile.want_done_geolocation(data)) {
      const location = await attach_profile.get_ip_geolocation(req);
      data.location_country = location.location_country;
      data.location_city = location.location_city;
    }

    if (attach_profile.want_update_interests(data)) {
      data.interests = await attach_profile.get_interests(data);
    }

    if (attach_profile.want_update_personalities(data)) {
      data.personalities = await attach_profile.get_personalities(data);
    }

    return profilesModel.update({_id: user.profile._id}, data, {dot_notation: true});
  }
};
