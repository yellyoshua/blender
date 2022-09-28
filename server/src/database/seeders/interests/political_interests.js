import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {

  political_right: id('623fb1b764fd56550e229ee0'),
  political_left: id('623fb1b764fd46550e229ee1'),
  political_centre: id('623fb1b764fd5e550e229ee2')
};

export default [
  {
    _id: INTERESTS_REF.political_right,
    name: 'Right',
    type: 'political'
  },
  {
    _id: INTERESTS_REF.political_left,
    name: 'Left',
    type: 'political'
  },
  {
    _id: INTERESTS_REF.political_centre,
    name: 'Centre',
    type: 'political'
  }
];
