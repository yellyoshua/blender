import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const USERS_REF = {
  yoshua: id('623fb1b764fd56550e229ed4'),
  laura: id('623fb1b764fd56550e229ed5'),
  paz: id('623fb1b764fd56550e229ed6')
};

export default [
  {
    _id: USERS_REF.yoshua,
    full_name: 'Yoshua Lopez',
    country: 'Ecuador',
    email: 'yoshua@mail.com',
    status: 'active',
    gender: 'M'
  },
  {
    _id: USERS_REF.laura,
    full_name: 'Laura Socarras',
    country: 'Colombia',
    email: 'laura@mail.com',
    status: 'active',
    gender: 'F'
  },
  {
    _id: USERS_REF.paz,
    full_name: 'Maria Paz Quirola',
    country: 'Ecuador',
    email: 'paz@mail.com',
    status: 'active',
    gender: 'F'
  }
];
