import createStore from 'zustand';

import services from '../core/services';

const usersService = services.users;
const profilesService = services.profiles;

export const useCurrentUserStore = createStore((set) => ({
  currentUser: null,
  loading: false,
  getCurrentUser: () => {
    set({loading: true});
    usersService.get({___populate: 'profile'}).
    then(([user]) => set({currentUser: user})).
    finally(() => set({loading: false}));
  },
  updateProfile: (profile) => {
    set({loading: true});
    profilesService.put(profile).
    then((profile) => {
      set(
        (prevState) => ({
          currentUser: {
            ...prevState.currentUser,
            profile
          }
        })
      );
    }).
    finally(() => set({loading: false}));
  }
}));
