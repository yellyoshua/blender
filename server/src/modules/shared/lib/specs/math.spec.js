import {describe, expect, it} from '@jest/globals';
import math from '../math';

describe('Math shared utils', () => {
  describe('add', () => {
    it('should return the sum of all values', () => {
      expect(math.add(1, 2, 3)).toBe(6);
    });

    it('should sum decimal values', () => {
      expect(math.add(0.1, 0.2)).toBe(0.3);
      expect(math.add(0.02, 0.2)).toBe(0.22);
    });

    it('should return 0 if no values are passed', () => {
      expect(math.add()).toBe(0);
    });

    it('should return null if any value is not valid', () => {
      // eslint-disable-next-line no-undefined
      expect(math.add(1, undefined, 3)).toBe(null);
      expect(math.add(1, null, 3)).toBe(null);
    });
  });

  describe('multiply', () => {
    it('should return the multiplication of all values', () => {
      expect(math.multiply(1, 2, 3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should return the division of all values', () => {
      expect(math.divide(6, 2)).toBe(3);
    });
  });

  describe('percentage', () => {
    it('should return the percentage of the value', () => {
      expect(math.percentage(1, 2)).toBe('50.00');
    });

    it('should return the percentage of the value with decimals', () => {
      expect(math.percentage(1, 2, 1)).toBe('50.0');
    });

    it('should return the percentage of decimal values', () => {
      expect(math.percentage(0.1, 0.2)).toBe('50.00');
    });
  });

  describe('average', () => {
    it('should return the average of all values', () => {
      expect(math.average(1, 2, 3)).toBe(2);
      expect(math.average(1, 2)).toBe(1.5);
    });

    it('should return the average of decimal values', () => {
      expect(math.average(0.1, 0.2)).toBe(0.15);
    });
  });
});
