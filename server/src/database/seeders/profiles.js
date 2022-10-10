import mongoose from 'mongoose';
import {INTERESTS_REF} from './interests/index.js';
import {PERSONALITIES_REF} from './personalities.js';

const id = mongoose.Types.ObjectId;

export const PROFILES_REF = {
  yoshua: id('623fb1b764fd56550e229ed8'),
  laura: id('623fb1b764fd56550e229ed6'),
  paz: id('623fb1b764fd56580e229ed6')
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
