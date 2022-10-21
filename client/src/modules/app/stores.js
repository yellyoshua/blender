import createStore from 'zustand';

import services from '../core/services';

export const useCurrentUserStore = createStore((set, get) => ({
  currentUser: null,
  loading: false,
  getCurrentUser: async () => {
    set({loading: true});
    const [currentUser] = await services.users.get({
      ___populate: 'profile,profile.interests,profile.personalities'
    });
    set({currentUser});
    set({loading: false});
  },
  updateProfile: async (profile) => {
    set({loading: true});
    const profile_updated = await services.profiles.put(profile, {
      ___populate: 'profile,profile.interests,profile.personalities'
    });
    set((prevState) => ({
      currentUser: {...prevState.currentUser, profile_updated}
    }));
    await get().getCurrentUser();
    set({loading: false});
  }
}));

export const usePersonalitiesStores = createStore((set) => ({
  personalities: [],
  loading: false,
  getPersonalities: async () => {
    set({loading: true});
    const personalities = await services.personalities.get();
    set({personalities});
    set({loading: false});
  }
}));

export const useInterestsStores = createStore((set) => ({
  interests: [],
  loading: false,
  getInterests: async () => {
    set({loading: true});
    const interests = await services.interests.get();
    set({interests});
    set({loading: false});
  }
}));
