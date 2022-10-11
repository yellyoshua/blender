import {generateObjectId} from '../utils';
import {INTERESTS_REF} from './interests/index.js';
import {PERSONALITIES_REF} from './personalities.js';

export const PROFILES_REF = {
  yoshua: generateObjectId('yoshua'),
  laura: generateObjectId('laura'),
  paz: generateObjectId('paz')
};

export default [
  {
    _id: PROFILES_REF.yoshua,
    birthday: new Date(2001, 6, 29),
    location_country: 'Ecuador',
    location_city: 'Quito',
    geolocation: {
      latitude: -0.1806532,
      longitude: -78.4678382
    },
    interests: [
      INTERESTS_REF.beverage_whiskey,
      INTERESTS_REF.beverage_water,
      INTERESTS_REF.book_humor,
      INTERESTS_REF.book_science_fiction
    ],
    personalities: [
      PERSONALITIES_REF.analytical,
      PERSONALITIES_REF.curious,
      PERSONALITIES_REF.creative,
      PERSONALITIES_REF.calm
    ],
    gender: 'M'
  }
];
