import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  beverage_beer: id('623fb1b764fd56550e229ed7'),
  beverage_wine: id('623fb1b764fd56550e229ed8'),
  beverage_whiskey: id('623fb1b764fd56550e229ed9'),
  beverage_vodka: id('623fb1b764fd56550e229eda'),
  beverage_cocktail: id('623fb1b764fd56550e229edb'),
  beverage_tequila: id('623fb1b764fd56550e229edc'),
  beverage_smoothie: id('623fb1b764fd56550e229edd'),
  beverage_juice: id('623fb1b764fd56550e229ede'),
  beverage_coffee: id('623fb1b764fd56550e229edf'),
  beverage_tea: id('623fb1b764fd56550e229ee0'),
  beverage_water: id('623fb1b764fd56550e229ee1'),
  beverage_hot_chocolate: id('623fb1b764fd56550e229ee2')
};

export default [
  {
    _id: INTERESTS_REF.beverage_beer,
    name: 'Beer',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_wine,
    name: 'Wine',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_whiskey,
    name: 'Whiskey',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_vodka,
    name: 'Vodka',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_cocktail,
    name: 'Cocktail',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_tequila,
    name: 'Tequila',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_smoothie,
    name: 'Smoothie',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_juice,
    name: 'Juice',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_coffee,
    name: 'Coffee',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_tea,
    name: 'Tea',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_water,
    name: 'Water',
    type: 'beverage'
  },
  {
    _id: INTERESTS_REF.beverage_hot_chocolate,
    name: 'Hot Chocolate',
    type: 'beverage'
  }
];
