import createStore from 'zustand';

import services from '../core/services';

export const useDiscoverStores = createStore((set) => ({
  potentialMatches: [],
  loading: false,
  discover: async () => {
    set({ loading: true, error: null });
    try {
      const potentialMatches = await services.discover.get();
      set({ potentialMatches });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  }
}));
