import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {


  religion_christian: id('623fb1b764fd56550e229edf'),
  religion_muslim: id('623fb1b764fd56550e229ee0'),
  religion_buddhist: id('623fb1b764fd66550e229ee1'),
  religion_hindu: id('623fb1b764fd56550e229ef2'),
  religion_jewish: id('623fb1b764fd56f50e229ee3'),
  religion_sikh: id('623fb1b764fd5f5b0e229ee4'),
  religion_atheist: id('6f3fb1e764fe56550e229ee5'),
  religion_agnostic: id('623fb1b764fd56550e229ee6')
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
