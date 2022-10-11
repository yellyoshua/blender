import {generateObjectId} from '../../utils';

export const INTERESTS_REF = {
  beverage_beer: generateObjectId('beverage_beer'),
  beverage_wine: generateObjectId('beverage_wine'),
  beverage_whiskey: generateObjectId('beverage_whiskey'),
  beverage_vodka: generateObjectId('beverage_vodka'),
  beverage_cocktail: generateObjectId('beverage_cocktail'),
  beverage_tequila: generateObjectId('beverage_tequila'),
  beverage_smoothie: generateObjectId('beverage_smoothie'),
  beverage_juice: generateObjectId('beverage_juice'),
  beverage_coffee: generateObjectId('beverage_coffee'),
  beverage_tea: generateObjectId('beverage_tea'),
  beverage_water: generateObjectId('beverage_water'),
  beverage_hot_chocolate: generateObjectId('beverage_hot_chocolate')
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
