import {generateObjectId} from '../utils';
import {UPLOADS_REF} from './uploads';
import {USERS_REF} from './users';
import {INTERESTS_REF} from './interests';

export const COMMUNITIES_REF = {
  doggies: generateObjectId('doggies')
};

export default [
  {
    _id: COMMUNITIES_REF.doggies,
    name: 'Doggies',
    description: 'Doggies are the best',
    image: UPLOADS_REF.doggies_portrait,
    members: [
      USERS_REF.antonieta,
      USERS_REF.fernando,
      USERS_REF.lorena
    ],
    posts: [],
    admins: [USERS_REF.antonieta],
    interests: [
      INTERESTS_REF.book_romance,
      INTERESTS_REF.hobby_camping,
      INTERESTS_REF.hobby_traveling,
      INTERESTS_REF.music_salsa,
      INTERESTS_REF.sport_snowboarding
    ],
    worldwide: true,
    country: 'Ecuador'
  }
];
