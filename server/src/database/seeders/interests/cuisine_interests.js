import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  cuisine_american: id('53ea3f4436e9abb40c000178'),
  cuisine_brazilian: id('53ea407346f584b80c000095'),
  cuisine_caribbean: id('53ea41d846f584b80c0000bc'),
  cuisine_chinese: id('53ea4287a51beeb00c0000ea'),
  cuisine_french: id('53ea460d36e9abb40c0001ae'),
  cuisine_german: id('53ea46dca51beeb00c0000ff'),
  cuisine_greek: id('53ea46e446f584b80c00011a'),
  cuisine_indian: id('53ea571ba51beeb00c00011f'),
  cuisine_italian: id('53ea5a6936e9abb40c0001dc'),
  cuisine_japanese: id('53ea5ac936e9abb40c0001de'),
  cuisine_korean: id('53ea5c7936e9abb40c0001e2'),
  cuisine_mediterranean: id('53ea5f539aadb8ac0c00011e'),
  cuisine_mexican: id('53ea5fdd46f584b80c0001df'),
  cuisine_moroccan: id('53ea601136e9abb40c000209'),
  cuisine_thai: id('53ea60bea51beeb00c000177'),
  cuisine_turkish: id('53ea6b549aadb8ac0c00017b'),
  cuisine_vietnamese: id('53ea6be836e9abb40c000263'),
  cuisine_vegan: id('53ea6dfd9aadb8ac0c0001b7'),
  cuisine_vegetarian: id('53ea70c39aadb8ac0c0001d5'),
  cuisine_pescatarian: id('53ea70df9aadb8ac0c0001d7')
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
