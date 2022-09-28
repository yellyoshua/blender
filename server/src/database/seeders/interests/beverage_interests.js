import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  beverage_beer: id('53ea737346f584b80c0002b1'),
  beverage_wine: id('53d54f22f1d5ea877300031b'),
  beverage_whiskey: id('53d54f22f1d5ea8773000338'),
  beverage_vodka: id('53ea266f9aadb8ac0c00003f'),
  beverage_cocktail: id('53ea298a36e9abb40c00007d'),
  beverage_tequila: id('53ea2e8136e9abb40c0000c2'),
  beverage_smoothie: id('53ea321ba51beeb00c000064'),
  beverage_juice: id('53ea325a46f584b80c000068'),
  beverage_coffee: id('53ea327736e9abb40c000109'),
  beverage_tea: id('53ea38149aadb8ac0c000089'),
  beverage_water: id('53ea3f3fa51beeb00c0000b9'),
  beverage_hot_chocolate: id('53ea3f9746f584b80c000085')
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
