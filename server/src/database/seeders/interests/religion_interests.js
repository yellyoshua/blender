import {generateObjectId} from '../../utils';

export const INTERESTS_REF = {
  religion_christian: generateObjectId('religion_christian'),
  religion_muslim: generateObjectId('religion_muslim'),
  religion_buddhist: generateObjectId('religion_buddhist'),
  religion_hindu: generateObjectId('religion_hindu'),
  religion_jewish: generateObjectId('religion_jewish'),
  religion_sikh: generateObjectId('religion_sikh'),
  religion_atheist: generateObjectId('religion_atheist'),
  religion_agnostic: generateObjectId('religion_agnostic')
};

export default [
  {
    _id: INTERESTS_REF.religion_christian,
    name: 'Christian',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_muslim,
    name: 'Muslim',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_buddhist,
    name: 'Buddhist',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_hindu,
    name: 'Hindu',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_jewish,
    name: 'Jewish',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_sikh,
    name: 'Sikh',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_atheist,
    name: 'Atheist',
    type: 'religion'
  },
  {
    _id: INTERESTS_REF.religion_agnostic,
    name: 'Agnostic',
    type: 'religion'
  }

];
