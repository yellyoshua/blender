import locationService from '../../../shared/services/location.service';
import requestService from '../../../shared/services/request.service';
import {describe, beforeEach, afterEach, it, jest, expect} from '@jest/globals';
import attach_profile from '../attach_profile';

jest.mock('../../../shared/services/location.service');
jest.mock('../../../shared/services/request.service');

fdescribe('attach_profile', () => {
  describe('When location', () => {
    beforeEach(() => {
      requestService.get_ip = jest.fn().mockReturnValue('1.1.1.1');
      locationService.mockImplementation(() => ({
        ip_based: jest.fn().mockResolvedValue({
          country: 'country',
          city: 'city'
        })
      }));
    });

    afterEach(() => {
      locationService.mockClear();
      requestService.get_ip.mockClear();
    });

    // it('should return profile without changes', async () => {
    //   const profile_changes = {
    //     tutorial: {
    //       done_geolocation: true
    //     }
    //   };
    //   const req = {};
    //   const profile = await attach_profile_location(profile_changes, req);

    //   expect(profile.location_country).toEqual('country');
    //   expect(profile.location_city).toEqual('city');
    //   expect(locationService).toBeCalledTimes(1);
    //   expect(locationService.mock.results[0].value.ip_based).toBeCalledTimes(1);
    //   expect(locationService.mock.results[0].value.ip_based).toBeCalledWith('1.1.1.1');
    //   expect(requestService.get_ip).toBeCalledTimes(1);
    // });

    it('should want update geolocation ip based', () => {
      const profile_changes = {
        tutorial: {
          done_geolocation: true
        }
      };

      expect(attach_profile.want_done_geolocation(profile_changes)).toBe(true);
    });

    it('should want update geolocation', () => {
      const profile_changes = {
        geolocation: {
          latitude: 1,
          longitude: 1
        }
      };

      expect(attach_profile.want_update_geolocation(profile_changes)).toBe(true);
    });
  });
});

