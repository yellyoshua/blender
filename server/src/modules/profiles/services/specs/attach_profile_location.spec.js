import attach_profile_location from '../attach_profile_location';
import locationService from '../../../shared/services/location.service';
import requestService from '../../../shared/services/request.service';
import {describe, beforeEach, afterEach, it, jest, expect} from '@jest/globals';

jest.mock('../../../shared/services/location.service');
jest.mock('../../../shared/services/request.service');

describe('attach_profile_location', () => {
  describe('when profile skip geolocation', () => {
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

    it('should return profile without changes', async () => {
      const profile_changes = {
        tutorial: {
          done_geolocation: true
        }
      };
      const req = {};
      const profile = await attach_profile_location(profile_changes, req);

      expect(profile.location_country).toEqual('country');
      expect(profile.location_city).toEqual('city');
      expect(locationService).toBeCalledTimes(1);
      expect(locationService.mock.results[0].value.ip_based).toBeCalledTimes(1);
      expect(locationService.mock.results[0].value.ip_based).toBeCalledWith('1.1.1.1');
      expect(requestService.get_ip).toBeCalledTimes(1);
    });
  });
});

