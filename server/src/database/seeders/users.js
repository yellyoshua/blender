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
    first_name: 'JC',
    last_name: 'Connor',
    picture: 'https://i.pinimg.com/564x/1d/55/fe/1d55feec31162ce932689190f81bbd02.jpg',
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
    picture: 'https://i.pinimg.com/564x/45/39/87/45398746162d143ff9c595fd1d7f86e2.jpg',
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
    picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    email: 'antonieta@sample.mail',
    provider: 'google',
    provider_user_id: '333333',
    is_active: true,
    profile: PROFILES_REF.antonieta
  }
];
