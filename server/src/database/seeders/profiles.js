import {generateObjectId} from '../utils';
import {INTERESTS_REF} from './interests/index.js';
import {PERSONALITIES_REF} from './personalities.js';

export const PROFILES_REF = {
  fernando: generateObjectId('fernando'),
  lorena: generateObjectId('lorena'),
  antonieta: generateObjectId('antonieta')
};

export default [
  {
    _id: PROFILES_REF.fernando,
    birthdate: new Date(2001, 6, 29),
    location_country: 'Ecuador',
    location_city: 'Quito',
    tutorial: {
      done_birthdate: true,
      done_personalize_experience: true,
      done_location_country: false,
      done_location_city: false,
      done_geolocation: true,
      done_interests: true,
      done_personalities: true
    },
    geolocation: {
      latitude: -0.1806532,
      longitude: -78.4678382
    },
    interests: [
      INTERESTS_REF.beverage_whiskey,
      INTERESTS_REF.beverage_water,
      INTERESTS_REF.book_humor,
      INTERESTS_REF.book_science_fiction,
      INTERESTS_REF.cuisine_italian,
      INTERESTS_REF.cuisine_mexican,
      INTERESTS_REF.movie_family
    ],
    personalities: [
      PERSONALITIES_REF.analytical,
      PERSONALITIES_REF.curious,
      PERSONALITIES_REF.creative,
      PERSONALITIES_REF.calm,
      PERSONALITIES_REF.loyal
    ],
    gender: 'M'
  },
  {
    _id: PROFILES_REF.lorena,
    birthdate: new Date(2001, 6, 29),
    location_country: 'Colombia',
    location_city: 'Bogota',
    tutorial: {
      done_birthdate: true,
      done_personalize_experience: true,
      done_location_country: false,
      done_location_city: false,
      done_geolocation: true,
      done_interests: true,
      done_personalities: true
    },
    geolocation: {
      latitude: 4.7109886,
      longitude: -74.072092
    },
    interests: [
      INTERESTS_REF.beverage_whiskey,
      INTERESTS_REF.beverage_water,
      INTERESTS_REF.book_humor,
      INTERESTS_REF.book_science_fiction,
      INTERESTS_REF.cuisine_italian,
      INTERESTS_REF.cuisine_mexican,
      INTERESTS_REF.movie_family
    ],
    personalities: [
      PERSONALITIES_REF.quiet,
      PERSONALITIES_REF.romantic,
      PERSONALITIES_REF.creative,
      PERSONALITIES_REF.honest,
      PERSONALITIES_REF.loyal,
      PERSONALITIES_REF.friendly
    ],
    gender: 'F'
  },
  {
    _id: PROFILES_REF.antonieta,
    birthdate: new Date(2001, 6, 29),
    location_country: 'Ecuador',
    location_city: 'Quito',
    tutorial: {
      done_birthdate: true,
      done_personalize_experience: true,
      done_location_country: false,
      done_location_city: false,
      done_geolocation: true,
      done_interests: true,
      done_personalities: true
    },
    geolocation: {
      latitude: -0.1806532,
      longitude: -78.4678382
    },
    interests: [
      INTERESTS_REF.beverage_whiskey,
      INTERESTS_REF.beverage_water,
      INTERESTS_REF.beverage_vodka,
      INTERESTS_REF.book_satire,
      INTERESTS_REF.cuisine_thai,
      INTERESTS_REF.cuisine_mediterranean,
      INTERESTS_REF.movie_family
    ],
    personalities: [
      PERSONALITIES_REF.analytical,
      PERSONALITIES_REF.curious,
      PERSONALITIES_REF.creative,
      PERSONALITIES_REF.calm,
      PERSONALITIES_REF.loyal
    ],
    gender: 'F'
  }
];
