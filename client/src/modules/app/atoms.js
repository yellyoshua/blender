import { atomFamily, selectorFamily } from 'recoil';
import services from '../core/services';

const usersService = services.users();
const profilesService = services.profiles();

export const getCurrentUserAtom = atomFamily({
  key: 'getCurrentUser',
  default: () => {
    return usersService.get({___populate: 'profile'}).
    then(([user]) => user);
  }
});

export const updateProfileAtom = atomFamily({
  key: 'updateProfile',
  default: selectorFamily({
    key: 'updateProfile/Default',
    set: (profile) => ({set}) => {
      return profilesService.update(profile).
      then((profile) => {
        set(getCurrentUserAtom, (user) => {
          return {...user, profile};
        });
      });
    }
  })
});
