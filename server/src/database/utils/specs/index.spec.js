import {describe, expect, it} from '@jest/globals';
import {getMigrationNumber, matchMigrationIdentity} from '../index';

describe('utils', () => {
  describe('getMigrationNumber', () => {
    it('should return 0001', () => {
      expect(getMigrationNumber(0)).toBe('0001');
    });

    it('should return 0002', () => {
      expect(getMigrationNumber(1)).toBe('0002');
    });

    it('should return 0003', () => {
      expect(getMigrationNumber(2)).toBe('0003');
    });
  });

  describe('matchMigrationIdentity', () => {
    it('should return 0001', () => {
      expect(matchMigrationIdentity('create_users', ['0001_create_users'])).toBe('0001_create_users');
    });

    it('should match with extension', () => {
      expect(matchMigrationIdentity('create_users', ['0001_create_users.js'])).toBe('0001_create_users.js');
    });

    it('should not match with any migration', () => {
      expect(matchMigrationIdentity('create_users', ['0002_we_create_users'])).toBeUndefined();
    });
  });
});
