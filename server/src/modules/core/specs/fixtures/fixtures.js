import mongoose from "mongoose";

const id = mongoose.Types.ObjectId;

export const users = [
  {
    _id: id('5f9f1b9b9c9c1b0b5c0b0b0b'),
    name: 'test_name',
    profile: id('5f9f1b9b9c9c1b0b5c0b0b0c'),
  }
];

export const profiles = [
  {
    _id: id('5f9f1b9b9c9c1b0b5c0b0b0c'),
    location_country: 'test_country',
    location_city: 'test_city',
    interests: [id('5f9f1b9b9c9c1b0b5c0b0b0d')],
  }
];

export const interests = [
  {
    _id: id('5f9f1b9b9c9c1b0b5c0b0b0d'),
    name: 'test_interest',
    type: 'test_type'
  },
  {
    _id: id('5f9f1b9b9c9c1b0b5c0b0b0e'),
    name: 'test_interest_2',
    type: 'test_type'
  }
];


