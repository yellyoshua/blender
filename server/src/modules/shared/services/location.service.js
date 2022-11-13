/* eslint-disable id-length */
import _ from 'underscore';
import {Client as MapsClient} from '@googlemaps/google-maps-services-js';
import request from '../lib/request';

function sanitize_ip_location (location) {
  return {
    city: location.city,
    country: location.country_name
  };
}

function sanitize_reverse_geocode (response) {
  const location = response.data.results[0].address_components;
  const country = _(location).find((component) => {
    return _.contains(component.types, 'country');
  });
  const city = _(location).find((component) => {
    return _.contains(component.types, 'locality');
  });

  return {
    city: city.long_name,
    country: country.long_name,
    country_code: country.short_name
  };
}

export default function location_service () {
  const maps_client = new MapsClient({});
  return {
    ip_based: async (ip) => {
      const data = await request.get(`https://ipapi.co/${ip}/json/`);
      return sanitize_ip_location(data);
    },
    lat_long_based: async (latitude, longitude) => {
      const response = await maps_client.reverseGeocode({
        params: {
          latlng: [latitude, longitude],
          key: process.env.GOOGLE_MAPS_API_KEY
        },
        timeout: 1000
      });
      return sanitize_reverse_geocode(response);
    }
  };
}
