import createStore from 'zustand';
import {persist} from 'zustand/middleware';

import services from '../../core/services';

export const useMeStore = createStore(persist((set, get) => ({
  me: null,
  loading: false,
  getMe: async () => {
    set({loading: true});
    const me = await services.me.get();
    set({me});
    set({loading: false});
  },
  updateMe: async (data, disableLoading = false) => {
    if (!disableLoading) {
      set({loading: true});
    }
    const me = await services.me.put(data);
    set({me});
    set({loading: false});
  },
  updateMeProfile: async (profile_data) => {
    set({loading: true});
    const profile_updated = await services.profiles.put(profile_data);
    set((prevState) => ({
      user: {...prevState.user, profile_updated}
    }));
    await get().getMe();
    set({loading: false});
  }
}), {name: 'me-store', whitelist: ['me'], version: 1}));
