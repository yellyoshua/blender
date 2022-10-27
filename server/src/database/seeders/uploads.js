import {generateObjectId} from '../utils';

export const UPLOADS_REF = {
  doggies_portrait: generateObjectId('doggies_portrait')
};

export default [
  {
    _id: UPLOADS_REF.doggies_portrait,
    location: 'cover_picture',
    user: generateObjectId('random_user'),
    url: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    is_active: true
  }
];
