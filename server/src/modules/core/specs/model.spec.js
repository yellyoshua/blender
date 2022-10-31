import {afterAll, beforeEach, describe, expect, it} from '@jest/globals';
import core_model from '../model';
import models from '../../models';

afterAll(closeOpenHandles);

describe('Model core module', () => {
  beforeEach(async () => {
    await setupFixtures([
      `${__dirname}/fixtures/fixtures.js`
    ]);
  });

  describe('On find', () => {
    it('should [find] values of the given filter', async () => {
      const crud = instanceModel('users');

      const [user] = await crud.find({name: 'test_name'});

      expect(user._id.toString()).toBe('5f9f1b9b9c9c1b0b5c0b0b0b');
      expect(user.name).toBe('test_name');
    });

    it('should populate [find] values of the given filter', async () => {
      const crud = instanceModel('users');

      const [user] = await crud.find(
        {_id: '5f9f1b9b9c9c1b0b5c0b0b0b'},
        {populate: 'profile'}
      );

      expect(user._id.toString()).toBe('5f9f1b9b9c9c1b0b5c0b0b0b');
      expect(user.profile.location_country).toBe('test_country');
    });
  });

  describe('On update', () => {
    it('should update values of the given filter', async () => {
      const crud = instanceModel('profiles');

      const profile = await crud.update(
        {_id: '5f9f1b9b9c9c1b0b5c0b0b0c'},
        {location_country: 'test_country_updated'}
      );

      expect(profile.location_country).toBe('test_country_updated');
    });

    it('should update array values', async () => {
      const crud = instanceModel('profiles');

      const profile = await crud.update(
        {_id: '5f9f1b9b9c9c1b0b5c0b0b0c'},
        {interests: []}
      );

      expect(profile.interests).toEqual([]);
    });

    it('should update array with new values', async () => {
      const crud = instanceModel('profiles');

      const profile = await crud.update(
        {_id: '5f9f1b9b9c9c1b0b5c0b0b0c'},
        {interests: ['5f9f1b9b9c9c1b0b5c0b0b0e']}
      );

      expect(profile.interests.length).toBe(1);
    });

    it('should update array with new values', async () => {
      const crud = instanceModel('profiles');

      const profile = await crud.update(
        {_id: '5f9f1b9b9c9c1b0b5c0b0b0c'},
        {interests: ['5f9f1b9b9c9c1b0b5c0b0b0e', '5f9f1b9b9c9c1b0b5c0b0b0d']}
      );

      expect(profile.interests.length).toBe(2);
    });
  });

  function instanceModel (collection) {
    const schema = models[collection].raw;

    return core_model(schema);
  }
});
