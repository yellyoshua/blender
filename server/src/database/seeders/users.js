import {generateObjectId} from '../utils';
import {PROFILES_REF} from './profiles';

export const USERS_REF = {
  fernando: generateObjectId('fernando'),
  lorena: generateObjectId('lorena'),
  antonieta: generateObjectId('antonieta')
};

export default [
  {
    _id: USERS_REF.fernando,
    first_name: 'Fernando',
    last_name: 'Lopez',
    picture: '/images/avatar-default.svg',
    email: 'fernando@sample.mail',
    provider: 'google',
    provider_user_id: '111111',
    is_active: true,
    profile: PROFILES_REF.fernando
  },
  {
    _id: USERS_REF.lorena,
    first_name: 'Lorena',
    last_name: 'Fernandez',
    picture: '/images/avatar-default.svg',
    email: 'lorena@sample.mail',
    provider: 'google',
    provider_user_id: '222222',
    is_active: true,
    profile: PROFILES_REF.lorena
  },
  {
    _id: USERS_REF.antonieta,
    first_name: 'Maria Antonieta',
    last_name: 'Perez',
    picture: '/images/avatar-default.svg',
    email: 'antonieta@sample.mail',
    provider: 'google',
    provider_user_id: '333333',
    is_active: true,
    profile: PROFILES_REF.antonieta
  }
];
