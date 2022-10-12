import {generateObjectId} from '../utils';

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
    email: '4623@holbertonstudents.com',
    picture: 'https://lh3.googleusercontent.com/a/ALm5wu0xsGkf6zbCIl8OX9ptpTVplezLImHuhLkP0U2R=s96-c',
    provider: 'google',
    provider_user_id: '117735676720136783794',
    is_active: true
  }
];
