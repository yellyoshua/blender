import useDateInfo from '../useDateInfo';
import {describe, test, expect} from '@jest/globals';

describe('useDateInfo', () => {
  const {get_date_info} = useDateInfo();
  const date = '1990-01-01';

  test('get_date_info should return an object', () => {
    expect(typeof get_date_info(date)).toBe('object');
  });

  test('get_date_info should return an object with age, zodiac, and isLegalAge properties', () => {
    expect(get_date_info(date)).toHaveProperty('age');
    expect(get_date_info(date)).toHaveProperty('zodiac');
    expect(get_date_info(date)).toHaveProperty('isLegalAge');
  });

  test('get_date_info should return an object with age, zodiac, and isLegalAge properties with correct values', () => {
    expect(get_date_info(date).age).toBe(31);
    expect(get_date_info(date).zodiac).toBe('Capricorn');
    expect(get_date_info(date).isLegalAge).toBe(true);
  });
});
