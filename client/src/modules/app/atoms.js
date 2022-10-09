import { atomFamily } from 'recoil';
import services from '../core/services';

const usersService = services.users();

export const getCurrentUserAtom = atomFamily({
  key: 'getCurrentUser',
  default: () => {
    return usersService.get({___populate: 'profile'}).
    then(([user]) => user);
  }
});
