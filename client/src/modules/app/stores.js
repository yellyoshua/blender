import createStore from 'zustand';

import services from '../core/services';

export const useCurrentUserStore = createStore((set) => ({
  currentUser: null,
  loading: false,
  getCurrentUser: () => {
    set({loading: true});
    services.users.get({___populate: 'profile'}).
    then(([user]) => set({currentUser: user})).
    finally(() => set({loading: false}));
  },
  updateProfile: (profile) => {
    set({loading: true});
    services.profiles.put(profile).
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

export const usePersonalitiesStores = createStore((set) => ({
  personalities: [],
  loading: false,
  getPersonalities: () => {
    set({loading: true});
    services.personalities.get().
    then((personalities) => set({personalities})).
    finally(() => set({loading: false}));
  }
}));

export const useInterestsStores = createStore((set) => ({
  interests: [],
  loading: false,
  getInterests: () => {
    set({loading: true});
    services.interests.get().
    then((interests) => set({interests})).
    finally(() => set({loading: false}));
  }
}));
