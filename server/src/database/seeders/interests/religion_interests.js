import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  religion_christian: id('53ea44659aadb8ac0c0000ec'),
  religion_muslim: id('53ea603c46f584b80c0001e1'),
  religion_buddhist: id('53ea6043a51beeb00c00016a'),
  religion_hindu: id('53ea622146f584b80c0001ff'),
  religion_jewish: id('53ea637546f584b80c00020e'),
  religion_sikh: id('53ea64d346f584b80c00021f'),
  religion_atheist: id('53ea660236e9abb40c00023e'),
  religion_agnostic: id('53ea660a46f584b80c00022e')
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
