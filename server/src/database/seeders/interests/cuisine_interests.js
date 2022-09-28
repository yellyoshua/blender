import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  cuisine_american: id('623fb1b764fd56550e229edc'),
  cuisine_brazilian: id('623fb1b764fd56550e229edf'),
  cuisine_caribbean: id('623fb1b764fd56e50e2f9ee2'),
  cuisine_chinese: id('6f3fb1b764fd56f50e229ee3'),
  cuisine_french: id('623fb1b764fd56550e229ee6'),
  cuisine_german: id('623fb1b764fd56550e229ee7'),
  cuisine_greek: id('623fb1b764fd56550e229eea'),
  cuisine_indian: id('623fb1b764fd56550e229eed'),
  cuisine_italian: id('623fb1b764fd56550e229eee'),
  cuisine_japanese: id('623fb1b764fd56550e229eef'),
  cuisine_korean: id('623fb1b764fd56550e229ef0'),
  cuisine_mediterranean: id('623fb1b764fd56550e229ef1'),
  cuisine_mexican: id('623fb1b764fd56550e229ef2'),
  cuisine_moroccan: id('623fb1b764fd56550e229ef3'),
  cuisine_thai: id('623fb1b764fd56550e229ef4'),
  cuisine_turkish: id('623fb1b764fd56550e229ef5'),
  cuisine_vietnamese: id('623fb1b764fd56550e229ef6'),
  cuisine_vegan: id('623fb1b764fd56550e229ef7'),
  cuisine_vegetarian: id('623fb1b764fd56550e229ef8'),
  cuisine_pescatarian: id('623fb1b764fd56550e229ef9')
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
