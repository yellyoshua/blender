import createStore from 'zustand';

import services from '../core/services';

export const useDiscoverStores = createStore((set) => ({
  matches: [],
  loading: false,
  error: null,
  getMatches: async (query) => {
    set({ loading: true, error: null });
    try {
      const response = await services.matches.get(query);
      set({ matches: response.data });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  }
}));
