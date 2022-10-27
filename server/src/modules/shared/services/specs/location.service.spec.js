import locationService from '../location.service';
import {describe, expect, jest, beforeEach} from '@jest/globals';
import needle from 'needle';
import {Client as MapsClient} from '@googlemaps/google-maps-services-js';

jest.mock('needle');
jest.mock('@googlemaps/google-maps-services-js');

describe('locationService', () => {
  describe('ip based', () => {
    beforeEach(() => {
      needle.mockImplementation(() => {
        return {
          body: {
            city: 'city',
            country_name: 'country_name'
          }
        };
      });
    });
  
    afterEach(() => {
      needle.mockClear();
    });
  
    it('should base on ip', async () => {
      const ip = '1.1.1.1';
      const service = locationService();
  
      const result = await service.ip_based(ip);
  
      expect(result.country).toEqual('country_name');
      expect(result.city).toBe('city');
      expect(needle).toBeCalledWith('get', `https://ipapi.co/${ip}/json/`);
    });
  });

  describe('lat long based', () => {
    beforeEach(() => {
      MapsClient.mockImplementation(() => {
        return {
          reverseGeocode: () => {
            return {
              data: {
                results: [
                  {
                    address_components: [
                      {
                        long_name: 'city',
                        types: ['locality']
                      },
                      {
                        long_name: 'country',
                        short_name: 'country_code',
                        types: ['country']
                      }
                    ]
                  }
                ]
              }
            };
          }
        };
      });
    });
  
    afterEach(() => {
      MapsClient.mockClear();
    });

    it('should base on lat long', async () => {
      const latitude = -33.8688;
      const longitude = 151.2093;
      const service = locationService();
  
      const result = await service.lat_long_based(latitude, longitude);
  
      expect(result.country).toEqual('country');
      expect(result.city).toBe('city');
    });
  });
});
