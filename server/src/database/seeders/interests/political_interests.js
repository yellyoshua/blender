import {generateObjectId} from '../../utils';

export const INTERESTS_REF = {

  political_right: generateObjectId('political_right'),
  political_left: generateObjectId('political_left'),
  political_centre: generateObjectId('political_centre')
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
