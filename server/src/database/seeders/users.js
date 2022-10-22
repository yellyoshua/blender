import {generateObjectId} from '../utils';
import {PROFILES_REF} from './profiles';

export const USERS_REF = {
  yoshua: generateObjectId('yoshua'),
  laura: generateObjectId('laura'),
  paz: generateObjectId('paz')
};

export default [
  {
    _id: USERS_REF.yoshua,
    first_name: 'Yoshua',
    last_name: 'Lopez',
    picture: '/images/avatar-default.svg',
    email: 'yoshua@sample.mail',
    provider: 'google',
    provider_user_id: '111111',
    is_active: true,
    profile: PROFILES_REF.yoshua
  },
  {
    _id: USERS_REF.laura,
    first_name: 'Laura',
    last_name: 'Socarras',
    picture: '/images/avatar-default.svg',
    email: 'laura@sample.mail',
    provider: 'google',
    provider_user_id: '222222',
    is_active: true,
    profile: PROFILES_REF.laura
  },
  {
    _id: USERS_REF.paz,
    first_name: 'Maria Paz',
    last_name: 'Quirola',
    picture: '/images/avatar-default.svg',
    email: 'paz@sample.mail',
    provider: 'google',
    provider_user_id: '333333',
    is_active: true,
    profile: PROFILES_REF.paz
  }
];
