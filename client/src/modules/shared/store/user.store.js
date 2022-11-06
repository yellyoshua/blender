import createStore from 'zustand';

import services from '../../core/services';

export const useUserStore = createStore((set, get) => ({
  user: null,
  loading: false,
  getUser: async () => {
    set({loading: true});
    const [user] = await services.users.get();
    set({user});
    set({loading: false});
  },
  updateProfile: async (profile) => {
    set({loading: true});
    const profile_updated = await services.profiles.put(profile);
    set((prevState) => ({
      user: {...prevState.user, profile_updated}
    }));
    await get().getUser();
    set({loading: false});
  }
}));
