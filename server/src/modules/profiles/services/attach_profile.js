import _ from 'underscore';
import interestsModel from '../../interests/interests.model';
import personalitiesModel from '../../personalities/personalities.models';
import locationService from '../../shared/services/location.service';
import requestService from '../../shared/services/request.service';
import {toObjectId, toString} from '../../shared/utils';

const location_service = locationService();

export default {
  want_update_geolocation (profile_changes = {}) {
    return Boolean(profile_changes.geolocation &&
      profile_changes.geolocation.latitude &&
      profile_changes.geolocation.longitude);
  },
  want_done_geolocation (profile_changes = {}) {
    return Boolean(profile_changes.tutorial &&
      profile_changes.tutorial.done_geolocation &&
      !this.want_update_geolocation(profile_changes));
  },
  want_update_interests (profile_changes = {}) {
    return Boolean(profile_changes.interests && 
      profile_changes.interests.length);
  },
  want_update_personalities (profile_changes = {}) {
    return Boolean(profile_changes.personalities &&
      profile_changes.personalities.length);
  },
  async get_geolocation (profile_changes = {}) {
    const {latitude, longitude} = profile_changes.geolocation;
    const location = await location_service.lat_long_based(latitude, longitude);

    return {
      location_country: location.country,
      location_city: location.city
    };
  },
  async get_ip_geolocation (req) {
    const ip = requestService.get_ip(req);
    const location = await location_service.ip_based(ip);

    
    return {
      location_country: location.country,
      location_city: location.city
    };
  },
  async get_interests (profile) {
    const raw_interests = _(profile.interests).clone();

    const interests_found = await interestsModel.find({
      _id: {$in: toObjectId(raw_interests)}
    });

    return unique_arr_object_id(interests_found);
  },
  async get_personalities (profile) {
    const raw_personalities = _(profile.personalities).clone();

    const personalities_found = await personalitiesModel.find({
      _id: {$in: toObjectId(raw_personalities)}
    });

    return unique_arr_object_id(personalities_found);
  }
};

function unique_arr_object_id (arr) {
  return _(arr)
  .chain()
  .compact()
  .pluck('_id')
  .map(toString)
  .uniq()
  .map(toObjectId)
  .value();
}
