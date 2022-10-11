import {generateObjectId} from '../../utils';

export const INTERESTS_REF = {
  cuisine_american: generateObjectId('cuisine_american'),
  cuisine_brazilian: generateObjectId('cuisine_brazilian'),
  cuisine_caribbean: generateObjectId('cuisine_caribbean'),
  cuisine_chinese: generateObjectId('cuisine_chinese'),
  cuisine_french: generateObjectId('cuisine_french'),
  cuisine_german: generateObjectId('cuisine_german'),
  cuisine_greek: generateObjectId('cuisine_greek'),
  cuisine_indian: generateObjectId('cuisine_indian'),
  cuisine_italian: generateObjectId('cuisine_italian'),
  cuisine_japanese: generateObjectId('cuisine_japanese'),
  cuisine_korean: generateObjectId('cuisine_korean'),
  cuisine_mediterranean: generateObjectId('cuisine_mediterranean'),
  cuisine_mexican: generateObjectId('cuisine_mexican'),
  cuisine_moroccan: generateObjectId('cuisine_moroccan'),
  cuisine_thai: generateObjectId('cuisine_thai'),
  cuisine_turkish: generateObjectId('cuisine_turkish'),
  cuisine_vietnamese: generateObjectId('cuisine_vietnamese'),
  cuisine_vegan: generateObjectId('cuisine_vegan'),
  cuisine_vegetarian: generateObjectId('cuisine_vegetarian'),
  cuisine_pescatarian: generateObjectId('cuisine_pescatarian')
};

export default [
  {
    _id: INTERESTS_REF.cuisine_american,
    type: 'cuisine',
    name: 'American'
  },
  {
    _id: INTERESTS_REF.cuisine_brazilian,
    type: 'cuisine',
    name: 'Brazilian'
  },
  {
    _id: INTERESTS_REF.cuisine_caribbean,
    type: 'cuisine',
    name: 'Caribbean'
  },
  {
    _id: INTERESTS_REF.cuisine_chinese,
    type: 'cuisine',
    name: 'Chinese'
  },
  {
    _id: INTERESTS_REF.cuisine_french,
    type: 'cuisine',
    name: 'French'
  },
  {
    _id: INTERESTS_REF.cuisine_german,
    type: 'cuisine',
    name: 'German'
  },
  {
    _id: INTERESTS_REF.cuisine_greek,
    type: 'cuisine',
    name: 'Greek'
  },
  {
    _id: INTERESTS_REF.cuisine_indian,
    type: 'cuisine',
    name: 'Indian'
  },
  {
    _id: INTERESTS_REF.cuisine_italian,
    type: 'cuisine',
    name: 'Italian'
  },
  {
    _id: INTERESTS_REF.cuisine_japanese,
    type: 'cuisine',
    name: 'Japanese'
  },
  {
    _id: INTERESTS_REF.cuisine_korean,
    type: 'cuisine',
    name: 'Korean'
  },
  {
    _id: INTERESTS_REF.cuisine_mediterranean,
    type: 'cuisine',
    name: 'Mediterranean'
  },
  {
    _id: INTERESTS_REF.cuisine_mexican,
    type: 'cuisine',
    name: 'Mexican'
  },
  {
    _id: INTERESTS_REF.cuisine_moroccan,
    type: 'cuisine',
    name: 'Moroccan'
  },
  {
    _id: INTERESTS_REF.cuisine_thai,
    type: 'cuisine',
    name: 'Thai'
  },
  {
    _id: INTERESTS_REF.cuisine_turkish,
    type: 'cuisine',
    name: 'Turkish'
  },
  {
    _id: INTERESTS_REF.cuisine_vietnamese,
    type: 'cuisine',
    name: 'Vietnamese'
  },
  {
    _id: INTERESTS_REF.cuisine_vegan,
    type: 'cuisine',
    name: 'Vegan'
  },
  {
    _id: INTERESTS_REF.cuisine_vegetarian,
    type: 'cuisine',
    name: 'Vegetarian'
  },
  {
    _id: INTERESTS_REF.cuisine_pescatarian,
    type: 'cuisine',
    name: 'Pescatarian'
  }
];
