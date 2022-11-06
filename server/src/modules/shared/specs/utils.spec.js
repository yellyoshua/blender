import {describe, expect, it} from '@jest/globals';
import {objectToDotNotation} from '../utils';

fdescribe('utils', () => {
  describe('Object dot notation', () => {
    it('should convert object to dot notation', () => {
      const data = {
        a: {
          b: {
            c: 1
          }
        }
      };

      const expected = {
        'a.b.c': 1
      };

      expect(objectToDotNotation(data)).toEqual(expected);
    });

    it('should convert array to dot notation', () => {
      const data = {
        a: {
          b: {
            c: [1, 2, 3]
          }
        }
      };

      const expected = {
        'a.b.c': [1, 2, 3]
      };

      expect(objectToDotNotation(data)).toEqual(expected);
    });

    it('should convert object to dot notation with empty object', () => {
      const data = {
        a: {
          b: {
            c: {}
          }
        }
      };

      const expected = {
        'a.b.c': {}
      };

      expect(objectToDotNotation(data)).toEqual(expected);
    });
  });
});
