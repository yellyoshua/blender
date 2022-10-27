import createStore from 'zustand';

import services from '../../core/services';

const user_populate = [
  'profile_picture',
  'profile',
  'profile.interests',
  'profile.personalities'
].join(',');

export const useUserStore = createStore((set, get) => ({
  user: null,
  loading: false,
  getUser: async () => {
    set({loading: true});
    const [user] = await services.users.get({
      ___populate: user_populate
    });
    set({user});
    set({loading: false});
  },
  updateProfile: async (profile) => {
    set({loading: true});
    const profile_updated = await services.profiles.put(profile, {
      ___populate: user_populate
    });
    set((prevState) => ({
      user: {...prevState.user, profile_updated}
    }));
    await get().getUser();
    set({loading: false});
  }
}));
