import locationService from '../../shared/services/location.service';
import requestService from '../../shared/services/request.service';


export default async function attach_profile_location (profile_changes, req) {
  const location_service = locationService();

  const want_done_geolocation = Boolean(profile_changes.tutorial &&
    profile_changes.tutorial.done_geolocation);
    
  const want_update_geolocation = Boolean(profile_changes.geolocation &&
      profile_changes.geolocation.latitude &&
      profile_changes.geolocation.longitude);
 
  const profile = JSON.parse(JSON.stringify(profile_changes));
  if (want_update_geolocation) {
    const {latitude, longitude} = profile.geolocation;
    const location = await location_service.lat_long_based(latitude, longitude);

    profile.location_country = location.country;
    profile.location_city = location.city;

    return profile;
  }

  if (want_done_geolocation) {
    const ip = requestService.get_ip(req);
    const location = await location_service.ip_based(ip);

    profile.location_country = location.country;
    profile.location_city = location.city;
    return profile;
  }

  return profile;
}
